
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/data";

const Services = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const filteredServices = activeTab === "all" 
    ? services
    : services.filter(service => service.id === activeTab);
  
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
              Наши <span className="text-gradient">услуги</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Предоставляем полный спектр IT-услуг для эффективного развития вашего бизнеса в цифровом пространстве
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-12 md:py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full max-w-3xl">
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="website-development">Сайты</TabsTrigger>
                <TabsTrigger value="telegram-bot">Боты</TabsTrigger>
                <TabsTrigger value="design-services">Дизайн</TabsTrigger>
                <TabsTrigger value="mini-app">Mini Apps</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value={activeTab}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <ServiceCard service={service} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Наш процесс работы</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Прозрачный и эффективный процесс от идеи до реализации
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Анализ и планирование",
                description: "Изучаем ваши требования, анализируем конкурентов и разрабатываем детальный план"
              },
              {
                step: "02",
                title: "Дизайн",
                description: "Создаем прототипы и дизайн-макеты, учитывая ваши пожелания и лучшие практики UI/UX"
              },
              {
                step: "03",
                title: "Разработка",
                description: "Воплощаем дизайн в жизнь, используя современные технологии и лучшие практики"
              },
              {
                step: "04",
                title: "Запуск и поддержка",
                description: "Тестируем, запускаем проект и обеспечиваем техническую поддержку"
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="relative"
              >
                <div className="glass-card p-6 h-full relative overflow-hidden rounded-xl">
                  <span className="text-6xl font-bold text-primary/10 absolute -top-2 -left-2">
                    {process.step}
                  </span>
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mt-6 mb-4">{process.title}</h3>
                    <p className="text-muted-foreground">{process.description}</p>
                  </div>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-8 h-0.5 bg-primary/30 transform translate-x-4">
                    <div className="absolute right-0 top-1/2 w-2 h-2 bg-primary rounded-full transform -translate-y-1/2" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Часто задаваемые вопросы</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Отвечаем на популярные вопросы о наших услугах
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Сколько времени занимает разработка проекта?",
                answer: "Сроки разработки зависят от сложности проекта. Обычно разработка сайта занимает 2-4 недели, телеграм бота - 1-2 недели, а дизайн - 1-3 недели."
              },
              {
                question: "Какие технологии вы используете?",
                answer: "Мы используем современный стек технологий, включая React, Node.js, Python, и другие, в зависимости от требований проекта и поставленных задач."
              },
              {
                question: "Как происходит оплата услуг?",
                answer: "Обычно мы работаем по предоплате 50%, а остальные 50% после завершения проекта. Для крупных проектов возможна разбивка оплаты на несколько этапов."
              },
              {
                question: "Предоставляете ли вы техническую поддержку?",
                answer: "Да, мы предоставляем техническую поддержку для всех наших проектов. Условия поддержки обсуждаются индивидуально в зависимости от потребностей клиента."
              },
              {
                question: "Можно ли внести изменения в проект после его завершения?",
                answer: "Да, мы предоставляем услуги по внесению изменений и доработке проектов. Стоимость и сроки зависят от объема и сложности изменений."
              },
              {
                question: "Работаете ли вы с клиентами из других городов/стран?",
                answer: "Да, мы работаем с клиентами из любых городов и стран. Для коммуникации используем удобные для вас мессенджеры и проводим онлайн-встречи."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * (index % 2) }}
                className="glass-card p-6 rounded-xl"
              >
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Готовы обсудить ваш проект?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Свяжитесь с нами, чтобы обсудить детали. Мы всегда рады новым интересным проектам!
            </p>
            <Button 
              size="lg" 
              className="px-10 font-medium text-base"
            >
              Связаться с нами <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
