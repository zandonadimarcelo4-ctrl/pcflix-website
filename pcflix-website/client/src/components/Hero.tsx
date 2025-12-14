import { ArrowRight } from "lucide-react";

/**
 * Design Philosophy: Medical-Tech Minimalism
 * - Asymmetric layout with text on left, diagnostic visualization on right
 * - Red accent reserved for CTAs only
 * - Generous whitespace and clean typography
 * - Subtle grid background for visual interest
 */
export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Grid background pattern */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="container relative z-10 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-accent font-accent text-sm uppercase tracking-wider">
                Saúde do Seu PC
              </p>
              <h1 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
                Seu PC Saudável, Sempre Atualizado.
              </h1>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              PCFlix oferece assistência técnica profissional, manutenção preventiva e suporte contínuo para manter seu computador funcionando perfeitamente. De diagnósticos até upgrades de hardware, cuidamos da saúde do seu PC.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent text-white rounded-lg font-accent hover-lift transition-smooth"
              >
                Manter PC Saudável
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#plans"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-foreground text-foreground rounded-lg font-accent hover:bg-secondary transition-smooth"
              >
                Conhecer Planos
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-8 border-t border-border">
              <div>
                <p className="font-accent text-accent text-lg">100%</p>
                <p className="text-sm text-muted-foreground">Transparência</p>
              </div>
              <div>
                <p className="font-accent text-accent text-lg">Local</p>
                <p className="text-sm text-muted-foreground">Suporte Próximo</p>
              </div>
              <div>
                <p className="font-accent text-accent text-lg">24/7</p>
                <p className="text-sm text-muted-foreground">Disponível</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden md:block">
            <div className="relative aspect-square">
              <img
                src="/images/hero-diagnostic.png"
                alt="Diagnóstico de PC com métricas de saúde"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent rounded-full opacity-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
