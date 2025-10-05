import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Monitor, 
  Palette, 
  Code, 
  Megaphone, 
  Smartphone, 
  Zap,
  ChevronRight,
  Terminal,
  Send,
  User,
  Phone,
  MessageCircle
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const services = [
  {
    id: "01",
    title: "Веб-разработка",
    description: "Сайты и веб‑приложения с упором на скорость и SEO",
    icon: Code,
    command: "$ build_web --framework=react --responsive=true",
  },
  {
    id: "02", 
    title: "UI/UX Дизайн",
    description: "Прототипы, дизайн‑системы и удобные интерфейсы",
    icon: Palette,
    command: "$ design_ui --system=design-tokens --a11y=true",
  },
  {
    id: "03",
    title: "Мобильные приложения", 
    description: "iOS и Android приложения на современных технологиях",
    icon: Smartphone,
    command: "$ develop_mobile --platform=cross --ui=modern",
  },
  {
    id: "04",
    title: "Брендинг",
    description: "Айдентика, логотипы и бренд‑гайд для вашего бизнеса",
    icon: Megaphone,
    command: "$ brand_init --logo=quirkynest --guide=true",
  },
  {
    id: "05",
    title: "Digital маркетинг",
    description: "Реклама, контент и аналитика для роста",
    icon: Megaphone,
    command: "$ marketing_launch --channels=multi --tracking=true",
  },
];

const Services = () => {
  const [activeForm, setActiveForm] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
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

  const handleTelegramSubmit = async (serviceTitle: string) => {
    if (!formData.name || !formData.phone) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните имя и телефон",
        variant: "destructive",
      });
      return;
    }

    const telegramMessage = `🆕 Новая заявка на услугу: ${serviceTitle}

👤 Имя: ${formData.name}
📞 Телефон: ${formData.phone}
${formData.message ? `💬 Сообщение: ${formData.message}` : ''}

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
        
        // Сброс формы
        setFormData({ name: '', phone: '', service: '', message: '' });
        setActiveForm(null);
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
        variant: "destructive",
      });
    }
  };

  const openTelegramDirect = () => {
    window.open('https://t.me/Irisarts1', '_blank');
  };

  return (
    <section id="services" className="py-20 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-6 text-primary font-orbitron text-sm tracking-widest uppercase">
            <Terminal className="h-4 w-4 animate-pulse-glow" />
            <span>Системные модули</span>
            <Terminal className="h-4 w-4 animate-pulse-glow" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-orbitron font-black text-foreground mb-6">
            <span className="text-neon bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              НАШИ УСЛУГИ
            </span>
          </h2>
          
          <p className="text-xl text-foreground/80 font-rajdhani max-w-3xl mx-auto">
            Специализируемся на веб-дизайне и разработке приложений. Каждый проект — уникальное цифровое решение.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group terminal p-8 rounded-lg hover:shadow-neon transition-all duration-500 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <div className="w-3 h-3 bg-muted rounded-full"></div>
                </div>
                <span className="text-xs font-orbitron text-muted-foreground tracking-wider">
                  MODULE_{service.id}
                </span>
              </div>

              {/* Service Icon */}
              <div className="relative mb-6">
                <service.icon className="h-16 w-16 text-primary mx-auto group-hover:text-accent transition-colors duration-300" />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Terminal Command */}
              <div className="bg-background/20 rounded p-3 mb-4 border border-muted/20">
                <code className="text-xs font-orbitron text-muted group-hover:text-primary transition-colors">
                  {service.command}
                </code>
              </div>

              {/* Service Details */}
              <div className="space-y-4">
                <h3 className="text-xl font-orbitron font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-foreground/70 font-rajdhani leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Action */}
              <div className="mt-8">
                {activeForm === service.id ? (
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <label className="text-foreground font-orbitron text-xs tracking-wider flex items-center">
                          <User className="h-3 w-3 mr-2 text-primary" />
                          ИМЯ *
                        </label>
                        <Input 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Введите ваше имя"
                          className="bg-background/20 border-border/50 text-foreground font-rajdhani focus:border-primary transition-colors text-xs"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-foreground font-orbitron text-xs tracking-wider flex items-center">
                          <Phone className="h-3 w-3 mr-2 text-primary" />
                          ТЕЛЕФОН *
                        </label>
                        <Input 
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+7 (999) 123-45-67"
                          className="bg-background/20 border-border/50 text-foreground font-rajdhani focus:border-primary transition-colors text-xs"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-foreground font-orbitron text-xs tracking-wider flex items-center">
                          <MessageCircle className="h-3 w-3 mr-2 text-primary" />
                          ДОПОЛНИТЕЛЬНО
                        </label>
                        <Textarea 
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Расскажите подробнее о вашем проекте..."
                          rows={2}
                          className="bg-background/20 border-border/50 text-foreground font-rajdhani focus:border-primary transition-colors resize-none text-xs"
                        />
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button 
                        onClick={() => handleTelegramSubmit(service.title)}
                        variant="terminal" 
                        className="flex-1 text-xs"
                      >
                        <Send className="mr-2 h-3 w-3" />
                        ОТПРАВИТЬ
                      </Button>
                      <Button 
                        onClick={() => setActiveForm(null)}
                        variant="outline" 
                        className="text-xs"
                      >
                        ОТМЕНА
                      </Button>
                    </div>

                    <div className="text-center space-y-2">
                      <p className="text-xs text-muted-foreground">
                        Номер телефона используется для связи в Telegram, но для быстрее связаться:
                      </p>
                      <Button 
                        onClick={openTelegramDirect}
                        variant="outline" 
                        size="sm"
                        className="text-xs border-primary/50 text-primary hover:bg-primary/10"
                      >
                        <MessageCircle className="mr-2 h-3 w-3" />
                        НАПИСАТЬ В TELEGRAM
                      </Button>
                    </div>
                  </div>
                ) : (
                  <Button 
                    onClick={() => setActiveForm(service.id)}
                    variant="terminal" 
                    className="w-full group-hover:border-primary group-hover:text-primary"
                  >
                    ЗАКАЗАТЬ УСЛУГУ
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>

              {/* Glitch Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-orbitron font-bold text-foreground">
              Готовы начать проект?
            </h3>
            <p className="text-foreground/70 font-rajdhani max-w-2xl mx-auto">
              Свяжитесь с нами для обсуждения вашего проекта. Отвечу в течение нескольких минут!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              variant="terminal" 
              size="lg"
              className="group"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              СВЯЗАТЬСЯ
            </Button>
            <Button 
              onClick={openTelegramDirect}
              variant="outline" 
              size="lg" 
              className="border-primary/50 text-primary hover:bg-primary/10"
            >
              <Terminal className="mr-2 h-5 w-5" />
              TELEGRAM
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;