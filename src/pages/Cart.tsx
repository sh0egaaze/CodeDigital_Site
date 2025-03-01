
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useCartStore } from "@/lib/cartStore";
import CartItem from "@/components/CartItem";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Check, ShoppingCart } from "lucide-react";

const CartPage = () => {
  const { items, totalItems, totalPrice, clearCart } = useCartStore();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    telegram: "",
    phone: "",
    comments: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!items.length) {
      toast({
        title: "Корзина пуста",
        description: "Добавьте услуги в корзину перед оформлением заказа",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Format order message for Telegram
      const orderItems = items.map(item => 
        `• ${item.title} (${item.quantity}x) - ${item.price.toLocaleString()} ₽`
      ).join('\\n');
      
      const message = `
🔔 *Новый заказ!*

*Клиент:* ${formData.name}
*Telegram:* ${formData.telegram}
*Телефон:* ${formData.phone}

*Заказанные услуги:*
${orderItems}

*Комментарий:* ${formData.comments || 'Нет комментария'}

*Общая сумма:* ${totalPrice.toLocaleString()} ₽
      `;
      
      // Send to Telegram bot API
      const response = await fetch(`https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: '6201309490',
          text: message,
          parse_mode: 'Markdown',
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to send order notification');
      }
      
      setIsSuccess(true);
      clearCart();
      
      toast({
        title: "Заказ оформлен!",
        description: "Мы свяжемся с вами в ближайшее время",
      });
      
      // Reset form after successful submission
      setFormData({
        name: "",
        telegram: "",
        phone: "",
        comments: "",
      });
      
      // Reset success state after a delay
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
      
    } catch (error) {
      console.error('Error sending order:', error);
      toast({
        title: "Ошибка",
        description: "Не удалось оформить заказ. Пожалуйста, попробуйте снова позже",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 lg:max-w-6xl">
      <h1 className="text-4xl font-bold mb-8 text-center text-gradient">Корзина</h1>
      
      {items.length === 0 && !isSuccess ? (
        <div className="text-center py-16 dark-glass rounded-xl p-8">
          <ShoppingCart className="mx-auto h-16 w-16 text-white/60 mb-4" />
          <h2 className="text-2xl font-medium mb-2">Ваша корзина пуста</h2>
          <p className="text-white/70 mb-6">
            Добавьте услуги в корзину, чтобы оформить заказ
          </p>
          <Button asChild className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            <a href="/services">Просмотреть услуги</a>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {!isSuccess && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-semibold mb-4 text-white/90">Ваш заказ</h2>
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
                <div className="border-t border-white/10 pt-4">
                  <div className="flex justify-between text-lg font-medium text-white">
                    <span>Всего:</span>
                    <span>{totalPrice.toLocaleString()} ₽</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-gradient-to-br from-[#1A1F2C]/90 to-[#221F26]/80 p-8 rounded-lg border border-green-500/30 text-center backdrop-blur-sm"
              >
                <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                  <Check className="h-8 w-8 text-green-400" />
                </div>
                <h2 className="text-2xl font-semibold mb-2 text-white">Заказ оформлен!</h2>
                <p className="text-white/70 mb-6">
                  Спасибо за ваш заказ. Мы свяжемся с вами в ближайшее время для уточнения деталей.
                </p>
                <Button asChild variant="outline" className="border-white/20 bg-white/5 hover:bg-white/10 text-white">
                  <a href="/services">Вернуться к услугам</a>
                </Button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="dark-glass rounded-xl p-6"
              >
                <h2 className="text-2xl font-semibold mb-4 text-white/90">Оформление заказа</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1 text-white/80">
                      Ваше имя *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Введите ваше имя"
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="telegram" className="block text-sm font-medium mb-1 text-white/80">
                      Telegram *
                    </label>
                    <Input
                      id="telegram"
                      name="telegram"
                      value={formData.telegram}
                      onChange={handleChange}
                      required
                      placeholder="@username"
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1 text-white/80">
                      Телефон *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Введите ваш телефон"
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="comments" className="block text-sm font-medium mb-1 text-white/80">
                      Комментарий к заказу
                    </label>
                    <Textarea
                      id="comments"
                      name="comments"
                      value={formData.comments}
                      onChange={handleChange}
                      placeholder="Дополнительная информация или пожелания"
                      rows={4}
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    disabled={isSubmitting || !items.length}
                  >
                    {isSubmitting ? "Отправка..." : "Оформить заказ"}
                  </Button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default CartPage;
