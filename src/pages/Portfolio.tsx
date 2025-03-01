
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioItem from "@/components/PortfolioItem";
import { portfolioProjects } from "@/lib/data";
import { Award, Star, TrendingUp, Users } from "lucide-react";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });
  
  const getProjectsByTag = (tag: string) => {
    if (tag === "all") return portfolioProjects;
    return portfolioProjects.filter(project => 
      project.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
    );
  };
  
  const filteredProjects = getProjectsByTag(activeTab);
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      <Navbar />
      
      {/* Hero Section with Particles Background */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/20 text-primary inline-block mb-4">Наши работы</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Наше <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">портфолио</span>
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-4 text-lg text-white/70 leading-relaxed"
            >
              Ознакомьтесь с нашими успешными проектами и убедитесь в качестве наших услуг.
              От веб-разработки до телеграм ботов — мы создаем цифровые решения, которые помогают бизнесу расти.
            </motion.p>
          </motion.div>
        </div>
      </section>
      
      {/* Portfolio Filter Section */}
      <section className="py-16 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f2c]/80 to-[#1a1f2c] opacity-50 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-2 md:grid-cols-6 p-1 backdrop-blur-xl bg-black/30 border border-white/10 rounded-full">
                <TabsTrigger value="all" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300">Все</TabsTrigger>
                <TabsTrigger value="веб" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300">Веб-разработка</TabsTrigger>
                <TabsTrigger value="телеграм" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300">Телеграм боты</TabsTrigger>
                <TabsTrigger value="дизайн" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300">Дизайн</TabsTrigger>
                <TabsTrigger value="mini" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300">Mini Apps</TabsTrigger>
                <TabsTrigger value="лендинг" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300">Лендинги</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value={activeTab}>
              <motion.div 
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              >
                {filteredProjects.map((project, index) => (
                  <PortfolioItem key={project.id} project={project} index={index} />
                ))}
              </motion.div>
              
              {filteredProjects.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-lg text-white/60">
                    Проекты не найдены. Пожалуйста, выберите другую категорию.
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Stats Section with Counter Animation */}
      <section ref={statsRef} className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/50 to-[#0f172a]/80 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { label: "Завершенных проектов", value: "50+", icon: <Award className="h-10 w-10 text-purple-400" /> },
              { label: "Довольных клиентов", value: "30+", icon: <Users className="h-10 w-10 text-blue-400" /> },
              { label: "Лет на рынке", value: "5+", icon: <Star className="h-10 w-10 text-amber-400" /> },
              { label: "Рост бизнеса", value: "10x", icon: <TrendingUp className="h-10 w-10 text-green-400" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:translate-y-[-5px] hover:bg-white/10 transition-all duration-300"
              >
                <div className="mx-auto mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent mb-2">{stat.value}</div>
                <div className="text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#1e293b]/30 to-[#0f172a]/60 relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Что говорят о нас клиенты
            </h2>
            <p className="text-lg text-white/70">
              Отзывы наших клиентов — лучшее подтверждение качества нашей работы
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                text: "Команда превзошла все мои ожидания. Проект был выполнен на высшем уровне и в срок. Обязательно буду работать с ними снова!",
                author: "Алексей С.",
                company: "CEO, TechStart"
              },
              {
                text: "Отличная работа над нашим интернет-магазином. Увеличение конверсии на 35% после редизайна говорит само за себя!",
                author: "Марина К.",
                company: "Маркетолог, FashionStore"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 relative"
              >
                <div className="absolute -top-4 left-8 text-6xl text-primary/30">"</div>
                <p className="text-white/80 mb-6 relative z-10">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-white">{testimonial.author}</p>
                    <p className="text-white/60 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/80 to-[#0f172a] pointer-events-none"></div>
        <div className="absolute -right-20 top-20 w-80 h-80 bg-purple-500/30 rounded-full filter blur-3xl"></div>
        <div className="absolute -left-20 bottom-20 w-80 h-80 bg-blue-500/30 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-10 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Хотите, чтобы ваш проект был в нашем портфолио?
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
              Обсудите с нами ваши идеи, и мы поможем воплотить их в качественный цифровой продукт!
            </p>
            <Button 
              size="lg" 
              className="px-10 font-medium text-base bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all duration-300"
              onClick={() => window.location.href="/services"}
            >
              Заказать проект
            </Button>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
