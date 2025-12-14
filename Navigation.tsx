import { useState } from "react";
import { Menu, X } from "lucide-react";

/**
 * Design Philosophy: Medical-Tech Minimalism
 * - Clean, minimalist navigation with red accent for active states
 * - Swiss Design principles with surgical precision
 * - Generous whitespace and clear typography hierarchy
 */
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Serviços", href: "#services" },
    { label: "Planos", href: "#plans" },
    { label: "PCs Montados", href: "#pcs-montados" },
    { label: "Peças", href: "#products" },
    { label: "Por Que PCFlix", href: "#why" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border transition-smooth">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
          <span className="font-heading text-lg">PCFlix</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-foreground hover:text-accent transition-smooth font-accent text-sm"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-6 py-2 bg-accent text-white rounded-lg font-accent text-sm hover-lift transition-smooth"
          >
            Entrar em Contato
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-secondary rounded-lg transition-smooth"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="container py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-foreground hover:text-accent transition-smooth py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block w-full px-4 py-2 bg-accent text-white rounded-lg font-accent text-sm text-center hover:bg-red-700 transition-smooth"
              onClick={() => setIsOpen(false)}
            >
              Entrar em Contato
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
