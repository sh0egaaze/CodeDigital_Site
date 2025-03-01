
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckIcon, ShoppingCart } from "lucide-react";
import { Service } from "@/lib/data";
import { useCartStore } from "@/lib/cartStore";
import { useToast } from "@/hooks/use-toast";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const { items, addItem } = useCartStore();
  const { toast } = useToast();
  const isInCart = items.some(item => item.id === service.id);

  const handleAddToCart = () => {
    if (!isInCart) {
      addItem(service);
      toast({
        title: "Добавлено в корзину",
        description: `${service.title} добавлена в корзину`,
      });
    }
  };

  return (
    <Card className="glass-card h-full transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {service.badge && (
          <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
            {service.badge}
          </Badge>
        )}
      </div>
      <CardHeader className="pb-2">
        <CardTitle>{service.title}</CardTitle>
        <CardDescription>{service.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold">{service.price.toLocaleString()} ₽</span>
              {service.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  {service.originalPrice.toLocaleString()} ₽
                </span>
              )}
            </div>
            {service.timeframe && (
              <span className="text-sm text-muted-foreground">{service.timeframe}</span>
            )}
          </div>
          <ul className="space-y-1">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start text-sm">
                <CheckIcon className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="pt-4">
        <Button 
          className="w-full" 
          onClick={handleAddToCart}
          variant={isInCart ? "secondary" : "default"}
          disabled={isInCart}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          {isInCart ? "Уже в корзине" : "Добавить в корзину"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
