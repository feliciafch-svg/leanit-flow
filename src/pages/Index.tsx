import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { KPIs } from "@/components/KPIs";
import { CaseUsage } from "@/components/CaseUsage";
import { Solutions } from "@/components/Solutions";
import { Testimonial } from "@/components/Testimonial";
import { FAQ } from "@/components/FAQ";
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
        <CaseUsage />
        <Testimonial />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
