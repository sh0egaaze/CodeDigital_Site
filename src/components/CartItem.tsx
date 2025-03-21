
import { useCartStore } from "@/lib/cartStore";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Service } from "@/lib/data";

interface CartItemProps {
  item: Service & { quantity: number };
}

const CartItem = ({ item }: CartItemProps) => {
  const { removeItem, increaseQuantity, decreaseQuantity } = useCartStore();

  return (
    <div className="flex items-center gap-4 p-4 rounded-lg border border-white/10 bg-gradient-to-br from-[#1A1F2C]/80 to-[#222222] backdrop-blur-sm">
      <div className="h-16 w-16 overflow-hidden rounded-md flex-shrink-0 border border-white/10">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="flex-1 min-w-0">
        <h3 className="font-medium truncate text-white/90">{item.title}</h3>
        <p className="text-sm text-white/60">{item.price.toLocaleString()} ₽</p>
      </div>
      
      <div className="flex items-center">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full border-white/20 bg-white/5 hover:bg-white/10"
          onClick={() => decreaseQuantity(item.id)}
        >
          <Minus className="h-3 w-3" />
        </Button>
        
        <span className="mx-2 w-6 text-center text-white/90">{item.quantity}</span>
        
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full border-white/20 bg-white/5 hover:bg-white/10"
          onClick={() => increaseQuantity(item.id)}
        >
          <Plus className="h-3 w-3" />
        </Button>
      </div>
      
      <div className="text-right min-w-[80px]">
        <p className="font-medium text-white">{(item.price * item.quantity).toLocaleString()} ₽</p>
      </div>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={() => removeItem(item.id)}
        className="text-destructive hover:bg-white/5"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default CartItem;
