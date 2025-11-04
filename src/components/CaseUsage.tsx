import { Building2, Home } from "lucide-react";
import { CheckCircle2 } from "lucide-react";

const useCases = [
  {
    icon: Home,
    title: "Immobilier",
    emoji: "🏡",
    description: "Automatisations adaptées aux agences et gestionnaires de biens",
    examples: [
      "Relances clients et suivis de mandats automatiques",
      "Tableaux de bord de ventes et visites",
      "Fichiers de suivi connectés à Gmail et Sheets",
    ],
  },
  {
    icon: Building2,
    title: "PME & Services",
    emoji: "⚙️",
    description: "Process fiabilisés pour les entreprises de services",
    examples: [
      "Devis, factures et rappels automatisés",
      "Reporting RH ou commercial en temps réel",
      "Process de validation et archivage digital",
    ],
  },
];

export const CaseUsage = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Des automatisations adaptées à chaque métier
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Des solutions concrètes qui répondent aux besoins spécifiques de votre secteur
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => (
            <article
              key={index}
              className="glass rounded-3xl p-8 hover:scale-105 transition-all duration-500 shadow-elegant group animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl gradient-primary group-hover:scale-110 transition-transform">
                  <useCase.icon className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                    {useCase.title} <span className="text-3xl">{useCase.emoji}</span>
                  </h3>
                </div>
              </div>

              <p className="text-foreground/80 leading-relaxed mb-6">
                {useCase.description}
              </p>

              {/* Examples */}
              <div className="glass rounded-xl p-5 space-y-3">
                <p className="text-sm font-semibold text-secondary mb-3">Exemples concrets :</p>
                <ul className="space-y-3">
                  {useCase.examples.map((example, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
