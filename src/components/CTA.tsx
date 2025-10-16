import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

export const CTA = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="glass rounded-3xl p-10 md:p-16 shadow-elegant animate-fade-in relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 gradient-primary opacity-20 blur-3xl" />

            {/* Content */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Prêt·e à gagner du temps dès ce mois-ci ?
                </h2>
                <p className="text-lg text-foreground/80 mb-6">
                  Audit gratuit : identifions vos quick wins en 48 h.
                </p>
                
                {/* Urgency Badge */}
                <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-2 rounded-full text-sm font-medium text-accent">
                  <Clock className="w-4 h-4" />
                  <span>Réponse sous 24h garantie</span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Button 
                  size="lg" 
                  className="gradient-accent text-primary font-bold text-lg px-10 py-7 hover:scale-105 transition-transform shadow-elegant group"
                  asChild
                >
                  <a href="/contact">
                    Demander un audit gratuit
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                
                <p className="text-xs text-center text-foreground/50">
                  Sans engagement • 100% confidentiel
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
