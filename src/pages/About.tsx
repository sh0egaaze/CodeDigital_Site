
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import { teamMembers, testimonials } from "@/lib/data";

const About = () => {
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
              О команде <span className="text-gradient">CodeDigital</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Познакомьтесь с командой профессионалов, которая стоит за всеми нашими проектами
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* About Us */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Наша миссия
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                CodeDigital — это команда профессионалов, объединенных одной целью: помогать бизнесу развиваться в цифровом пространстве.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Мы верим, что технологии должны быть доступны каждому бизнесу, независимо от его размера. Именно поэтому мы создаем эффективные IT-решения, которые помогают нашим клиентам достигать своих целей.
              </p>
              <p className="text-lg text-muted-foreground">
                Наша команда постоянно развивается, изучает новые технологии и следит за трендами в мире IT, чтобы предоставлять только самые современные и эффективные решения.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl -z-10" />
              <img 
                src="https://i.pinimg.com/736x/8f/aa/59/8faa59c403fca53b660e1e94f3fe5396.jpg"
                alt="Команда CodeDigital"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Наша команда</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Познакомьтесь с профессионалами, которые делают ваши проекты успешными
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="glass-card overflow-hidden rounded-xl"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary text-sm mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  
                  {member.social && (
                    <div className="flex space-x-4">
                      {member.social.twitter && (
                        <a href={member.social.twitter} className="text-foreground/70 hover:text-primary transition-colors">
                          <Instagram className="h-5 w-5" />
                          <span className="sr-only">Twitter</span>
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} className="text-foreground/70 hover:text-primary transition-colors">
                          <Linkedin className="h-5 w-5" />
                          <span className="sr-only">LinkedIn</span>
                        </a>
                      )}
                      {member.social.github && (
                        <a href={member.social.github} className="text-foreground/70 hover:text-primary transition-colors">
                          <Github className="h-5 w-5" />
                          <span className="sr-only">GitHub</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Что говорят наши клиенты</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Отзывы клиентов о сотрудничестве с нашей командой
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
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
        </div>
      </section>
      
      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Наши ценности</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Принципы, которыми мы руководствуемся в нашей работе
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Качество",
                description: "Мы не идем на компромиссы, когда дело касается качества. Каждый проект должен соответствовать высоким стандартам."
              },
              {
                title: "Инновации",
                description: "Мы постоянно следим за новыми технологиями и трендами, чтобы предлагать нашим клиентам самые современные решения."
              },
              {
                title: "Клиентоориентированность",
                description: "Мы всегда внимательно слушаем наших клиентов и стараемся превзойти их ожидания, предлагая решения, которые действительно работают."
              },
              {
                title: "Честность",
                description: "Мы всегда честны с нашими клиентами о сроках, стоимости и возможных трудностях, с которыми можем столкнуться в процессе работы."
              },
              {
                title: "Командная работа",
                description: "Мы верим, что только работая вместе, можно достичь лучших результатов. В нашей команде каждый член вносит свой вклад в общий успех."
              },
              {
                title: "Ответственность",
                description: "Мы несем ответственность за качество и сроки выполнения каждого проекта. Если мы беремся за работу, значит, мы уверены в своих силах."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="glass-card p-6 rounded-xl"
              >
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;