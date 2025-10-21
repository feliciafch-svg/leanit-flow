import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import logo from "@/assets/leanit-logo.png";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass border-b border-white/5">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <img 
                src={logo} 
                alt="Logo Lean'it" 
                className="w-10 h-10 object-contain transition-transform group-hover:scale-110 duration-300"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Lean'it
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/#solutions" className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors">
              Solutions
            </a>
            <a href="/cas-etudes" className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors">
              Cas d'études
            </a>
            <a href="/#faq" className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors">
              FAQ
            </a>
            <Button 
              variant="default" 
              className="gradient-accent text-primary font-semibold hover:scale-105 transition-transform shadow-elegant"
              asChild
            >
              <a href="/contact">Audit gratuit</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
            <a 
              href="/#solutions" 
              className="block text-sm font-medium text-foreground/80 hover:text-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solutions
            </a>
            <a 
              href="/cas-etudes" 
              className="block text-sm font-medium text-foreground/80 hover:text-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cas d'études
            </a>
            <a 
              href="/#faq" 
              className="block text-sm font-medium text-foreground/80 hover:text-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <Button 
              variant="default" 
              className="w-full gradient-accent text-primary font-semibold"
              asChild
            >
              <a href="/contact" onClick={() => setMobileMenuOpen(false)}>Audit gratuit</a>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};
