import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    title: "Suivi de production automatisé",
    problem: "Calculs quotidiens manuels, erreurs et perte de temps",
    solution: "Objectifs générés automatiquement, historique centralisé, indicateurs mis à jour",
    result: "Gain de temps, zéro erreur, pilotage clair",
    metric: "3h/jour économisées",
  },
  {
    title: "Facturation automatique",
    problem: "Oublis/doublons, cycle long",
    solution: "Génération des factures, envoi et archivage automatiques",
    result: "2h/j économisées, traçabilité totale",
    metric: "100% de fiabilité",
  },
  {
    title: "Dashboard marketing connecté",
    problem: "KPIs dispersés, reporting manuel",
    solution: "Centralisation des indicateurs avec mises à jour automatiques",
    result: "Vision ROI instantanée, décisions rapides",
    metric: "5x plus rapide",
  },
];

export const CaseStudies = () => {
  return (
    <section id="cas" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Cas d'études
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Des projets concrets, des résultats mesurables
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {cases.map((caseStudy, index) => (
            <article
              key={index}
              className="glass rounded-2xl p-8 hover:scale-105 transition-all duration-500 shadow-elegant group animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Metric Badge */}
              <div className="inline-flex items-center gap-2 gradient-accent px-4 py-2 rounded-full text-sm font-bold text-primary mb-6">
                <ArrowUpRight className="w-4 h-4" />
                {caseStudy.metric}
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-accent transition-colors">
                {caseStudy.title}
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-accent font-semibold mb-1">Problème</p>
                  <p className="text-sm text-foreground/80">{caseStudy.problem}</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-accent font-semibold mb-1">Solution</p>
                  <p className="text-sm text-foreground/80">{caseStudy.solution}</p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs uppercase tracking-wider text-secondary font-semibold mb-1">Résultat</p>
                  <p className="text-sm font-medium text-foreground">{caseStudy.result}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
