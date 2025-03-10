
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, ShoppingCart, Code, Sparkles } from "lucide-react";
import { useCartStore } from "@/lib/cartStore";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { totalItems } = useCartStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Главная" },
    { href: "/services", label: "Услуги" },
    { href: "/portfolio", label: "Портфолио" },
    { href: "/about", label: "О нас" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-xl group"
          >
            <div className="relative overflow-hidden rounded-md">
              <img src="/logo.png" alt="CodeDigital Logo" className="h-8 w-auto relative z-10 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="flex items-center">
              <span className="text-gradient mr-1">Code</span>
              <Sparkles size={16} className="text-primary animate-pulse mr-1" />
              <span className="text-gradient">Digital</span>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`nav-link text-sm font-medium transition-colors duration-200 ${
                location.pathname === link.href ? "active text-primary" : "text-foreground/80 hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="relative"
          >
            <Link to="/cart">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center animate-pulse">
                  {totalItems}
                </span>
              )}
            </Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="border-l border-white/10 bg-background/90 backdrop-blur-md">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`text-lg font-medium flex items-center hover:translate-x-1 transition-transform duration-200 ${
                      location.pathname === link.href
                        ? "text-primary"
                        : "text-foreground/80"
                    }`}
                  >
                    {link.href === "/" && <Code className="h-4 w-4 mr-2" />}
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/cart"
                  className="flex items-center gap-2 text-lg font-medium mt-2 hover:translate-x-1 transition-transform duration-200"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Корзина
                  {totalItems > 0 && (
                    <span className="h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
