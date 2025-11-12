import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Phone, Mail, CheckCircle2 } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-16">
        <section className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Transformez votre entreprise avec Lean'it
            </h1>
            <p className="text-lg text-foreground/80">
              Parlons de vos besoins et concevons des solutions qui travaillent pour vous.
            </p>
          </div>

          <div className="grid md:grid-cols-[1fr_2fr] gap-8">
            {/* Contact Info Card */}
            <aside className="glass border border-white/10 rounded-2xl p-8 h-fit space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">Contact</h3>
                <p className="text-foreground/80">Nous répondons sous 24–48 h.</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg glass border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">WhatsApp uniquement</p>
                    <p className="text-foreground/80">06 37 49 73 68</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg glass border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-foreground/80">contact@leanit-automatisation.com</p>
                  </div>
                </div>

              </div>

              <div className="pt-6 border-t border-white/10">
                <h4 className="font-semibold mb-4">Pourquoi nous choisir ?</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/80">Solutions personnalisées</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/80">Support réactif</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/80">Satisfaction garantie</span>
                  </li>
                </ul>
              </div>
            </aside>

            {/* Widget Calendly (remplace le formulaire) */}
            <div className="glass border border-white/10 rounded-2xl p-8">
              {/* Widget Calendly ajouté */}
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/contact-leanit-automatisation/30min?primary_color=5a2549" 
                style={{ minWidth: '320px', height: '700px' }}
              ></div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-6xl mx-auto mt-16">
          <div className="glass border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Besoin d'un audit express ?</h3>
              <p className="text-foreground/80">
                Nous identifions vos quick wins en 48 h.
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

export default ContactPage;
