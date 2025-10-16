import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass border-b border-white/5">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <svg 
                className="w-8 h-8 transition-transform group-hover:scale-110 duration-300" 
                viewBox="0 0 100 100" 
                aria-label="Logo Lean'it"
              >
                <g fill="none" stroke="hsl(var(--secondary))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Globe circle */}
                  <circle cx="50" cy="50" r="40"/>
                  
                  {/* Vertical line */}
                  <line x1="50" y1="10" x2="50" y2="90"/>
                  
                  {/* Horizontal ellipses */}
                  <ellipse cx="50" cy="50" rx="40" ry="15"/>
                  <ellipse cx="50" cy="50" rx="40" ry="25"/>
                  
                  {/* Connection nodes */}
                  <circle cx="50" cy="30" r="4" fill="hsl(var(--secondary))"/>
                  <circle cx="30" cy="50" r="4" fill="hsl(var(--secondary))"/>
                  <circle cx="70" cy="50" r="4" fill="hsl(var(--secondary))"/>
                  <circle cx="50" cy="70" r="4" fill="hsl(var(--secondary))"/>
                  
                  {/* Circuit lines */}
                  <line x1="50" y1="30" x2="50" y2="20"/>
                  <line x1="30" y1="50" x2="20" y2="50"/>
                  <line x1="70" y1="50" x2="80" y2="50"/>
                  <line x1="50" y1="70" x2="50" y2="80"/>
                </g>
              </svg>
              <div className="absolute inset-0 blur-md opacity-50 group-hover:opacity-70 transition-opacity">
                <svg className="w-8 h-8" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="hsl(var(--accent))"/>
                </svg>
              </div>
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
