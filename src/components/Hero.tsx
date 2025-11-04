import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-automation.jpg";

export const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated Background Blur */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 animate-fade-in-up leading-tight">
            <span className="bg-gradient-to-r from-foreground via-accent to-secondary bg-clip-text text-transparent">
              Automatisez. Pilotez.
            </span>
            <br />
            <span className="text-foreground">Respirez.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-center text-foreground/80 max-w-3xl mx-auto mb-10 animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
            <strong className="text-foreground font-semibold">Lean'it</strong> conçoit des systèmes automatisés et intuitifs pour faire gagner du temps aux entreprises et fluidifier leurs opérations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="gradient-accent text-primary font-semibold text-lg px-8 py-6 hover:scale-105 transition-transform shadow-elegant group"
              asChild
            >
              <a href="#contact">
                Demander un audit gratuit
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="glass border-foreground/20 text-foreground font-semibold text-lg px-8 py-6 hover:bg-foreground/5 transition-all"
              asChild
            >
              <a href="#solutions">Découvrir nos solutions</a>
            </Button>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-elegant animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
            <img 
              src={heroImage} 
              alt="Automatisation et workflows intelligents" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
