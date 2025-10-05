import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Check, 
  X, 
  Zap, 
  Star, 
  Rocket,
  Terminal,
  ChevronRight,
  Send,
  User,
  Phone,
  MessageCircle
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const pricingPlans = [
  {
    id: "basic",
    name: "БАЗОВЫЙ",
    price: "от 20,000₽",
    period: "за проект",
    description: "Идеально для стартапов и малого бизнеса",
    icon: Terminal,
    popular: false,
    features: [
      "Адаптивный дизайн",
      "До 5 страниц",
      "SEO оптимизация",
      "Техническая поддержка 1 месяц",
      "Мобильная версия",
      "Базовые анимации"
    ],
    notIncluded: [
      "Интеграции с CRM",
      "Многоязычность",
      "Админ-панель"
    ],
    command: "$ init_project --tier=basic --features=standard"
  },
  {
    id: "pro",
    name: "ПРОФИ",
    price: "от 120,000₽",
    period: "за проект",
    description: "Для растущего бизнеса с расширенными возможностями",
    icon: Rocket,
    popular: true,
    features: [
      "Все из Базового",
      "До 15 страниц",
      "Интеграции с CRM",
      "Админ-панель",
      "Многоязычность",
      "Продвинутые анимации",
      "Техподдержка 3 месяца",
      "Аналитика и метрики"
    ],
    notIncluded: [
      "Индивидуальные модули",
      "Белый лейбл"
    ],
    command: "$ init_project --tier=pro --features=advanced"
  },
  {
    id: "enterprise",
    name: "КОРПОРАТИВНЫЙ",
    price: "от 270,000₽",
    period: "за проект",
    description: "Полноценные решения для крупных компаний",
    icon: Star,
    popular: false,
    features: [
      "Все из Профи",
      "Неограниченные страницы",
      "Индивидуальные модули",
      "Белый лейбл",
      "Приоритетная поддержка",
      "Dedicated менеджер",
      "Техподдержка 6 месяцев",
      "Обучение команды"
    ],
    notIncluded: [],
    command: "$ init_project --tier=enterprise --features=unlimited"
  }
];

const Pricing = () => {
  const [activeForm, setActiveForm] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    plan: '',
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

  const handleTelegramSubmit = async (planName: string, planPrice: string) => {
    if (!formData.name || !formData.phone) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните имя и телефон",
        variant: "destructive",
      });
      return;
    }

    const telegramMessage = `💰 Заказ тарифного плана: ${planName} (${planPrice})

👤 Имя: ${formData.name}
📞 Телефон: ${formData.phone}
${formData.message ? `💬 Дополнительно: ${formData.message}` : ''}

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
          description: "Заявка на тариф успешно отправлена в Telegram",
        });
        
        // Сброс формы
        setFormData({ name: '', phone: '', plan: '', message: '' });
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
    <section id="pricing" className="py-20 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-6 text-primary font-orbitron text-sm tracking-widest uppercase">
            <Terminal className="h-4 w-4 animate-pulse-glow" />
            <span>Тарифные планы</span>
            <Terminal className="h-4 w-4 animate-pulse-glow" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-orbitron font-black text-foreground mb-6">
            <span className="text-neon bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ЦЕНЫ И ПАКЕТЫ
            </span>
          </h2>
          
          <p className="text-xl text-foreground/80 font-rajdhani max-w-3xl mx-auto">
            Выберите подходящий тариф для вашего проекта. Все цены указаны за полный цикл разработки.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={plan.id}
              className={`group terminal relative overflow-hidden transition-all duration-500 hover:shadow-neon ${
                plan.popular 
                  ? 'border-primary shadow-neon scale-105' 
                  : 'border-muted/20 hover:border-primary/50'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between p-4 border-b border-muted/20">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <div className="w-3 h-3 bg-muted rounded-full"></div>
                </div>
                <div className="flex items-center space-x-2">
                  {plan.popular && (
                    <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                      <Zap className="h-3 w-3 mr-1" />
                      ПОПУЛЯРНЫЙ
                    </Badge>
                  )}
                  <span className="text-xs font-orbitron text-muted-foreground tracking-wider">
                    TIER_{plan.id.toUpperCase()}
                  </span>
                </div>
              </div>

              <CardHeader className="text-center pb-4">
                {/* Plan Icon */}
                <div className="relative mb-4">
                  <plan.icon className="h-12 w-12 text-primary mx-auto group-hover:text-accent transition-colors duration-300" />
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Terminal Command */}
                <div className="bg-background/20 rounded p-2 mb-4 border border-muted/20">
                  <code className="text-xs font-orbitron text-muted group-hover:text-primary transition-colors">
                    {plan.command}
                  </code>
                </div>

                <CardTitle className="text-2xl font-orbitron font-bold text-foreground group-hover:text-primary transition-colors">
                  {plan.name}
                </CardTitle>
                
                <div className="space-y-2">
                  <div className="text-3xl font-orbitron font-black text-primary">
                    {plan.price}
                  </div>
                  <div className="text-sm text-muted-foreground font-rajdhani">
                    {plan.period}
                  </div>
                </div>
                
                <p className="text-foreground/70 font-rajdhani text-sm">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <div className="space-y-3">
                  <h4 className="font-orbitron font-semibold text-foreground text-sm tracking-wider uppercase">
                    Включено:
                  </h4>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground/80 font-rajdhani">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Not Included */}
                {plan.notIncluded.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="font-orbitron font-semibold text-foreground/60 text-sm tracking-wider uppercase">
                      Не включено:
                    </h4>
                    {plan.notIncluded.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <X className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                        <span className="text-sm text-muted-foreground font-rajdhani">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA Button */}
                {activeForm === plan.id ? (
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
                        onClick={() => handleTelegramSubmit(plan.name, plan.price)}
                        variant={plan.popular ? "default" : "terminal"}
                        className={`flex-1 text-xs ${
                          plan.popular 
                            ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                            : ''
                        }`}
                      >
                        <Send className="mr-2 h-3 w-3" />
                        ЗАКАЗАТЬ ПЛАН
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
                    onClick={() => setActiveForm(plan.id)}
                    variant={plan.popular ? "default" : "terminal"} 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                        : 'group-hover:border-primary group-hover:text-primary'
                    }`}
                  >
                    {plan.popular ? 'ВЫБРАТЬ ПЛАН' : 'ЗАКАЗАТЬ ПРОЕКТ'}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </CardContent>

              {/* Glitch Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-orbitron font-bold text-foreground">
              Нужен индивидуальный расчет?
            </h3>
            <p className="text-foreground/70 font-rajdhani max-w-2xl mx-auto">
              Свяжитесь с нами для обсуждения вашего проекта. Мы подготовим персональное предложение с учетом всех ваших требований.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              variant="terminal" 
              size="lg"
              className="group"
            >
              <Rocket className="mr-2 h-5 w-5" />
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

export default Pricing;

