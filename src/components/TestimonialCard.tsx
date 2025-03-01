
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader 
} from "@/components/ui/card";
import { Star } from "lucide-react";
import { Testimonial } from "@/lib/data";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  return (
    <Card 
      className="glass-card h-full transition-all duration-300 hover:shadow-lg"
      style={{ 
        animationDelay: `${index * 0.1}s`,
        animationFillMode: 'both'
      }}
    >
      <CardHeader className="pb-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-4 w-4 ${
                i < testimonial.rating 
                  ? "text-primary fill-primary" 
                  : "text-muted stroke-muted-foreground"
              }`}
            />
          ))}
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-sm italic mb-4">{testimonial.text}</p>
      </CardContent>
      
      <CardFooter className="pt-2 border-t">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full overflow-hidden">
            <img 
              src={testimonial.avatar} 
              alt={testimonial.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-medium">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground">{testimonial.company}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
