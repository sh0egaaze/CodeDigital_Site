
import { motion } from "framer-motion";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader 
} from "@/components/ui/card";
import { 
  Star, 
  Quote, 
  User, 
  UserRound, 
  UserCircle, 
  MessageCircle,
  Heart,
  MessageSquare
} from "lucide-react";
import { Testimonial } from "@/lib/data";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  // Массив иконок для разнообразия
  const userIcons = [
    <UserRound className="h-full w-full p-1.5 text-primary" />,
    <UserCircle className="h-full w-full p-1.5 text-primary" />,
    <User className="h-full w-full p-1.5 text-primary" />,
    <MessageCircle className="h-full w-full p-1.5 text-primary" />,
    <Heart className="h-full w-full p-1.5 text-primary" />,
    <MessageSquare className="h-full w-full p-1.5 text-primary" />
  ];

  // Выбираем иконку в зависимости от индекса отзыва
  const UserIcon = userIcons[index % userIcons.length];

  return (
    <Card 
      className="glass-card h-full transition-all duration-300 hover:shadow-lg hover:border-primary/30 relative overflow-hidden group"
      style={{ 
        animationDelay: `${index * 0.1}s`,
        animationFillMode: 'both'
      }}
    >
      <div className="absolute -right-16 -top-16 w-32 h-32 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"></div>
      
      <CardHeader className="pb-2 relative">
        <div className="absolute -top-1 -left-1 text-4xl text-primary/20 opacity-80">
          <Quote size={32} />
        </div>
        <div className="flex pt-6">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16}
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
        <p className="text-sm italic mb-4 text-white/80 leading-relaxed">{testimonial.text}</p>
      </CardContent>
      
      <CardFooter className="pt-2 border-t border-white/10">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-primary/20 bg-background/80 flex items-center justify-center">
            {UserIcon}
          </div>
          <div>
            <p className="text-sm font-medium text-white">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground">{testimonial.company}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
