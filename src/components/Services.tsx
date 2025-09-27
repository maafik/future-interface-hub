import { Button } from "@/components/ui/button";
import { 
  Monitor, 
  Palette, 
  Code, 
  Megaphone, 
  Smartphone, 
  Zap,
  ChevronRight,
  Terminal
} from "lucide-react";

const services = [
  {
    id: "01",
    title: "ВЕБ-ДИЗАЙН",
    description: "Современные и красивые веб-сайты с уникальным дизайном и UX/UI",
    icon: Palette,
    command: "$ create_web_design --style=modern --responsive=true",
  },
  {
    id: "02", 
    title: "ЛЕНДИНГ СТРАНИЦЫ",
    description: "Конверсионные landing pages для продуктов и услуг",
    icon: Monitor,
    command: "$ build_landing --conversion=high --interactive=true",
  },
  {
    id: "03",
    title: "МОБИЛЬНЫЕ ПРИЛОЖЕНИЯ", 
    description: "iOS и Android приложения с современным дизайном",
    icon: Smartphone,
    command: "$ develop_mobile_app --platform=cross --ui=modern",
  },
  {
    id: "04",
    title: "ВЕБ-ПРИЛОЖЕНИЯ",
    description: "Интерактивные веб-приложения на React и других технологиях",
    icon: Code,
    command: "$ init_web_app --framework=react --features=advanced",
  },
];

const Services = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <Button 
                  variant="terminal" 
                  className="w-full group-hover:border-primary group-hover:text-primary"
                >
                  АКТИВИРОВАТЬ МОДУЛЬ
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Glitch Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button variant="float" size="lg">
            <Zap className="mr-2 h-5 w-5" />
            ЗАПРОСИТЬ ПОЛНЫЙ ДОСТУП
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;