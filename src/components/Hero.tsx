import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin, Download, ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-pulse delay-500"></div>

      <div className="container mx-auto px-4 sm:px-6 min-h-screen flex items-center relative z-10 py-20">
        <div className="w-full">
          {/* Mobile/Tablet Layout */}
          <div className="flex flex-col lg:hidden space-y-8 text-center">
            {/* Hero Image - Mobile */}
            <div className="relative group mx-auto w-full max-w-sm">
              <img 
                src="/Portfolio/lovable-uploads/42770261-a649-4968-b9bf-e6c5af9d4c87.png"
                alt="Muhammad Mehdy Hasnain - Software Developer"
                className="w-full animate-float rounded-2xl"
              />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
            </div>

            {/* Main Content - Mobile */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-4 animate-fade-in">
                  <div className="w-8 h-px bg-primary animate-expand"></div>
                  <p className="text-muted-foreground text-base">Hello 👋</p>
                  <div className="w-8 h-px bg-primary animate-expand"></div>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold leading-tight animate-fade-in-up px-4">
                  I'm <span className="gradient-text bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Muhammad Mehdy Hasnain</span>
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto animate-fade-in-up delay-200 px-4">
                  Computer Science graduate from FAST-NUCES with expertise in AI and full-stack development. Dean's List achiever passionate about building scalable solutions.
                </p>
              </div>

              <div className="space-y-2 animate-fade-in-up delay-300 text-sm">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <MapPin size={14} />
                  <span>Lahore, Pakistan</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Phone size={14} />
                  <a href="tel:+923178453636">+92 3178453636</a>
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Mail size={14} />
                  <a href="mailto:mehdy922@gmail.com">mehdy922@gmail.com</a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up delay-400 px-4">
                <Button 
                  onClick={() => scrollToSection('about')}
                  className="glow-effect bg-primary hover:bg-primary/90 w-full sm:w-auto"
                >
                  Learn more
                </Button>
                <Button 
                  variant="outline"
                  className="hover:bg-primary/10 hover:border-primary w-full sm:w-auto"
                >
                  <Download size={16} className="mr-2" />
                  Resume
                </Button>
              </div>

              {/* Social Icons - Mobile */}
              <div className="flex justify-center gap-6 pt-4">
                <a href="mailto:mehdy922@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
                  <Mail size={20} />
                </a>
                <a href="tel:+923178453636" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Phone">
                  <Phone size={20} />
                </a>
                <a href="https://github.com/Mehdy922" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/muhammadmehdy/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-12 gap-8 items-center">
            {/* Left Sidebar - Social Media Icons */}
            <div className="col-span-1 flex flex-col items-center space-y-6">
              <div className="w-px h-16 bg-border animate-pulse"></div>
              <div className="flex flex-col gap-6">
                <a href="mailto:mehdy922@gmail.com" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1" aria-label="Email">
                  <Mail size={20} />
                </a>
                <a href="tel:+923178453636" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1" aria-label="Phone">
                  <Phone size={20} />
                </a>
                <a href="https://github.com/Mehdy922" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/muhammadmehdy/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Main Content */}
            <div className="col-span-5 space-y-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 animate-fade-in">
                    <div className="w-12 h-px bg-primary animate-expand"></div>
                    <p className="text-muted-foreground text-lg">Hello 👋</p>
                  </div>
                  <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up">
                    I'm <span className="gradient-text bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Muhammad Mehdy <br className="hidden lg:block" />Hasnain</span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-md animate-fade-in-up delay-200">
                    Computer Science graduate from FAST-NUCES with expertise in AI and full-stack development. Dean's List achiever passionate about building scalable solutions.
                  </p>
                </div>

                <div className="space-y-3 animate-fade-in-up delay-300">
                  <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                    <MapPin size={16} className="group-hover:scale-110 transition-transform" />
                    <span>Lahore, Pakistan</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                    <Phone size={16} className="group-hover:scale-110 transition-transform" />
                    <a href="tel:+923178453636">+92 3178453636</a>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                    <Mail size={16} className="group-hover:scale-110 transition-transform" />
                    <a href="mailto:mehdy922@gmail.com">mehdy922@gmail.com</a>
                  </div>
                </div>

                <div className="flex gap-4 animate-fade-in-up delay-400">
                  <Button 
                    onClick={() => scrollToSection('about')}
                    className="glow-effect hover:animate-glow transition-all duration-300 bg-primary hover:bg-primary/90 hover:scale-105"
                  >
                    Learn more
                  </Button>
                  <Button 
                    variant="outline"
                    className="hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105"
                  >
                    <Download size={16} className="mr-2" />
                    Resume
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="col-span-6 relative flex justify-center items-center">
              <div className="relative group">
                <img 
                  src="/Portfolio/lovable-uploads/42770261-a649-4968-b9bf-e6c5af9d4c87.png"
                  alt="Muhammad Mehdy Hasnain - Software Developer"
                  className="w-full max-w-2xl animate-float group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator - Hidden on mobile */}
      <div className="hidden lg:block absolute bottom-8 left-20 text-muted-foreground animate-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center space-y-2 hover:text-primary transition-colors cursor-pointer"
          aria-label="Scroll down"
        >
          <span className="text-sm transform -rotate-90 origin-center">Scroll down</span>
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
