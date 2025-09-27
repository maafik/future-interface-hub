import { Button } from "@/components/ui/button";
import { 
  User, 
  Target, 
  Award, 
  Zap,
  Code2,
  Palette,
  Cpu,
  Globe,
  Rocket,
  Shield
} from "lucide-react";

const stats = [
  {
    number: "5+",
    label: "Лет опыта",
    description: "В создании цифровых решений",
    icon: Award,
  },
  {
    number: "200+",
    label: "Проектов",
    description: "Веб-дизайнов и приложений",
    icon: Globe,
  },
  {
    number: "50+",
    label: "Клиентов",
    description: "Довольных заказчиков",
    icon: Target,
  },
  {
    number: "24/7",
    label: "Поддержка",
    description: "Всегда на связи",
    icon: Shield,
  },
];

const skills = [
  {
    name: "UI/UX ДИЗАЙН",
    level: 95,
    icon: Palette,
    description: "Создание интуитивных и красивых интерфейсов",
  },
  {
    name: "ВЕБ-РАЗРАБОТКА",
    level: 90,
    icon: Code2,
    description: "Современные веб-приложения и сайты",
  },
  {
    name: "МОБИЛЬНАЯ РАЗРАБОТКА",
    level: 85,
    icon: Cpu,
    description: "Кроссплатформенные мобильные приложения",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background/50"></div>
      <div className="absolute top-20 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-6 text-primary font-orbitron text-sm tracking-widest uppercase">
            <User className="h-4 w-4 animate-pulse-glow" />
            <span>Информация о системе</span>
            <User className="h-4 w-4 animate-pulse-glow" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-orbitron font-black text-foreground mb-6">
            <span className="text-neon bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              О НАС
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left Side - Profile */}
          <div className="space-y-8">
            {/* Main Description */}
            <div className="card-hologram p-8 rounded-lg">
              <div className="flex items-center space-x-3 mb-6">
                <Rocket className="h-8 w-8 text-primary animate-pulse-glow" />
                <h3 className="text-2xl font-orbitron font-bold text-foreground">
                  КРЕАТИВНЫЙ РАЗРАБОТЧИК
                </h3>
              </div>
              
              <p className="text-lg text-foreground/80 font-rajdhani leading-relaxed mb-6">
                Специализируюсь на создании <span className="text-primary text-neon">веб-дизайнов</span> и 
                разработке приложений с использованием передовых технологий. 
                Мой подход — это сочетание креативности и функциональности.
              </p>

              <p className="text-foreground/70 font-rajdhani leading-relaxed mb-6">
                Каждый проект — это уникальная виртуальная система, созданная 
                с учетом потребностей пользователей и современных трендов дизайна.
              </p>

              <div className="flex flex-wrap gap-3">
                {["React", "TypeScript", "Figma", "Next.js", "Node.js", "MongoDB"].map((tech, index) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-primary/20 border border-primary/30 rounded text-primary font-orbitron text-xs tracking-wider"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Mission */}
            <div className="terminal p-6 rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <div className="w-3 h-3 bg-muted rounded-full"></div>
                </div>
                <span className="text-muted-foreground font-orbitron text-xs">MISSION_STATEMENT</span>
              </div>
              
              <div className="font-orbitron text-sm space-y-2">
                <div className="text-muted">$ cat mission.txt</div>
                <div className="text-foreground/80">
                  "Создавать цифровые решения, которые не просто работают,<br/>
                  а вдохновляют и улучшают жизнь пользователей"
                </div>
                <div className="text-primary animate-pulse">█</div>
              </div>
            </div>
          </div>

          {/* Right Side - Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-orbitron font-bold text-primary mb-8 tracking-wider">
              ТЕХНИЧЕСКИЕ НАВЫКИ
            </h3>
            
            {skills.map((skill, index) => (
              <div key={skill.name} className="card-hologram p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <skill.icon className="h-6 w-6 text-primary" />
                    <span className="font-orbitron font-bold text-foreground">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-primary font-orbitron font-bold">
                    {skill.level}%
                  </span>
                </div>
                
                <p className="text-foreground/70 font-rajdhani text-sm mb-4">
                  {skill.description}
                </p>
                
                <div className="w-full bg-background/30 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out shadow-neon"
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.3}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center terminal p-6 rounded-lg hover:shadow-neon transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-4">
                <stat.icon className="h-12 w-12 text-primary mx-auto" />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-50"></div>
              </div>
              
              <div className="text-3xl font-orbitron font-black text-primary text-neon mb-2">
                {stat.number}
              </div>
              <div className="text-foreground font-rajdhani font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-foreground/60 font-rajdhani text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="card-hologram p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-orbitron font-bold text-primary mb-4">
              ГОТОВЫ НАЧАТЬ ПРОЕКТ?
            </h3>
            <p className="text-foreground/80 font-rajdhani text-lg mb-6">
              Давайте создадим что-то невероятное вместе. 
              Обсудим ваши идеи и воплотим их в цифровую реальность.
            </p>
            <Button 
              variant="cyber" 
              size="lg"
              className="group cyber-glow button-ripple button-focus button-press"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              НАЧАТЬ СОТРУДНИЧЕСТВО
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;