import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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

          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass border border-white/10 rounded-lg px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-accent transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto mt-16">
          <div className="glass border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
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
