import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { CheckCircle2, BarChart3, Eye, TrendingUp, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";
import dashboardImg from "@/assets/dashboard-ui.jpg";

const DashboardsPage = () => {
  const benefits = [
    {
      icon: Eye,
      title: "Pilotage visuel",
      description: "Tous vos KPIs en un coup d'œil"
    },
    {
      icon: TrendingUp,
      title: "Temps réel",
      description: "Données actualisées automatiquement"
    },
    {
      icon: Users,
      title: "Partage simplifié",
      description: "Communication claire entre équipes"
    },
    {
      icon: Target,
      title: "Décisions éclairées",
      description: "Agissez sur des données fiables"
    }
  ];

  const dashboardTypes = [
    {
      icon: BarChart3,
      title: "KPIs opérationnels en direct",
      description: "Suivi en temps réel de votre production, ventes, qualité et performance",
      features: [
        "Indicateurs métiers personnalisés",
        "Alertes sur dépassements de seuils",
        "Visualisations graphiques claires"
      ]
    },
    {
      icon: Users,
      title: "Tableaux de bord équipe/client",
      description: "Vues dédiées pour chaque profil : managers, équipes terrain, clients",
      features: [
        "Accès sécurisés et personnalisés",
        "Vues adaptées aux besoins",
        "Partage simplifié des rapports"
      ]
    },
    {
      icon: Target,
      title: "Rapports automatiques",
      description: "Génération et envoi automatique de vos reportings hebdomadaires ou mensuels",
      features: [
        "Rapports PDF/Excel automatisés",
        "Envoi programmé par email",
        "Historique et comparaisons"
      ]
    }
  ];

  const methodology = [
    {
      title: "Structuration de l'information",
      description: "Organisation claire de vos données pour éviter la surcharge et faciliter la lecture"
    },
    {
      title: "Choix des bons indicateurs",
      description: "Sélection des KPIs vraiment pertinents pour votre activité et vos objectifs"
    },
    {
      title: "Design intuitif",
      description: "Interface simple et visuelle qui se comprend en quelques secondes"
    },
    {
      title: "Mise à jour automatique",
      description: "Connexion directe avec vos sources de données pour un rafraîchissement en temps réel"
    }
  ];

  return (
    <div className="min-h-screen w-full">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              <div className="space-y-6 animate-fade-in">
                <Link to="/#solutions" className="inline-flex items-center text-sm text-accent hover:text-accent/80 transition-colors">
                  ← Retour aux solutions
                </Link>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Dashboards intuitifs
                  <span className="block text-accent mt-2">pour piloter en clarté</span>
                </h1>
                <p className="text-xl text-foreground/70 leading-relaxed">
                  Vos indicateurs clés en temps réel, présentés simplement pour faciliter 
                  la décision et le management visuel.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button asChild size="lg" className="shadow-elegant">
                    <Link to="/contact">Créer mon dashboard</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/cas-etudes">Voir des exemples</Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="relative rounded-3xl overflow-hidden shadow-elegant">
                  <img 
                    src={dashboardImg} 
                    alt="Interface de dashboard avec KPIs en temps réel"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Pilotez sans surcharge mentale</h2>
              <p className="text-lg text-foreground/70">Des dashboards qui simplifient votre gestion</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform shadow-elegant animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl gradient-primary mb-4">
                    <benefit.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-foreground/70">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard Types Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Types de dashboards</h2>
              <p className="text-lg text-foreground/70">
                Des solutions adaptées à chaque besoin de pilotage
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {dashboardTypes.map((dashboard, index) => (
                <article 
                  key={index}
                  className="glass rounded-3xl p-8 hover:scale-105 transition-all duration-500 shadow-elegant animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl gradient-primary mb-6">
                    <dashboard.icon className="w-7 h-7 text-secondary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{dashboard.title}</h3>
                  <p className="text-foreground/80 leading-relaxed mb-6">{dashboard.description}</p>
                  
                  <div className="glass rounded-xl p-4 space-y-2">
                    <p className="text-sm font-semibold text-accent mb-3">Fonctionnalités :</p>
                    <ul className="space-y-2">
                      {dashboard.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                          <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Ma méthode de conception</h2>
                <p className="text-lg text-foreground/70">
                  Des dashboards pensés pour la clarté et l'efficacité
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {methodology.map((item, index) => (
                  <div 
                    key={index}
                    className="glass rounded-2xl p-8 hover:scale-105 transition-transform shadow-elegant animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-foreground/80 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Outils de visualisation</h2>
              <p className="text-xl text-foreground/70 leading-relaxed mb-12">
                Je crée vos dashboards sur les outils que vous utilisez déjà : 
                Google Sheets, Excel, Power BI, ou solutions web personnalisées.
              </p>
              
              <div className="glass rounded-3xl p-8 md:p-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {["Google Sheets", "Excel", "Power BI", "Looker Studio", "Tableau", "Metabase", "Solutions web", "API custom"].map((tool, index) => (
                    <div 
                      key={index}
                      className="glass rounded-xl p-4 hover:scale-105 transition-transform animate-fade-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <p className="font-medium text-foreground/90">{tool}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">L'impact d'un bon dashboard</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    stat: "10×",
                    label: "Plus lisible",
                    description: "Vs. fichiers Excel complexes"
                  },
                  {
                    stat: "5min",
                    label: "Par décision",
                    description: "Au lieu de 30min de recherche"
                  },
                  {
                    stat: "100%",
                    label: "D'équipe alignée",
                    description: "Sur les mêmes objectifs"
                  }
                ].map((impact, index) => (
                  <div 
                    key={index}
                    className="glass rounded-2xl p-8 text-center hover:scale-105 transition-transform shadow-elegant animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-5xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent mb-3">
                      {impact.stat}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{impact.label}</h3>
                    <p className="text-sm text-foreground/70">{impact.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Promise Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">Ma garantie</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  "Dashboard opérationnel en 1 semaine",
                  "Formation incluse pour l'autonomie",
                  "Support et ajustements pendant 30 jours"
                ].map((promise, index) => (
                  <div 
                    key={index}
                    className="glass rounded-xl p-6 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle2 className="w-8 h-8 text-accent mx-auto mb-3" />
                    <p className="text-lg font-medium">{promise}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default DashboardsPage;
