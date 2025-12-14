import { MessageCircle, Instagram, Heart } from "lucide-react";

/**
 * Design Philosophy: Medical-Tech Minimalism
 * - Clean footer with minimal design
 * - Red accent for social links
 * - Clear information hierarchy
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white">
      <div className="container py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
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
            <p className="text-white/70 text-sm">
              Seu PC Saudável, Sempre Atualizado.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-accent font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#services" className="hover:text-accent transition-smooth">
                  Diagnóstico
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-smooth">
                  Manutenção
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-smooth">
                  Upgrades
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-smooth">
                  Builds Customizados
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-accent font-semibold mb-4">Produtos</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#pcs-montados" className="hover:text-accent transition-smooth">
                  PCs Montados
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-accent transition-smooth">
                  Processadores
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-accent transition-smooth">
                  Memória RAM
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-accent transition-smooth">
                  Armazenamento
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-accent transition-smooth">
                  Componentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-accent font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://wa.me/6699845818?text=Ola%20PCFlix!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-accent transition-smooth"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/pc_flix_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-accent transition-smooth"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-white/60">
              © {currentYear} PCFlix. Todos os direitos reservados.
            </p>
            <p className="text-sm text-white/60 flex items-center gap-1">
              Feito com <Heart className="w-4 h-4 text-accent" /> para a saúde do
              seu PC
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-sm text-white/60 hover:text-accent transition-smooth"
              >
                Privacidade
              </a>
              <a
                href="#"
                className="text-sm text-white/60 hover:text-accent transition-smooth"
              >
                Termos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
