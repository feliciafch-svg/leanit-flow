import { Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <svg 
              className="w-6 h-6" 
              viewBox="0 0 64 64" 
              aria-label="Logo Lean'it"
            >
              <g fill="none" stroke="hsl(var(--secondary))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="32" cy="32" r="24"/>
                <path d="M12 22h40M12 42h40M32 8v12M32 44v12"/>
                <path d="M24 48c2-8 6-10 8-18m8 18c-2-8-6-10-8-18"/>
                <circle cx="24" cy="40" r="2.8"/>
                <circle cx="40" cy="40" r="2.8"/>
                <circle cx="32" cy="28" r="2.8"/>
              </g>
            </svg>
            <span className="font-bold text-foreground">Lean'it</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-foreground/60 text-center">
            © {currentYear} Lean'it — Automatisation & Dashboards
          </p>

          {/* Contact */}
          <a 
            href="mailto:contact@leanit.fr" 
            className="flex items-center gap-2 text-sm text-foreground/80 hover:text-accent transition-colors group"
          >
            <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>contact@leanit.fr</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
