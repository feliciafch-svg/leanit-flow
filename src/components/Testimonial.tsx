import { Quote } from "lucide-react";

export const Testimonial = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-10 md:p-16 shadow-elegant animate-fade-in relative overflow-hidden">
            {/* Decorative Quote */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote className="w-32 h-32 text-accent" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <blockquote className="text-xl md:text-2xl leading-relaxed text-foreground/90 mb-8 italic">
                « En 10 jours, nous avons éliminé 3 heures quotidiennes de tâches répétitives.
                Le fichier intelligent conçu par Lean'it et le dashboard livré ont rendu le
                management visuel limpide : nos équipes savent exactement quoi faire et où agir. »
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                  <span className="text-secondary font-bold text-lg">M.D</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Responsable Opérations</p>
                  <p className="text-sm text-foreground/60">Secteur santé • Entreprise de 150+ personnes</p>
                </div>
              </div>
            </div>

            {/* Accent Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 gradient-accent" />
          </div>
        </div>
      </div>
    </section>
  );
};
