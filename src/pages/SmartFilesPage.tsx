import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { CheckCircle2, FileSpreadsheet, TrendingUp, Clock, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import smartFilesImg from "@/assets/smart-files.jpg";

const SmartFilesPage = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Jusqu'à 3h économisées/jour",
      description: "Automatisation des tâches répétitives et saisie simplifiée"
    },
    {
      icon: TrendingUp,
      title: "10× plus lisibles",
      description: "Des fichiers structurés, clairs et intuitifs pour tous"
    },
    {
      icon: Shield,
      title: "-80% d'erreurs",
      description: "Contrôles automatiques et validation intelligente"
    },
    {
      icon: Zap,
      title: "Auto-alimentés",
      description: "Connexions directes avec vos outils existants"
    }
  ];

  const features = [
    "Fichiers Excel et Google Sheets connectés à vos outils métiers",
    "Calculs automatisés et contrôles de cohérence intégrés",
    "Alertes intelligentes en cas d'anomalie ou d'action requise",
    "Suivi de production en temps réel",
    "Inventaire dynamique avec réassort automatique",
    "Templates de reporting et planification"
  ];

  const offers = [
    {
      title: "Audit de fichiers",
      description: "Analyse approfondie de vos fichiers existants et recommandations d'optimisation"
    },
    {
      title: "Refonte sur-mesure",
      description: "Reconstruction complète de vos outils selon vos besoins spécifiques"
    },
    {
      title: "Templates prêts à l'emploi",
      description: "Solutions standardisées adaptables rapidement à votre contexte"
    },
    {
      title: "Formation équipe",
      description: "Formation courte et ciblée pour rendre vos équipes autonomes"
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
                  Fichiers intelligents
                  <span className="block text-accent mt-2">qui travaillent pour vous</span>
                </h1>
                <p className="text-xl text-foreground/70 leading-relaxed">
                  Transformez vos Excel et Google Sheets en outils puissants : auto-alimentés, 
                  sans erreurs, connectés à votre écosystème.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button asChild size="lg" className="shadow-elegant">
                    <Link to="/contact">Audit gratuit</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/cas-etudes">Voir des exemples</Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="relative rounded-3xl overflow-hidden shadow-elegant">
                  <img 
                    src={smartFilesImg} 
                    alt="Interface de fichiers intelligents automatisés"
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
              <h2 className="text-4xl font-bold mb-4">Des résultats mesurables dès J+1</h2>
              <p className="text-lg text-foreground/70">Impact immédiat sur votre productivité</p>
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

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Ce que vos fichiers peuvent faire</h2>
                <p className="text-lg text-foreground/70">
                  Bien plus que des tableaux : de véritables assistants automatisés
                </p>
              </div>

              <div className="glass rounded-3xl p-8 md:p-12 space-y-6">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-secondary" />
                    </div>
                    <p className="text-lg text-foreground/90 pt-0.5">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Ma méthode en 3 leviers</h2>
                <p className="text-lg text-foreground/70">
                  Une approche Lean pour éliminer les gaspillages
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    number: "01",
                    title: "Automatisation intelligente",
                    description: "Fichiers qui s'auto-alimentent, évitent les erreurs et fluidifient la saisie"
                  },
                  {
                    number: "02",
                    title: "Process Lean",
                    description: "Repenser les processus pour réduire les gaspillages de temps, d'énergie et d'attention"
                  },
                  {
                    number: "03",
                    title: "KPI structurés",
                    description: "Indicateurs clés organisés pour piloter avec clarté, sans surcharge mentale"
                  }
                ].map((lever, index) => (
                  <div 
                    key={index}
                    className="glass rounded-2xl p-8 hover:scale-105 transition-transform shadow-elegant animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="text-5xl font-bold text-accent/20 mb-4">{lever.number}</div>
                    <h3 className="text-2xl font-bold mb-3">{lever.title}</h3>
                    <p className="text-foreground/80 leading-relaxed">{lever.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Offers Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Ce que je vous propose</h2>
                <p className="text-lg text-foreground/70">
                  Des formules adaptées à vos besoins et votre rythme
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {offers.map((offer, index) => (
                  <div 
                    key={index}
                    className="glass rounded-2xl p-8 hover:scale-105 transition-transform shadow-elegant animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <FileSpreadsheet className="w-10 h-10 text-accent mb-4" />
                    <h3 className="text-2xl font-bold mb-3">{offer.title}</h3>
                    <p className="text-foreground/80 leading-relaxed">{offer.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Promise Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">Ma promesse</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  "Vous gagnez du temps dès la première semaine",
                  "Vos équipes retrouvent de la clarté et de la fluidité",
                  "Vous pilotez avec des outils simples et efficaces"
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

export default SmartFilesPage;
