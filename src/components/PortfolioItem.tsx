
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Card, 
  CardContent,
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLink, Eye } from "lucide-react";
import { PortfolioProject } from "@/lib/data";

interface PortfolioItemProps {
  project: PortfolioProject;
  index: number;
}

const PortfolioItem = ({ project, index }: PortfolioItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };
  
  return (
    <motion.div
      variants={item}
      className="h-full"
    >
      <Card 
        className="h-full transition-all duration-500 overflow-hidden group bg-gradient-to-br from-black/60 to-black/80 backdrop-blur-lg border border-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-primary/10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden aspect-video w-full">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60"></div>
          
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <Badge 
                key={index} 
                variant="secondary"
                className="bg-black/50 backdrop-blur-md border border-white/10 text-white/90 px-2.5 py-0.5 text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
          
          {project.link && (
            <div 
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <Button 
                variant="secondary" 
                size="sm"
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20"
                asChild
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Eye className="mr-2 h-4 w-4" /> Посмотреть проект
                </a>
              </Button>
            </div>
          )}
        </div>
        
        <CardHeader className="p-5">
          <CardTitle className="text-xl line-clamp-1 font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            {project.title}
          </CardTitle>
          <CardDescription className="text-white/60">{project.client}</CardDescription>
        </CardHeader>
        
        <CardContent className="px-5 pb-4">
          <p className="text-sm text-white/70 line-clamp-3">{project.description}</p>
        </CardContent>
        
        <CardFooter className="px-5 pb-5 pt-0 flex justify-between items-center">
          {project.link ? (
            <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/10 text-white/80" asChild>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Подробнее <ExternalLink className="ml-2 h-3.5 w-3.5" />
              </a>
            </Button>
          ) : (
            <div className="text-xs text-white/40 italic">Проект в разработке</div>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default PortfolioItem;
