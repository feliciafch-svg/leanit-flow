import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Workflow, Zap, Mail, FileText, Users } from "lucide-react";
import { Link } from "react-router-dom";
import automationImg from "@/assets/automation-flows.jpg";

const AutomationPage = () => {
  const benefits = [
    {
      icon: Zap,
      title: "3h/jour économisées",
      description: "Automatisation complète des tâches répétitives"
    },
    {
      icon: Users,
      title: "Équipes libérées",
      description: "Plus de temps pour les tâches à valeur ajoutée"
    },
    {
      icon: CheckCircle2,
      title: "0 erreur manuelle",
      description: "Exécution parfaite à chaque fois"
    },
    {
      icon: Workflow,
      title: "Processus fluides",
      description: "Actions déclenchées au bon moment automatiquement"
    }
  ];

  const useCases = [
    {
      icon: FileText,
      title: "Devis & Factures",
      description: "Génération automatique de devis personnalisés et facturation instantanée dès validation",
      examples: ["Calculs automatiques", "Envoi par email", "Relances programmées"]
    },
    {
      icon: Mail,
      title: "Prospection intelligente",
      description: "Campagnes d'emails personnalisés selon le profil et le comportement de vos prospects",
      examples: ["Segmentation auto", "Emails personnalisés", "Suivi des réponses"]
    },
    {
      icon: Users,
      title: "Recrutement optimisé",
      description: "Tri automatique des CV, réponses aux candidats et suivi du processus de recrutement",
      examples: ["Analyse des CV", "Réponses automatiques", "Planning d'entretiens"]
    }
  ];

  const process = [
    {
      step: "1",
      title: "Audit de vos processus",
      description: "J'analyse vos tâches répétitives et identifie les opportunités d'automatisation"
    },
    {
      step: "2",
      title: "Design des workflows",
      description: "Conception de flux logiques et robustes adaptés à votre métier"
    },
    {
      step: "3",
      title: "Intégration & tests",
      description: "Connexion avec vos outils existants et validation du bon fonctionnement"
    },
    {
      step: "4",
      title: "Formation & suivi",
      description: "Accompagnement de vos équipes pour une autonomie complète"
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
                  Automatisations
                  <span className="block text-accent mt-2">qui libèrent votre temps</span>
                </h1>
                <p className="text-xl text-foreground/70 leading-relaxed">
                  Des processus intelligents qui exécutent vos tâches répétitives et déclenchent 
                  les bonnes actions au moment parfait.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button asChild size="lg" className="shadow-elegant">
                    <Link to="/contact">Démarrer l'automatisation</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/cas-etudes">Cas concrets</Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="relative rounded-3xl overflow-hidden shadow-elegant">
                  <img 
                    src={automationImg} 
                    alt="Flux d'automatisation intelligents connectant vos outils"
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
              <h2 className="text-4xl font-bold mb-4">L'impact de l'automatisation</h2>
              <p className="text-lg text-foreground/70">Transformez votre productivité immédiatement</p>
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

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Cas d'usage concrets</h2>
              <p className="text-lg text-foreground/70">
                Des automatisations qui répondent à vos besoins métiers
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {useCases.map((useCase, index) => (
                <article 
                  key={index}
                  className="glass rounded-3xl p-8 hover:scale-105 transition-all duration-500 shadow-elegant animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl gradient-primary mb-6">
                    <useCase.icon className="w-7 h-7 text-secondary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                  <p className="text-foreground/80 leading-relaxed mb-6">{useCase.description}</p>
                  
                  <div className="glass rounded-xl p-4 space-y-2">
                    <p className="text-sm font-semibold text-accent mb-3">Fonctionnalités :</p>
                    <ul className="space-y-2">
                      {useCase.examples.map((example, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
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

        {/* Process Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Mon processus d'automatisation</h2>
                <p className="text-lg text-foreground/70">
                  Une méthode éprouvée pour des résultats garantis
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {process.map((item, index) => (
                  <div 
                    key={index}
                    className="glass rounded-2xl p-8 hover:scale-105 transition-transform shadow-elegant animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-16 h-16 rounded-xl gradient-primary flex items-center justify-center text-2xl font-bold text-secondary">
                        {item.step}
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

        {/* Integration Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Intégrations riches & règles métiers</h2>
              <p className="text-xl text-foreground/70 leading-relaxed mb-12">
                Je connecte vos outils existants (CRM, ERP, comptabilité, emails...) 
                et crée des règles intelligentes qui respectent votre logique métier.
              </p>
              
              <div className="glass rounded-3xl p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-6">Outils compatibles</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {["Google Sheets", "Excel", "Gmail", "Outlook", "Slack", "Trello", "HubSpot", "Zapier"].map((tool, index) => (
                    <div 
                      key={index}
                      className="glass rounded-xl p-4 hover:scale-105 transition-transform animate-fade-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <p className="font-medium text-foreground/90">{tool}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-foreground/60 mt-6">Et bien d'autres...</p>
              </div>
            </div>
          </div>
        </section>

        {/* Promise Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">Ce que vous obtenez</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  "Gain de temps dès la première semaine",
                  "0% d'erreurs dans l'exécution des tâches",
                  "ROI positif en moins d'un mois"
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

export default AutomationPage;
