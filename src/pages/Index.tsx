
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle, Code, Layout, MessageCircle, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials, services } from "@/lib/data";

const Index = () => {
  const navigate = useNavigate();
  
  const featuredTestimonials = testimonials.slice(0, 3);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Превращаем идеи в <span className="text-gradient">цифровую реальность</span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="mt-6 text-xl text-muted-foreground max-w-2xl">
                Команда CodeDigital создает инновационные IT-решения, которые помогают
                бизнесу расти и развиваться в цифровом мире
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <Button 
                size="lg" 
                className="px-8 font-medium text-base"
                onClick={() => navigate("/services")}
              >
                Наши услуги <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 font-medium text-base"
                onClick={() => navigate("/portfolio")}
              >
                Портфолио
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Наши услуги</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Предлагаем полный спектр IT-услуг для развития вашего бизнеса в цифровом пространстве
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <Card 
                  className="card-hover h-full overflow-hidden transition-all duration-300"
                  onClick={() => navigate("/services")}
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                    />
                  </div>
                  <CardContent className="pt-6">
                    <div className="flex items-start mb-4">
                      {service.id === "website-development" && <Layout className="h-6 w-6 text-primary mr-3" />}
                      {service.id === "telegram-bot" && <MessageCircle className="h-6 w-6 text-primary mr-3" />}
                      {service.id === "design-services" && <Layout className="h-6 w-6 text-primary mr-3" />}
                      {service.id === "mini-app" && <Smartphone className="h-6 w-6 text-primary mr-3" />}
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 font-medium"
              onClick={() => navigate("/services")}
            >
              Все услуги <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Почему выбирают <span className="text-gradient">CodeDigital</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Мы создаем не просто IT-решения, мы создаем инструменты для роста и развития вашего бизнеса
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Индивидуальный подход",
                    description: "Каждый проект уникален, мы разрабатываем решения под конкретные задачи и потребности"
                  },
                  {
                    title: "Прозрачность",
                    description: "Поддерживаем постоянную связь с клиентами на всех этапах работы над проектом"
                  },
                  {
                    title: "Качество и надежность",
                    description: "Следуем лучшим практикам разработки и используем современные технологии"
                  },
                  {
                    title: "Поддержка и развитие",
                    description: "Обеспечиваем техническую поддержку и помогаем развивать ваш проект"
                  }
                ].map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex"
                  >
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium">{feature.title}</h3>
                      <p className="mt-1 text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-10">
                <Button 
                  size="lg" 
                  className="px-8 font-medium text-base"
                  onClick={() => navigate("/about")}
                >
                  О нашей команде <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl -z-10" />
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800"
                alt="Команда за работой"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-10 -left-10 p-6 glass-card rounded-xl shadow-lg w-60 animate-float">
                <div className="flex items-center mb-3">
                  <Code className="h-5 w-5 text-primary mr-2" />
                  <h4 className="font-semibold">Качественный код</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Чистый, поддерживаемый и производительный
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Отзывы клиентов</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Что говорят наши клиенты о сотрудничестве с CodeDigital
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <TestimonialCard testimonial={testimonial} index={index} />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 font-medium"
              onClick={() => navigate("/about")}
            >
              Все отзывы <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Готовы начать свой проект?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Обсудите ваши идеи с нами, и мы поможем воплотить их в жизнь. Первая консультация бесплатно!
            </p>
            <Button 
              size="lg" 
              className="px-10 font-medium text-base"
              onClick={() => navigate("/services")}
            >
              Начать проект
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
