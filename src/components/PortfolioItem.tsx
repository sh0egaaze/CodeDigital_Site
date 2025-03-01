
import { useState } from "react";
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
import { ExternalLink } from "lucide-react";
import { PortfolioProject } from "@/lib/data";

interface PortfolioItemProps {
  project: PortfolioProject;
}

const PortfolioItem = ({ project }: PortfolioItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card 
      className="card-hover transition-all duration-300 overflow-hidden"
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
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <Badge 
              key={index} 
              variant="secondary"
              className="bg-primary/90 hover:bg-primary text-white"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.client}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <p className="text-sm text-muted-foreground">{project.description}</p>
      </CardContent>
      
      <CardFooter>
        {project.link && (
          <Button variant="outline" asChild>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Посмотреть <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default PortfolioItem;
