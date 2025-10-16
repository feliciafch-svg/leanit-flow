export const FAQ = () => {
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
    <section id="faq" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            FAQ
          </h2>
          <p className="text-lg text-foreground/70 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Tout ce qu'il faut savoir avant de lancer votre premier sprint Lean'it.
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <details 
              key={index} 
              open={index === 0}
              className="glass border border-white/10 rounded-lg overflow-hidden group animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <summary className="text-left text-lg font-semibold hover:text-accent transition-colors py-6 px-6 cursor-pointer list-none flex items-center justify-between">
                {faq.question}
                <svg 
                  className="w-5 h-5 transition-transform duration-200 group-open:rotate-180 flex-shrink-0 ml-4" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-foreground/80 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
