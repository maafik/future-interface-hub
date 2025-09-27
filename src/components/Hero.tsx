import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Cpu } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-cyber"></div>
      <div className="absolute inset-0 scan-lines opacity-20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Glitch Title */}
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 mb-6 text-primary font-orbitron text-sm tracking-widest uppercase">
            <Sparkles className="h-4 w-4 animate-pulse-glow" />
            <span>Интерфейс будущего</span>
            <Sparkles className="h-4 w-4 animate-pulse-glow" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-orbitron font-black text-foreground mb-6 glitch">
            <span className="text-neon bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              КРЕАТИВНЫЕ
            </span>
            <br />
            <span className="text-primary text-neon">
              РЕШЕНИЯ
            </span>
          </h1>
        </div>

        {/* Description */}
        <p className="text-xl md:text-2xl text-foreground/80 font-rajdhani max-w-3xl mx-auto mb-12 leading-relaxed">
          Добро пожаловать в виртуальную систему креативного агентства. 
          Мы создаем <span className="text-primary text-neon">голографические</span> решения 
          для цифрового будущего вашего бизнеса.
        </p>

        {/* Action Button */}
        <div className="flex items-center justify-center mb-16">
          <Button 
            variant="cyber" 
            size="lg" 
            className="group cyber-glow button-ripple button-focus button-press relative overflow-hidden transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 active:scale-95 active:transition-all active:duration-150"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Cpu className="mr-2 h-5 w-5 group-hover:animate-spin transition-transform duration-300" />
            <span className="relative z-10">ЗАКАЗАТЬ ПРОЕКТ</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
          </Button>
        </div>

        {/* Terminal Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="card-hologram p-6 rounded-lg text-center">
            <div className="text-3xl font-orbitron font-bold text-primary text-neon mb-2">150+</div>
            <div className="text-foreground/70 font-rajdhani">Проектов запущено</div>
          </div>
          
          <div className="card-hologram p-6 rounded-lg text-center">
            <div className="text-3xl font-orbitron font-bold text-accent text-neon mb-2">99.9%</div>
            <div className="text-foreground/70 font-rajdhani">Время работы системы</div>
          </div>
          
          <div className="card-hologram p-6 rounded-lg text-center">
            <div className="text-3xl font-orbitron font-bold text-secondary text-neon mb-2">24/7</div>
            <div className="text-foreground/70 font-rajdhani">Техническая поддержка</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;