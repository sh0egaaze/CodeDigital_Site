
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioItem from "@/components/PortfolioItem";
import { portfolioProjects } from "@/lib/data";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const getProjectsByTag = (tag: string) => {
    if (tag === "all") return portfolioProjects;
    return portfolioProjects.filter(project => 
      project.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
    );
  };
  
  const filteredProjects = getProjectsByTag(activeTab);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold">
              Наше <span className="text-gradient">портфолио</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Ознакомьтесь с нашими проектами и убедитесь в качестве наших услуг
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section className="py-12 md:py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 w-full max-w-4xl">
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="веб">Веб-разработка</TabsTrigger>
                <TabsTrigger value="телеграм">Телеграм боты</TabsTrigger>
                <TabsTrigger value="дизайн">Дизайн</TabsTrigger>
                <TabsTrigger value="mini">Mini Apps</TabsTrigger>
                <TabsTrigger value="лендинг">Лендинги</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value={activeTab}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <PortfolioItem project={project} />
                  </motion.div>
                ))}
              </div>
              
              {filteredProjects.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-lg text-muted-foreground">
                    Проекты не найдены. Пожалуйста, выберите другую категорию.
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { label: "Завершенных проектов", value: "50+" },
              { label: "Довольных клиентов", value: "30+" },
              { label: "Лет на рынке", value: "5+" },
              { label: "Стран", value: "10+" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="text-center glass-card p-8 rounded-xl"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Хотите, чтобы ваш проект был в нашем портфолио?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Обсудите с нами ваши идеи, и мы поможем воплотить их в качественный цифровой продукт!
            </p>
            <Button 
              size="lg" 
              className="px-10 font-medium text-base"
              onClick={() => window.location.href="/services"}
            >
              Заказать проект
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
