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
            Découvrez comment nos automatisations transforment les process de nos clients en systèmes simples, fluides et performants.
          </p>
        </section>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto mb-12">
          {/* Cas 1: Suivi de production */}
          <article className="glass rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              🏭 Production : objectifs et reporting automatisés
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm uppercase tracking-wider text-accent font-semibold mb-3">Problème</h4>
                <p className="text-foreground/80">
                  L'équipe devait calculer manuellement les objectifs quotidiens selon le temps de travail et les volumes à produire. Résultat : erreurs fréquentes, reporting long et manque de visibilité.
                </p>
              </div>

              <div>
                <h4 className="text-sm uppercase tracking-wider text-accent font-semibold mb-3">Solution</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Objectifs générés automatiquement selon le planning réel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Historique des données centralisé et suivi en continu</span>
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
                    <span className="text-foreground">Pilotage clair et visualisation instantanée</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground">Outil adopté facilement par toute l'équipe</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4">
                <p className="text-sm text-foreground/90 italic">
                  💬 Résultat : une équipe plus autonome, plus rapide et un suivi sans friction.
                </p>
              </div>
            </div>
          </article>

          {/* Cas 2: Facturation */}
          <article className="glass rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              💰 Facturation : zéro oubli, zéro doublon
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm uppercase tracking-wider text-accent font-semibold mb-3">Problème</h4>
                <p className="text-foreground/80">
                  La création et l'envoi des factures étaient manuels, avec des oublis fréquents et des doublons.
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
                    <span className="text-foreground/80">Génération automatique des PDF</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Envoi et archivage traçables</span>
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

              <div className="pt-4">
                <p className="text-sm text-foreground/90 italic">
                  💬 Résultat : un suivi propre, rapide et 100 % fiable.
                </p>
              </div>
            </div>
          </article>

          {/* Cas 3: Dashboard marketing */}
          <article className="glass rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              📊 Marketing : reporting et ROI automatisés
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm uppercase tracking-wider text-accent font-semibold mb-3">Problème</h4>
                <p className="text-foreground/80">
                  Les KPI marketing étaient éparpillés entre plusieurs plateformes, sans vision globale.
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
                    <span className="text-foreground/80">Indicateurs regroupés par client et par canal</span>
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
                    <span className="text-foreground">Meilleure réactivité pour ajuster les campagnes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground">Vision ROI unifiée</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4">
                <p className="text-sm text-foreground/90 italic">
                  💬 Résultat : des décisions plus rapides et des campagnes mieux pilotées.
                </p>
              </div>
            </div>
          </article>

          {/* Cas 4: Onboarding RH */}
          <article className="glass rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              👥 RH : onboarding fluide et automatisé
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm uppercase tracking-wider text-accent font-semibold mb-3">Problème</h4>
                <p className="text-foreground/80">
                  Le processus d'accueil des nouveaux arrivants était long, manuel et source d'oublis.
                </p>
              </div>

              <div>
                <h4 className="text-sm uppercase tracking-wider text-accent font-semibold mb-3">Solution</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Formulaire → création automatique des dossiers + mails de bienvenue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Checklist automatique et suivi des actions</span>
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
                    <span className="text-foreground">Sécurité et traçabilité des étapes RH</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4">
                <p className="text-sm text-foreground/90 italic">
                  💬 Résultat : un onboarding simple, organisé et sans stress.
                </p>
              </div>
            </div>
          </article>
        </div>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto mt-20">
          <div className="glass rounded-2xl p-10 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Envie d'automatiser vos process ?
            </h3>
            <p className="text-lg text-foreground/80 mb-6">
              💡 En 30 minutes, identifiez vos 3 leviers d'automatisation les plus rentables.
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
