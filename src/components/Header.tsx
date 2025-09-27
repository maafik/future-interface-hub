import { Button } from "@/components/ui/button";
import { Menu, Zap } from "lucide-react";

const Header = () => {
  return (
    <header className="relative border-b border-border/20 backdrop-blur-md bg-background/80 scan-lines">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Neon Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Zap className="h-8 w-8 text-primary animate-pulse-glow" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse-glow"></div>
            </div>
            <h1 className="text-2xl font-orbitron font-black text-primary text-neon tracking-wider glitch">
              OPEN-ARC
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-rajdhani font-semibold tracking-wide">
              ГЛАВНАЯ
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-rajdhani font-semibold tracking-wide">
              УСЛУГИ
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-rajdhani font-semibold tracking-wide">
              О НАС
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-rajdhani font-semibold tracking-wide">
              КОНТАКТЫ
            </a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="terminal" 
              size="lg" 
              className="hidden md:flex"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              СВЯЗАТЬСЯ
            </Button>
            
            {/* Mobile Menu */}
            <Button variant="hologram" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;