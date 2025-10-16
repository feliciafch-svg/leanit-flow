import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";

const CaseStudiesPage = () => {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <main className="container mx-auto px-4 py-20">
        {/* Page Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Des projets concrets. Des résultats mesurables.
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Quelques cas d'usage anonymisés illustrant notre approche Lean'it.
          </p>
        </section>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto mb-12">
          {/* Cas 1: Suivi de production */}
          <article className="glass rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Automatisation du suivi de production
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm uppercase tracking-wider text-accent font-semibold mb-3">Problème</h4>
                <p className="text-foreground/80">
                  L'équipe devait calculer manuellement les objectifs quotidiens selon le temps de travail et les volumes à produire. 
                  Processus long, erreurs fréquentes et pilotage difficile.
                </p>
              </div>

              <div>
                <h4 className="text-sm uppercase tracking-wider text-accent font-semibold mb-3">Solution</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Objectifs quotidiens générés automatiquement selon le temps réel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Historique automatique des données de production</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Saisie simplifiée (boutons interactifs, liens dynamiques)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Indicateurs mis à jour sans calcul manuel</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10">
                <h4 className="text-sm uppercase tracking-wider text-secondary font-semibold mb-3">Bénéfices</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground">Gain de temps significatif</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground">Suppression des erreurs de calcul</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground">Meilleur pilotage grâce à l'historique centralisé</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground">Outil intuitif et fiable, adopté par les équipes</span>
                  </li>
                </ul>
              </div>
            </div>
          </article>

          {/* Cas 2: Facturation */}
          <article className="glass rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Automatisation de la facturation
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm uppercase tracking-wider text-accent font-semibold mb-3">Problème</h4>
                <p className="text-foreground/80">
                  Création et envoi des factures trop longs, oublis fréquents et doublons.
                </p>
              </div>

              <div>
                <h4 className="text-sm uppercase tracking-wider text-accent font-semibold mb-3">Solution</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Workflow Make connecté à Sheets, Gmail et Drive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Factures PDF générées & envoyées automatiquement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Archivage propre et traçable</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10">
                <h4 className="text-sm uppercase tracking-wider text-secondary font-semibold mb-3">Bénéfices</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground">2h/j économisées</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground">0 oubli, 0 doublon</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground">Cycle de facturation accéléré</span>
                  </li>
                </ul>
              </div>
            </div>
          </article>

          {/* Cas 3: Dashboard marketing */}
          <article className="glass rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Pilotage des campagnes marketing
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm uppercase tracking-wider text-accent font-semibold mb-3">Problème</h4>
                <p className="text-foreground/80">
                  KPIs éparpillés, pas de vision globale, reporting manuel.
                </p>
              </div>

              <div>
                <h4 className="text-sm uppercase tracking-wider text-accent font-semibold mb-3">Solution</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Dashboard Looker Studio connecté aux sources (Ads, CRM, Sheets)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Indicateurs prioritaires, vues par client et par canal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Mises à jour automatiques</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10">
                <h4 className="text-sm uppercase tracking-wider text-secondary font-semibold mb-3">Bénéfices</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground">Reporting instantané</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground">Meilleure réactivité d'optimisation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground">Vision ROI unifiée</span>
                  </li>
                </ul>
              </div>
            </div>
          </article>

          {/* Cas 4: Onboarding RH */}
          <article className="glass rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Onboarding & RH automatisés
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm uppercase tracking-wider text-accent font-semibold mb-3">Problème</h4>
                <p className="text-foreground/80">
                  Process d'onboarding manuel, oublis d'étapes, nombreux échanges.
                </p>
              </div>

              <div>
                <h4 className="text-sm uppercase tracking-wider text-accent font-semibold mb-3">Solution</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Formulaire → création des dossiers → accès → mails de bienvenue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Checklist automatique et journal des actions</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10">
                <h4 className="text-sm uppercase tracking-wider text-secondary font-semibold mb-3">Bénéfices</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground">Expérience fluide pour les nouveaux arrivants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground">Sécurité & traçabilité</span>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto mt-20">
          <div className="glass rounded-2xl p-10 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Vous voulez un système qui travaille pour vous ?
            </h3>
            <p className="text-lg text-foreground/80 mb-6">
              Parlons de vos cas d'usage et de vos gains rapides.
            </p>
            <a 
              href="/#contact" 
              className="inline-flex items-center gap-2 px-8 py-4 gradient-accent text-primary font-semibold rounded-full hover:scale-105 transition-transform shadow-elegant"
            >
              Demander un audit gratuit
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
