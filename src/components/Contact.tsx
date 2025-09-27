import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MessageCircle, 
  Send, 
  Phone,
  User,
  FileText,
  Zap,
  ExternalLink
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    project: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTelegramContact = async () => {
    const telegramMessage = `🆕 Новая заявка с сайта

👤 Имя: ${formData.name || 'Не указано'}
📞 Телефон: ${formData.phone || 'Не указано'}
🎯 Тип проекта: ${formData.project || 'Не указано'}
💬 Сообщение: ${formData.message || 'Не указано'}

📱 Номер телефона используется для связи в Telegram, но для быстрее связаться напишите мне в Telegram`;

    try {
      // Отправляем через Telegram Bot API
      const botToken = '8314217513:AAHhxLHdM7biYi0FEG6hzvSPivYP6CnPkQE';
      const chatId = '7702221669';
      
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
          parse_mode: 'HTML'
        })
      });

      if (response.ok) {
        toast({
          title: "Отлично!",
          description: "Заявка успешно отправлена в Telegram",
        });
      } else {
        throw new Error('Ошибка отправки');
      }
    } catch (error) {
      console.error('Ошибка отправки в Telegram:', error);
      
      // Fallback - открываем Telegram с готовым сообщением
      const telegramUrl = `https://t.me/7702221669?text=${encodeURIComponent(telegramMessage)}`;
      window.open(telegramUrl, '_blank');
      
      toast({
        title: "Открыт Telegram",
        description: "Скопируйте сообщение и отправьте вручную",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.message) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните обязательные поля",
        variant: "destructive",
      });
      return;
    }

    // Показываем сообщение и открываем Telegram
    toast({
      title: "Отлично!",
      description: "Сейчас откроется Telegram для продолжения общения",
    });

    setTimeout(() => {
      handleTelegramContact();
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 md:py-20 px-4 md:px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-6 text-primary font-orbitron text-sm tracking-widest uppercase">
            <MessageCircle className="h-4 w-4 animate-pulse-glow" />
            <span>Инициализация связи</span>
            <MessageCircle className="h-4 w-4 animate-pulse-glow" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-orbitron font-black text-foreground mb-4 md:mb-6">
            <span className="text-neon bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              КОНТАКТЫ
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-foreground/80 font-rajdhani max-w-3xl mx-auto px-4">
            Готовы обсудить ваш проект? Заполните форму или свяжитесь напрямую в Telegram.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="card-hologram p-4 md:p-8 rounded-lg">
              <div className="flex items-center space-x-3 mb-6 md:mb-8">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-destructive rounded-full"></div>
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-accent rounded-full"></div>
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-muted rounded-full"></div>
                </div>
                <span className="text-muted-foreground font-orbitron text-xs">CONTACT_FORM</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="space-y-2">
                  <label className="text-foreground font-orbitron text-xs md:text-sm tracking-wider flex items-center">
                    <User className="h-3 w-3 md:h-4 md:w-4 mr-2 text-primary" />
                    ИМЯ *
                  </label>
                  <Input 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Введите ваше имя"
                    className="bg-background/20 border-border/50 text-foreground font-rajdhani focus:border-primary transition-colors text-sm md:text-base"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-foreground font-orbitron text-xs md:text-sm tracking-wider flex items-center">
                    <Phone className="h-3 w-3 md:h-4 md:w-4 mr-2 text-primary" />
                    ТЕЛЕФОН *
                  </label>
                  <Input 
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+7 (999) 123-45-67"
                    className="bg-background/20 border-border/50 text-foreground font-rajdhani focus:border-primary transition-colors text-sm md:text-base"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-foreground font-orbitron text-xs md:text-sm tracking-wider flex items-center">
                    <Zap className="h-3 w-3 md:h-4 md:w-4 mr-2 text-primary" />
                    ТИП ПРОЕКТА
                  </label>
                  <Input 
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    placeholder="Веб-сайт, мобильное приложение, лендинг..."
                    className="bg-background/20 border-border/50 text-foreground font-rajdhani focus:border-primary transition-colors text-sm md:text-base"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-foreground font-orbitron text-xs md:text-sm tracking-wider flex items-center">
                    <FileText className="h-3 w-3 md:h-4 md:w-4 mr-2 text-primary" />
                    ОПИСАНИЕ ПРОЕКТА *
                  </label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Расскажите подробнее о вашем проекте, целях и пожеланиях..."
                    rows={3}
                    className="bg-background/20 border-border/50 text-foreground font-rajdhani focus:border-primary transition-colors resize-none text-sm md:text-base"
                    required
                  />
                </div>

                <Button type="submit" variant="cyber" className="w-full group text-sm md:text-base">
                  <Send className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  <span className="hidden sm:inline">ОТПРАВИТЬ В TELEGRAM</span>
                  <span className="sm:hidden">В TELEGRAM</span>
                </Button>
              </form>
            </div>

            {/* Direct Contact */}
            <div className="space-y-6 md:space-y-8">
              {/* Telegram Direct */}
              <div className="terminal p-4 md:p-8 rounded-lg">
                <div className="flex items-center space-x-3 mb-4 md:mb-6">
                  <MessageCircle className="h-6 w-6 md:h-8 md:w-8 text-primary animate-pulse-glow" />
                  <h3 className="text-xl md:text-2xl font-orbitron font-bold text-foreground">
                    TELEGRAM
                  </h3>
                </div>
                
                <p className="text-foreground/80 font-rajdhani text-sm md:text-lg mb-4 md:mb-6 leading-relaxed">
                  Самый быстрый способ обсудить детали проекта — написать напрямую в Telegram. 
                  Отвечу в течение нескольких минут!
                </p>

                <Button 
                  variant="terminal" 
                  size="lg" 
                  className="w-full group text-sm md:text-base"
                  onClick={() => window.open('https://t.me/Irisarts1', '_blank')}
                >
                  <MessageCircle className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  <span className="hidden sm:inline">НАПИСАТЬ В TELEGRAM</span>
                  <span className="sm:hidden">В TELEGRAM</span>
                  <ExternalLink className="ml-2 h-3 w-3 md:h-4 md:w-4" />
                </Button>
              </div>

              {/* Why Telegram */}
              <div className="card-hologram p-4 md:p-6 rounded-lg">
                <h4 className="text-base md:text-lg font-orbitron font-bold text-primary mb-3 md:mb-4 tracking-wider">
                  ПОЧЕМУ TELEGRAM?
                </h4>
                
                <div className="space-y-2 md:space-y-3">
                  {[
                    "⚡ Мгновенные ответы",
                    "📱 Удобно с любого устройства", 
                    "🔒 Безопасная передача файлов",
                    "💬 Обсуждение в реальном времени"
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-center text-foreground/70 font-rajdhani text-sm md:text-base"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <div className="terminal p-4 md:p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-3 md:mb-4">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-destructive rounded-full"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-accent rounded-full"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-muted rounded-full"></div>
                  </div>
                  <span className="text-muted-foreground font-orbitron text-xs">RESPONSE_TIME</span>
                </div>
                
                <div className="font-orbitron text-xs md:text-sm space-y-1">
                  <div className="text-muted">$ check_availability --status</div>
                  <div className="text-foreground/70">✓ Online: 09:00 - 22:00 (MSK)</div>
                  <div className="text-foreground/70">✓ Response time: {"<"} 30 minutes</div>
                  <div className="text-primary animate-pulse">█ Ready to discuss your project</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;