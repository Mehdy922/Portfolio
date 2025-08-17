
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-background to-secondary relative overflow-hidden">
      {/* Geometric decorations */}
      <div className="geometric-decoration top-20 left-10 animate-float"></div>
      <div className="geometric-decoration top-40 right-20 w-8 h-8 opacity-60"></div>
      <div className="geometric-decoration bottom-20 left-1/4 w-4 h-4 opacity-40"></div>
      <div className="geometric-decoration bottom-40 right-1/3 w-6 h-6"></div>

      <div className="container mx-auto px-6 h-screen flex items-center">
        <div className="grid grid-cols-12 gap-8 items-center w-full">
          {/* Left Sidebar - Social Media Icons */}
          <div className="col-span-1 flex flex-col items-center space-y-6">
            <div className="w-px h-16 bg-border"></div>
            <div className="flex flex-col gap-6">
              <a href="mailto:mehdy922@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
              <a href="tel:+923178453636" className="text-muted-foreground hover:text-primary transition-colors">
                <Phone size={20} />
              </a>
              <a href="https://github.com/Mehdy922" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/muhammadmehdy/" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-5 space-y-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-px bg-primary"></div>
                  <p className="text-muted-foreground text-lg">Hello</p>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  I'm <span className="gradient-text">Muhammad Mehdy Hasnain</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-md">
                  A software engineer with a critical product mindset. Passionate about spotting problems from people around me and building solutions that make their lives easier.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin size={16} />
                  <span>Lahore, Pakistan</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone size={16} />
                  <span>+92 3178453636</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail size={16} />
                  <span>mehdy922@gmail.com</span>
                </div>
              </div>

              <Button className="glow-effect hover:animate-glow transition-all duration-300 bg-primary hover:bg-primary/90">
                Learn more
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="col-span-6 relative flex justify-center items-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/42770261-a649-4968-b9bf-e6c5af9d4c87.png"
                alt="Muhammad Mehdy Hasnain - Software Developer"
                className="w-full max-w-2xl animate-float"
              />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-accent/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-20 text-muted-foreground">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm transform -rotate-90 origin-center">Scroll down</span>
          <div className="w-px h-16 bg-border"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
