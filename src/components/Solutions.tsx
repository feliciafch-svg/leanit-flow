import { FileSpreadsheet, Workflow, BarChart3, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import smartFilesImg from "@/assets/smart-files.jpg";
import automationImg from "@/assets/automation-flows.jpg";
import dashboardImg from "@/assets/dashboard-ui.jpg";

const solutions = [
  {
    icon: FileSpreadsheet,
    title: "Fichiers intelligents",
    subtitle: "Excel et Sheets connectés à vos outils",
    description: "Des fichiers qui travaillent pour vous : calculs, contrôles, mises à jour et alertes intégrées.",
    image: smartFilesImg,
    link: "/solutions/fichiers-intelligents",
    examples: [
      "Suivi de production automatisé",
      "Inventaire dynamique & réassort",
      "Reporting et planification",
    ],
  },
  {
    icon: Workflow,
    title: "Automatisations",
    subtitle: "Intégrations riches & règles métiers",
    description: "Des processus intelligents qui exécutent les tâches répétitives et déclenchent les actions au bon moment.",
    image: automationImg,
    link: "/solutions/automatisations",
    examples: [
      "Devis & factures automatiques",
      "Prospection & e-mails personnalisés",
      "Tri de CV, réponses & suivi",
    ],
  },
  {
    icon: BarChart3,
    title: "Dashboards intuitifs",
    subtitle: "Pilotage clair & reporting instantané",
    description: "Vos indicateurs clés en temps réel, présentés simplement pour faciliter la décision et le management visuel.",
    image: dashboardImg,
    link: "/solutions/dashboards",
    examples: [
      "KPIs opérationnels en direct",
      "Tableaux de bord équipe/client",
      "Rapports automatiques",
    ],
  },
];

export const Solutions = () => {
  return (
    <section id="solutions" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Nos solutions
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Des outils sur-mesure pour automatiser, optimiser et piloter votre activité
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <article
              key={index}
              className="glass rounded-3xl p-6 hover:scale-105 transition-all duration-500 shadow-elegant group animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden mb-6 h-48">
                <img 
                  src={solution.image} 
                  alt={solution.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                <div className="absolute bottom-4 left-4 inline-flex items-center justify-center w-12 h-12 rounded-xl gradient-primary">
                  <solution.icon className="w-6 h-6 text-secondary" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{solution.title}</h3>
                  <p className="text-sm text-accent font-medium">{solution.subtitle}</p>
                </div>

                <p className="text-foreground/80 leading-relaxed">{solution.description}</p>

                {/* Examples */}
                <div className="glass rounded-xl p-4 space-y-2 mb-4">
                  <p className="text-sm font-semibold text-secondary mb-3">Exemples d'usage :</p>
                  <ul className="space-y-2">
                    {solution.examples.map((example, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button asChild variant="outline" className="w-full group">
                  <Link to={solution.link}>
                    En savoir plus
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
