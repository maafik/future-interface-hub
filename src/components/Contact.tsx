import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MessageCircle, 
  Send, 
  Mail,
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
    email: '',
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

  const handleTelegramContact = () => {
    // Открываем Telegram с заготовленным сообщением
    const telegramMessage = `Привет! Хочу обсудить проект веб-дизайна/разработки приложения.
    
${formData.name ? `Меня зовут: ${formData.name}` : ''}
${formData.project ? `Тип проекта: ${formData.project}` : ''}
${formData.message ? `Детали: ${formData.message}` : ''}`;

    const telegramUrl = `https://t.me/your_username?text=${encodeURIComponent(telegramMessage)}`;
    window.open(telegramUrl, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.message) {
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
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
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
          
          <h2 className="text-4xl md:text-6xl font-orbitron font-black text-foreground mb-6">
            <span className="text-neon bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              КОНТАКТЫ
            </span>
          </h2>
          
          <p className="text-xl text-foreground/80 font-rajdhani max-w-3xl mx-auto">
            Готовы обсудить ваш проект? Заполните форму или свяжитесь напрямую в Telegram.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-hologram p-8 rounded-lg">
              <div className="flex items-center space-x-3 mb-8">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <div className="w-3 h-3 bg-muted rounded-full"></div>
                </div>
                <span className="text-muted-foreground font-orbitron text-xs">CONTACT_FORM</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-foreground font-orbitron text-sm tracking-wider flex items-center">
                    <User className="h-4 w-4 mr-2 text-primary" />
                    ИМЯ *
                  </label>
                  <Input 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Введите ваше имя"
                    className="bg-background/20 border-border/50 text-foreground font-rajdhani focus:border-primary transition-colors"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-foreground font-orbitron text-sm tracking-wider flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-primary" />
                    EMAIL
                  </label>
                  <Input 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="bg-background/20 border-border/50 text-foreground font-rajdhani focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-foreground font-orbitron text-sm tracking-wider flex items-center">
                    <Zap className="h-4 w-4 mr-2 text-primary" />
                    ТИП ПРОЕКТА
                  </label>
                  <Input 
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    placeholder="Веб-сайт, мобильное приложение, лендинг..."
                    className="bg-background/20 border-border/50 text-foreground font-rajdhani focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-foreground font-orbitron text-sm tracking-wider flex items-center">
                    <FileText className="h-4 w-4 mr-2 text-primary" />
                    ОПИСАНИЕ ПРОЕКТА *
                  </label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Расскажите подробнее о вашем проекте, целях и пожеланиях..."
                    rows={4}
                    className="bg-background/20 border-border/50 text-foreground font-rajdhani focus:border-primary transition-colors resize-none"
                    required
                  />
                </div>

                <Button type="submit" variant="cyber" className="w-full group">
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  ОТПРАВИТЬ В TELEGRAM
                </Button>
              </form>
            </div>

            {/* Direct Contact */}
            <div className="space-y-8">
              {/* Telegram Direct */}
              <div className="terminal p-8 rounded-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <MessageCircle className="h-8 w-8 text-primary animate-pulse-glow" />
                  <h3 className="text-2xl font-orbitron font-bold text-foreground">
                    TELEGRAM
                  </h3>
                </div>
                
                <p className="text-foreground/80 font-rajdhani text-lg mb-6 leading-relaxed">
                  Самый быстрый способ обсудить детали проекта — написать напрямую в Telegram. 
                  Отвечу в течение нескольких минут!
                </p>

                <Button 
                  variant="neon" 
                  size="lg" 
                  className="w-full group"
                  onClick={() => window.open('https://t.me/your_username', '_blank')}
                >
                  <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  НАПИСАТЬ В TELEGRAM
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Why Telegram */}
              <div className="card-hologram p-6 rounded-lg">
                <h4 className="text-lg font-orbitron font-bold text-primary mb-4 tracking-wider">
                  ПОЧЕМУ TELEGRAM?
                </h4>
                
                <div className="space-y-3">
                  {[
                    "⚡ Мгновенные ответы",
                    "📱 Удобно с любого устройства", 
                    "🔒 Безопасная передача файлов",
                    "💬 Обсуждение в реальном времени"
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-center text-foreground/70 font-rajdhani"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <div className="terminal p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-destructive rounded-full"></div>
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <div className="w-3 h-3 bg-muted rounded-full"></div>
                  </div>
                  <span className="text-muted-foreground font-orbitron text-xs">RESPONSE_TIME</span>
                </div>
                
                <div className="font-orbitron text-sm space-y-1">
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