import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FAQPage = () => {
  const faqs = [
    {
      question: "Faut-il changer d'outils pour travailler avec Lean'it ?",
      answer: "Non. Nous intégrons nos solutions à vos outils existants (Excel, Sheets, Drive, CRM, ERP…). Nous ne remplaçons que si cela crée une vraie valeur."
    },
    {
      question: "En combien de temps voit-on des résultats ?",
      answer: "Dès la 2ᵉ semaine : un prototype fonctionnel tourne, puis le déploiement consolide les gains (automatisations + dashboards)."
    },
    {
      question: "Dois-je savoir coder ?",
      answer: "Pas du tout. Les systèmes sont no-code/low-code, documentés et faciles à piloter."
    },
    {
      question: "Que se passe-t-il en cas de bug ?",
      answer: "Nos workflows sont conçus avec gestion d'erreurs, logs et alertes. Nous proposons un suivi post-livraison si nécessaire."
    },
    {
      question: "Combien ça coûte ?",
      answer: "Chaque projet est unique. Nous réalisons d'abord un audit gratuit pour cerner le périmètre puis un devis clair et transparent."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-16">
        <section className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              FAQ
            </h1>
            <p className="text-lg text-foreground/80">
              Tout ce qu'il faut savoir avant de lancer votre premier sprint Lean'it.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details 
                key={index} 
                open={index === 0}
                className="glass border border-white/10 rounded-lg overflow-hidden group animate-fade-in-up"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <summary className="text-left text-lg font-semibold hover:text-accent transition-colors py-6 px-6 cursor-pointer list-none flex items-center justify-between">
                  {faq.question}
                  <svg 
                    className="w-5 h-5 transition-transform duration-200 group-open:rotate-180" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-foreground/80">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto mt-16">
          <div className="glass border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 animate-fade-in-up">
            <div>
              <h3 className="text-2xl font-bold mb-2">Prêt·e à démarrer sereinement ?</h3>
              <p className="text-foreground/80">
                Audit express offert pour identifier vos gains immédiats.
              </p>
            </div>
            <Button 
              className="gradient-accent text-primary font-semibold hover:scale-105 transition-transform shadow-elegant whitespace-nowrap"
              asChild
            >
              <a href="/contact">
                Demander un audit gratuit
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQPage;
