import { TrendingUp, Clock, Zap } from "lucide-react";

const kpis = [
  {
    icon: TrendingUp,
    value: "+40%",
    label: "de productivité",
    description: "moyenne sur les équipes",
  },
  {
    icon: Clock,
    value: "15h/sem",
    label: "économisées",
    description: "par équipe en moyenne",
  },
  {
    icon: Zap,
    value: "24/7",
    label: "disponibilité",
    description: "sans interruption ni oubli",
  },
];

export const KPIs = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
          Résultats mesurables
        </h2>
        <p className="text-center text-foreground/70 mb-16 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Des gains concrets et durables pour vos équipes
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {kpis.map((kpi, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 text-center hover:scale-105 transition-transform shadow-elegant group animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-primary mb-6 group-hover:scale-110 transition-transform">
                <kpi.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                {kpi.value}
              </h3>
              <p className="text-lg font-semibold text-foreground mb-1">{kpi.label}</p>
              <p className="text-sm text-foreground/60">{kpi.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
