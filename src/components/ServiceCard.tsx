
import { useState } from "react";
import { Plus, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/lib/cartStore";
import { Service } from "@/lib/data";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const { addItem, items } = useCartStore();
  const [isHovered, setIsHovered] = useState(false);
  
  const isInCart = items.some(item => item.id === service.id);
  
  const handleAddToCart = () => {
    if (!isInCart) {
      addItem(service);
    }
  };
  
  return (
    <Card 
      className={`card-hover transition-all duration-300 overflow-hidden ${
        isInCart ? "border-primary/50 ring-1 ring-primary/20" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-video w-full">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
          style={{
            transform: isHovered ? "scale(1.05)" : "scale(1)"
          }}
        />
        {service.badge && (
          <Badge 
            className="absolute top-3 right-3 bg-primary/90 hover:bg-primary"
            variant="secondary"
          >
            {service.badge}
          </Badge>
        )}
      </div>
      
      <CardHeader>
        <CardTitle>{service.title}</CardTitle>
        <CardDescription>{service.description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-2">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-6 flex items-baseline justify-between">
          <div>
            <span className="text-2xl font-bold">{service.price} ₽</span>
            {service.originalPrice && (
              <span className="text-sm text-muted-foreground line-through ml-2">
                {service.originalPrice} ₽
              </span>
            )}
          </div>
          {service.timeframe && (
            <span className="text-sm text-muted-foreground">
              {service.timeframe}
            </span>
          )}
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          className="w-full" 
          onClick={handleAddToCart}
          disabled={isInCart}
          variant={isInCart ? "outline" : "default"}
        >
          {isInCart ? (
            <>
              <Check className="mr-2 h-4 w-4" /> В корзине
            </>
          ) : (
            <>
              <Plus className="mr-2 h-4 w-4" /> Добавить в корзину
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
