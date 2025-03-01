
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/cartStore";
import { Service } from "@/lib/data";

interface CartItemProps {
  item: Service;
  quantity: number;
}

const CartItem = ({ item, quantity }: CartItemProps) => {
  const { removeItem, increaseQuantity, decreaseQuantity } = useCartStore();
  
  return (
    <div className="flex items-center py-4 space-x-4">
      <div className="h-20 w-20 rounded-md overflow-hidden flex-shrink-0">
        <img 
          src={item.image} 
          alt={item.title}
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium text-foreground truncate">{item.title}</h4>
        <p className="text-sm text-muted-foreground mt-1 truncate">{item.description}</p>
        <div className="mt-1 flex items-center text-sm">
          <span className="font-medium">{item.price} ₽</span>
          {item.originalPrice && (
            <span className="text-xs text-muted-foreground line-through ml-2">
              {item.originalPrice} ₽
            </span>
          )}
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={() => decreaseQuantity(item.id)}
          disabled={quantity <= 1}
        >
          <Minus className="h-4 w-4" />
        </Button>
        
        <span className="w-6 text-center">{quantity}</span>
        
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={() => increaseQuantity(item.id)}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-destructive hover:text-destructive/90 hover:bg-destructive/10"
        onClick={() => removeItem(item.id)}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default CartItem;
