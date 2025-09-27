import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  ArrowRight, 
  ArrowLeft,
  Smartphone, 
  Monitor, 
  Palette,
  Code,
  Zap,
  Terminal,
  Eye,
  Sparkles,
  ChevronRight,
  X,
  ExternalLink,
  Clock,
  Users,
  TrendingUp
} from "lucide-react";
import { useState } from "react";

const projectExamples = [
  {
    id: "mobile-app",
    title: "МОБИЛЬНОЕ ПРИЛОЖЕНИЕ",
    category: "iOS/Android App",
    icon: Smartphone,
    description: "Трансформация устаревшего интерфейса в современное мобильное приложение",
    beforeImage: "/before-mobile-app.png",
    afterImage: "/after-mobile-app.png",
    technologies: ["React Native", "TypeScript", "Figma"],
    improvements: [
      "Современный UI/UX дизайн",
      "Улучшенная навигация",
      "Оптимизация производительности",
      "Адаптивность под все устройства"
    ],
    command: "$ transform_app --from=legacy --to=modern --platform=mobile",
    details: {
      duration: "3 месяца",
      team: "4 специалиста",
      budget: "от $15,000",
      results: [
        "Увеличение пользовательской активности на 250%",
        "Снижение времени загрузки на 60%",
        "Рост конверсии на 180%",
        "4.8/5 рейтинг в App Store"
      ],
      challenges: [
        "Миграция с устаревшей архитектуры",
        "Оптимизация для слабых устройств",
        "Синхронизация данных в реальном времени"
      ],
      solutions: [
        "Полная переработка архитектуры приложения",
        "Внедрение кэширования и ленивой загрузки",
        "Использование WebSocket для real-time обновлений"
      ]
    }
  },
  {
    id: "website-redesign",
    title: "РЕДИЗАЙН САЙТА",
    category: "Web Redesign",
    icon: Monitor,
    description: "Полная модернизация корпоративного сайта с улучшением конверсии",
    beforeImage: "/before-website.png",
    afterImage: "/after-website.png",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    improvements: [
      "Современный дизайн",
      "Увеличение конверсии на 40%",
      "SEO оптимизация",
      "Мобильная адаптация"
    ],
    command: "$ redesign_website --focus=conversion --style=modern",
    details: {
      duration: "2 месяца",
      team: "3 специалиста",
      budget: "от $8,000",
      results: [
        "Рост конверсии на 40%",
        "Улучшение SEO позиций на 65%",
        "Снижение времени загрузки на 45%",
        "Увеличение времени на сайте на 120%"
      ],
      challenges: [
        "Сохранение существующего контента",
        "Миграция без потери SEO",
        "Адаптация под мобильные устройства"
      ],
      solutions: [
        "Поэтапная миграция с сохранением URL структуры",
        "Внедрение современных SEO практик",
        "Mobile-first подход к дизайну"
      ]
    }
  },
  {
    id: "web-app",
    title: "ВЕБ-ПРИЛОЖЕНИЕ",
    category: "Web Application",
    icon: Code,
    description: "Создание интерактивного веб-приложения с нуля",
    beforeImage: "/before-webapp.png",
    afterImage: "/after-webapp.png",
    technologies: ["Vue.js", "Node.js", "PostgreSQL"],
    improvements: [
      "Интуитивный интерфейс",
      "Быстрая загрузка",
      "Безопасность данных",
      "Масштабируемость"
    ],
    command: "$ create_webapp --framework=vue --features=advanced",
    details: {
      duration: "4 месяца",
      team: "5 специалистов",
      budget: "от $25,000",
      results: [
        "Обработка 10,000+ пользователей одновременно",
        "Время отклика менее 200мс",
        "99.9% uptime",
        "Снижение серверных затрат на 30%"
      ],
      challenges: [
        "Высокая нагрузка на сервер",
        "Безопасность пользовательских данных",
        "Интеграция с внешними API"
      ],
      solutions: [
        "Микросервисная архитектура",
        "JWT токены и шифрование",
        "RESTful API с rate limiting"
      ]
    }
  },
  {
    id: "ui-redesign",
    title: "UI/UX РЕДИЗАЙН",
    category: "Interface Design",
    icon: Palette,
    description: "Кардинальное улучшение пользовательского опыта",
    beforeImage: "/before-ui.png",
    afterImage: "/after-ui.png",
    technologies: ["Figma", "Adobe XD", "Principle"],
    improvements: [
      "Новая цветовая схема",
      "Улучшенная типографика",
      "Интерактивные элементы",
      "Пользовательские сценарии"
    ],
    command: "$ redesign_ui --focus=ux --tools=figma",
    details: {
      duration: "1.5 месяца",
      team: "2 специалиста",
      budget: "от $5,000",
      results: [
        "Улучшение пользовательского опыта на 85%",
        "Сокращение времени выполнения задач на 50%",
        "Снижение количества ошибок на 70%",
        "Рост удовлетворенности пользователей на 90%"
      ],
      challenges: [
        "Анализ существующих пользовательских проблем",
        "Создание интуитивной навигации",
        "Баланс между функциональностью и простотой"
      ],
      solutions: [
        "Пользовательское тестирование и интервью",
        "Создание wireframes и прототипов",
        "Итеративный подход к дизайну"
      ]
    }
  }
];

