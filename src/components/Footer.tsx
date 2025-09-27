import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Github, 
  Twitter, 
  Linkedin, 
  Mail,
  MapPin,
  Phone,
  Globe
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/20 bg-background/90 backdrop-blur-md">
      {/* Top Border Glow */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Zap className="h-8 w-8 text-primary animate-pulse-glow" />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse-glow"></div>
              </div>
              <h3 className="text-2xl font-orbitron font-black text-primary text-neon tracking-wider">
                OPEN-ARC
              </h3>
            </div>
            
            <p className="text-foreground/70 font-rajdhani text-lg mb-6 max-w-md">
              Креативное агентство будущего. Создаем голографические решения 
              для цифрового мира и виртуальной реальности.
            </p>
            
            <div className="flex space-x-4">
              <Button variant="hologram" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="hologram" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="hologram" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-orbitron font-bold text-primary mb-6 tracking-wider">
              СИСТЕМЫ
            </h4>
            <ul className="space-y-3">
              {[
                "Веб-разработка",
                "UI/UX Дизайн", 
                "Мобильные приложения",
                "Брендинг",
                "Digital маркетинг",
                "Техподдержка"
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-foreground/70 hover:text-primary transition-colors font-rajdhani hover:translate-x-2 inline-block transition-transform"
                  >
                    → {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-orbitron font-bold text-primary mb-6 tracking-wider">
              СВЯЗЬ
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-foreground/70 font-rajdhani">
                  contact@open-arc.com
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-foreground/70 font-rajdhani">
                  +7 (999) 123-45-67
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-foreground/70 font-rajdhani">
                  Виртуальный офис
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-accent" />
                <span className="text-foreground/70 font-rajdhani">
                  24/7 Глобально
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Terminal Section */}
        <div className="terminal p-6 rounded-lg mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-destructive rounded-full"></div>
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <div className="w-3 h-3 bg-muted rounded-full"></div>
            </div>
            <span className="text-muted-foreground font-orbitron text-xs">SYSTEM_STATUS</span>
          </div>
          
          <div className="font-orbitron text-sm">
            <div className="text-muted mb-1">$ system_check --status</div>
            <div className="text-foreground/70 mb-1">✓ All systems operational</div>
            <div className="text-foreground/70 mb-1">✓ Quantum servers online</div>
            <div className="text-foreground/70 mb-1">✓ Holographic interface active</div>
            <div className="text-primary animate-pulse">█ Ready for new connections...</div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/20">
          <div className="text-foreground/60 font-rajdhani mb-4 md:mb-0">
            © 2024 OPEN-ARC CREATIVE. Все права защищены квантовым шифрованием.
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors font-rajdhani">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors font-rajdhani">
              Условия использования
            </a>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default Footer;