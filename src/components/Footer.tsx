import { Link } from "react-router-dom";
import { Github, Instagram, Linkedin, Send, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-[#1A1F2C]/90 to-[#222]/95 pt-16 pb-8 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="inline-block mb-4 flex items-center gap-2">
              <img src="/logo.png" alt="CodeDigital Logo" className="h-8 w-auto" />
              <h3 className="text-xl font-bold text-gradient">CodeDigital</h3>
            </Link>
            <p className="text-white/70 mb-4 max-w-xs">
              Команда профессионалов, которая воплощает ваши идеи в цифровую реальность
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">Github</span>
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/90">Услуги</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-white/70 hover:text-primary transition-colors">
                  Разработка сайтов
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-primary transition-colors">
                  Телеграм боты
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-primary transition-colors">
                  Дизайн
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-primary transition-colors">
                  Mini Apps
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/90">Компания</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/70 hover:text-primary transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-white/70 hover:text-primary transition-colors">
                  Портфолио
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white/70 hover:text-primary transition-colors">
                  Блог
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white/70 hover:text-primary transition-colors">
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/90">Контакты</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-white/70">
                <Send className="h-4 w-4 mr-2" />
                <a href="https://t.me/codedigital" className="hover:text-primary transition-colors">
                  @codedigital
                </a>
              </li>
              <li className="flex items-center text-white/70">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+79001234567" className="hover:text-primary transition-colors">
                  +7 (900) 123-45-67
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 opacity-10" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/50">
            &copy; {currentYear} CodeDigital. Все права защищены.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <Link to="/" className="text-white/50 hover:text-primary transition-colors">
                  Условия
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white/50 hover:text-primary transition-colors">
                  Конфиденциальность
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white/50 hover:text-primary transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