const BeforeAfter = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const currentProject = projectExamples[activeProject];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(parseInt(e.target.value));
  };

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projectExamples.length);
    setSliderPosition(50);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projectExamples.length) % projectExamples.length);
    setSliderPosition(50);
  };

  return (
    <section id="before-after" className="py-16 md:py-20 px-4 md:px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-6 text-primary font-orbitron text-sm tracking-widest uppercase">
            <Terminal className="h-4 w-4 animate-pulse-glow" />
            <span>Портфолио работ</span>
            <Terminal className="h-4 w-4 animate-pulse-glow" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-orbitron font-black text-foreground mb-6">
            <span className="text-neon bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ДО И ПОСЛЕ
            </span>
          </h2>
          
          <p className="text-xl text-foreground/80 font-rajdhani max-w-3xl mx-auto">
            Реальные примеры трансформации проектов. Посмотрите, как мы превращаем идеи в цифровые решения.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Project Selector */}
          <div className="space-y-6">
            {/* Project Navigation */}
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <Button
                variant="terminal"
                onClick={prevProject}
                className="flex items-center space-x-1 md:space-x-2 text-xs md:text-sm px-2 md:px-4"
              >
                <ArrowLeft className="h-3 w-3 md:h-4 md:w-4" />
                <span className="hidden sm:inline">Предыдущий</span>
                <span className="sm:hidden">←</span>
              </Button>
              
              <div className="flex items-center space-x-2">
                <span className="text-xs md:text-sm font-orbitron text-muted-foreground">
                  {activeProject + 1} / {projectExamples.length}
                </span>
                <div className="flex space-x-1">
                  {projectExamples.map((_, index) => (
                    <div
                      key={index}
                      className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-colors ${
                        index === activeProject ? 'bg-primary' : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <Button
                variant="terminal"
                onClick={nextProject}
                className="flex items-center space-x-1 md:space-x-2 text-xs md:text-sm px-2 md:px-4"
              >
                <span className="hidden sm:inline">Следующий</span>
                <span className="sm:hidden">→</span>
                <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
              </Button>
            </div>

            {/* Current Project Info */}
            <Card className="terminal group">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <currentProject.icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                    <div>
                      <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 text-xs">
                        {currentProject.category}
                      </Badge>
                    </div>
                  </div>
                  <span className="text-xs font-orbitron text-muted-foreground tracking-wider hidden sm:block">
                    PROJECT_{currentProject.id.toUpperCase()}
                  </span>
                </div>

                {/* Terminal Command */}
                <div className="bg-background/20 rounded p-3 mb-4 border border-muted/20">
                  <code className="text-xs font-orbitron text-muted">
                    {currentProject.command}
                  </code>
                </div>

                <CardTitle className="text-lg md:text-2xl font-orbitron font-bold text-foreground">
                  {currentProject.title}
                </CardTitle>
                
                <p className="text-foreground/70 font-rajdhani text-sm md:text-base">
                  {currentProject.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4 md:space-y-6 p-4 md:p-6">
                {/* Technologies */}
                <div>
                  <h4 className="font-orbitron font-semibold text-foreground text-xs md:text-sm tracking-wider uppercase mb-2 md:mb-3">
                    Технологии:
                  </h4>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {currentProject.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="border-primary/30 text-primary text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Improvements */}
                <div>
                  <h4 className="font-orbitron font-semibold text-foreground text-xs md:text-sm tracking-wider uppercase mb-2 md:mb-3">
                    Улучшения:
                  </h4>
                  <div className="space-y-1 md:space-y-2">
                    {currentProject.improvements.map((improvement, index) => (
                      <div key={index} className="flex items-center space-x-2 md:space-x-3">
                        <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-primary flex-shrink-0" />
                        <span className="text-xs md:text-sm text-foreground/80 font-rajdhani">
                          {improvement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button variant="terminal" className="w-full text-xs md:text-sm">
                      <Eye className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                      <span className="hidden sm:inline">ПОСМОТРЕТЬ ПОДРОБНЕЕ</span>
                      <span className="sm:hidden">ПОДРОБНЕЕ</span>
                      <ChevronRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="flex items-center space-x-3 text-2xl font-orbitron">
                        <currentProject.icon className="h-8 w-8 text-primary" />
                        <span>{currentProject.title}</span>
                      </DialogTitle>
                    </DialogHeader>
                    
                    <div className="space-y-6">
                      {/* Project Overview */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center space-x-2 p-3 bg-background/50 rounded-lg">
                          <Clock className="h-5 w-5 text-primary" />
                          <div>
                            <p className="text-sm text-muted-foreground">Длительность</p>
                            <p className="font-semibold">{currentProject.details.duration}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 p-3 bg-background/50 rounded-lg">
                          <Users className="h-5 w-5 text-primary" />
                          <div>
                            <p className="text-sm text-muted-foreground">Команда</p>
                            <p className="font-semibold">{currentProject.details.team}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 p-3 bg-background/50 rounded-lg">
                          <TrendingUp className="h-5 w-5 text-primary" />
                          <div>
                            <p className="text-sm text-muted-foreground">Бюджет</p>
                            <p className="font-semibold">{currentProject.details.budget}</p>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div>
                        <h3 className="text-lg font-orbitron font-semibold mb-3">Описание проекта</h3>
                        <p className="text-foreground/80 font-rajdhani">{currentProject.description}</p>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h3 className="text-lg font-orbitron font-semibold mb-3">Использованные технологии</h3>
                        <div className="flex flex-wrap gap-2">
                          {currentProject.technologies.map((tech, index) => (
                            <Badge key={index} variant="outline" className="border-primary/30 text-primary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Results */}
                      <div>
                        <h3 className="text-lg font-orbitron font-semibold mb-3">Достигнутые результаты</h3>
                        <div className="space-y-2">
                          {currentProject.details.results.map((result, index) => (
                            <div key={index} className="flex items-center space-x-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                              <Sparkles className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm font-rajdhani">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Challenges & Solutions */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-lg font-orbitron font-semibold mb-3 text-red-500">Вызовы</h3>
                          <div className="space-y-2">
                            {currentProject.details.challenges.map((challenge, index) => (
                              <div key={index} className="flex items-start space-x-3 p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm font-rajdhani">{challenge}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-orbitron font-semibold mb-3 text-blue-500">Решения</h3>
                          <div className="space-y-2">
                            {currentProject.details.solutions.map((solution, index) => (
                              <div key={index} className="flex items-start space-x-3 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm font-rajdhani">{solution}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Terminal Command */}
                      <div className="bg-background/20 rounded-lg p-4 border border-muted/20">
                        <h3 className="text-lg font-orbitron font-semibold mb-3">Команда разработки</h3>
                        <code className="text-sm font-orbitron text-muted block">
                          {currentProject.command}
                        </code>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-muted/20">
                        <Button 
                          variant="terminal" 
                          className="flex-1"
                          onClick={() => {
                            setIsDialogOpen(false);
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                        >
                          <Zap className="mr-2 h-4 w-4" />
                          ЗАПУСТИТЬ ПРОЕКТ
                        </Button>
                        <Button 
                          variant="terminal" 
                          className="flex-1"
                          onClick={() => window.open('https://t.me/Irisarts1', '_blank')}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          СВЯЗАТЬСЯ
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>

          {/* Before/After Slider */}
          <div className="relative mt-8 lg:mt-0">
            {/* Slider Labels - над картинками */}
            <div className="mb-4 text-sm font-rajdhani">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground font-semibold bg-background/80 px-2 py-1 rounded -mt-12">ДО</span>
                
                {/* Animated Arrow Hint */}
                <div className="flex items-center space-x-2 -mt-12">
                  <div className="flex items-center space-x-1 bg-background/80 px-3 py-1 rounded-full border border-primary/30 shadow-lg">
                    <span className="text-xs text-primary font-orbitron">ПЕРЕТАЩИ</span>
                    <ArrowRight className="h-4 w-4 text-primary animate-arrow-wave" />
                  </div>
                </div>
                
                <span className="text-primary font-semibold bg-background/80 px-2 py-1 rounded -mt-12">Результат</span>
              </div>
            </div>
            
            <div className="aspect-video rounded-lg overflow-hidden border border-muted/20 bg-background/10">
              {/* Before Image */}
              <div 
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img 
                  src={currentProject.beforeImage} 
                  alt="До" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-muted/20 to-muted/40 flex items-center justify-center">
                        <div class="text-center">
                          <svg class="h-16 w-16 text-muted-foreground mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                          </svg>
                          <p class="text-muted-foreground font-rajdhani">ДО</p>
                        </div>
                      </div>
                    `;
                  }}
                />
              </div>

              {/* After Image */}
              <div 
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${100 - sliderPosition}%`, right: 0 }}
              >
                <img 
                  src={currentProject.afterImage} 
                  alt="После" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <div class="text-center">
                          <svg class="h-16 w-16 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                          </svg>
                          <p class="text-primary font-rajdhani font-semibold">ПОСЛЕ</p>
                        </div>
                      </div>
                    `;
                  }}
                />
              </div>

              {/* Slider Control */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-primary cursor-ew-resize flex items-center justify-center"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                </div>
              </div>

              {/* Animated Hint Overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="bg-primary/20 backdrop-blur-sm rounded-full px-3 py-1 border border-primary/30">
                    <div className="flex items-center space-x-1">
                      <ArrowRight className="h-3 w-3 text-primary animate-bounce" />
                      <span className="text-xs text-primary font-orbitron">← →</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slider Input */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleSliderChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
              />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16 space-y-4 md:space-y-6">
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-xl md:text-2xl font-orbitron font-bold text-foreground">
              Хотите такой же результат?
            </h3>
            <p className="text-foreground/70 font-rajdhani max-w-2xl mx-auto text-sm md:text-base px-4">
              Давайте обсудим ваш проект и создадим что-то невероятное вместе.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <Button 
              variant="terminal" 
              size="lg" 
              className="text-sm md:text-base"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Zap className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              ЗАПУСТИТЬ ПРОЕКТ
            </Button>
            <Button 
              variant="terminal" 
              size="lg" 
              className="text-sm md:text-base"
              onClick={() => window.open('https://t.me/Irisarts1', '_blank')}
            >
              <Terminal className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              СВЯЗАТЬСЯ
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
