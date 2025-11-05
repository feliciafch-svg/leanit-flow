import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { CheckCircle2, BarChart3, Eye, TrendingUp, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import dashboardImg from "@/assets/dashboard-ui.jpg";

const DashboardsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      emoji: "👁️",
      title: "Pilotage visuel",
      description: "Tous vos indicateurs en un coup d'œil."
    },
    {
      emoji: "⚡",
      title: "Temps réel",
      description: "Des données toujours à jour, sans saisie manuelle."
    },
    {
      emoji: "🤝",
      title: "Partage simplifié",
      description: "Une vision commune pour toute l'équipe."
    },
    {
      emoji: "🎯",
      title: "Décisions éclairées",
      description: "Des chiffres fiables pour agir vite et bien."
    }
  ];

  const dashboardTypes = [
    {
      icon: BarChart3,
      title: "KPIs opérationnels",
      description: "Suivez vos ventes, productions, marges ou retards en temps réel.",
      features: [
        "Indicateurs personnalisés",
        "Alertes sur dépassement de seuil",
        "Graphiques simples et lisibles"
      ]
    },
    {
      icon: Users,
      title: "Tableaux de bord équipe / client",
      description: "Des vues adaptées à chaque profil : manager, terrain ou client.",
      features: [
        "Accès sécurisés et personnalisés",
        "Données filtrées par besoin",
        "Partage automatique et clair"
      ]
    },
    {
      icon: Target,
      title: "Rapports automatiques",
      description: "Des reporting PDF ou Excel générés et envoyés sans effort.",
      features: [
        "Envoi programmé par email",
        "Historique automatique",
        "Comparaisons mensuelles"
      ]
    }
  ];

  const methodology = [
    {
      emoji: "🧩",
      title: "Structuration de l'information",
      description: "Organisation claire des données pour une lecture fluide."
    },
    {
      emoji: "🎯",
      title: "Choix des bons indicateurs",
      description: "Des KPIs vraiment utiles à vos objectifs."
    },
    {
      emoji: "🪄",
      title: "Design intuitif",
      description: "Une interface lisible et compréhensible en quelques secondes."
    },
    {
      emoji: "🔄",
      title: "Mise à jour automatique",
      description: "Connexion directe à vos fichiers et outils métiers."
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
                  Des indicateurs clairs, mis à jour automatiquement, pour décider plus vite et piloter sans surcharge mentale.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button asChild size="lg" className="shadow-elegant">
                    <Link to="/contact">Créer mon dashboard</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/cas-etudes">Voir des exemples concrets</Link>
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
              <p className="text-lg text-foreground/70">Des dashboards simples et fiables qui simplifient votre quotidien.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform shadow-elegant animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl mb-4">{benefit.emoji}</div>
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
              <h2 className="text-4xl font-bold mb-4">Des dashboards adaptés à vos besoins</h2>
              <p className="text-lg text-foreground/70">
                Quel que soit votre métier, visualisez vos performances sans effort.
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
              <h2 className="text-4xl font-bold mb-4">Une méthode claire pour des dashboards efficaces</h2>
              <p className="text-lg text-foreground/70">
                Pensés pour la clarté, l'action et la fiabilité.
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
                    <div className="text-3xl">{item.emoji}</div>
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
                    emoji: "💡",
                    stat: "10×",
                    label: "plus lisible",
                    description: "vs fichiers Excel complexes"
                  },
                  {
                    emoji: "⏱️",
                    stat: "5 min",
                    label: "par décision",
                    description: "au lieu de 30 min de recherche"
                  },
                  {
                    emoji: "🤝",
                    stat: "100 %",
                    label: "d'équipe alignée",
                    description: "sur les mêmes indicateurs"
                  }
                ].map((impact, index) => (
                  <div 
                    key={index}
                    className="glass rounded-2xl p-8 text-center hover:scale-105 transition-transform shadow-elegant animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-4xl mb-3">{impact.emoji}</div>
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
              <h2 className="text-4xl font-bold mb-8">Ma garantie Lean'it</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { emoji: "🗓️", text: "Dashboard prêt à l'usage en 1 semaine" },
                  { emoji: "🎓", text: "Formation incluse pour rendre vos équipes autonomes" },
                  { emoji: "🛠️", text: "Support et ajustements offerts pendant 30 jours" }
                ].map((promise, index) => (
                  <div 
                    key={index}
                    className="glass rounded-xl p-6 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-4xl mb-3">{promise.emoji}</div>
                    <p className="text-lg font-medium">{promise.text}</p>
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
