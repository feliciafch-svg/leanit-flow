import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { KPIs } from "@/components/KPIs";
import { Solutions } from "@/components/Solutions";
import { CaseStudies } from "@/components/CaseStudies";
import { Testimonial } from "@/components/Testimonial";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <main>
        <Hero />
        <KPIs />
        <Solutions />
        <CaseStudies />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
