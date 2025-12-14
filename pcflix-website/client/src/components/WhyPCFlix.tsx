import { Shield, Users, Zap, Heart } from "lucide-react";

/**
 * Design Philosophy: Medical-Tech Minimalism
 * - Trust-focused messaging with healthcare metaphors
 * - Clean grid layout with icon + text combinations
 * - Red accent for key differentiators
 */

const reasons = [
  {
    icon: Shield,
    title: "Transparência Total",
    description:
      "Sem surpresas. Você sabe exatamente o que está pagando e por quê. Diagnósticos claros e honestos.",
  },
  {
    icon: Users,
    title: "Suporte Local",
    description:
      "Atendimento próximo e pessoal. Não somos uma central telefônica. Você fala com quem conhece seu PC.",
  },
  {
    icon: Zap,
    title: "Tecnologia de Ponta",
    description:
      "Ferramentas e conhecimento atualizados. Sempre preparados para os desafios mais recentes.",
  },
  {
    icon: Heart,
    title: "Cuidado Preventivo",
    description:
      "Não apenas consertamos problemas. Prevenimos que eles aconteçam com manutenção regular.",
  },
];

export default function WhyPCFlix() {
  return (
    <section id="why" className="py-20 md:py-32 bg-secondary">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-accent font-accent text-sm uppercase tracking-wider mb-2">
            Por Que Confiar em Nós
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            Confiabilidade, Acessibilidade, Paz de Espírito
          </h2>
          <p className="text-lg text-muted-foreground">
            PCFlix não é apenas uma oficina de computadores. Somos parceiros na
            saúde digital do seu PC, comprometidos com transparência e qualidade.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="p-8 bg-white border border-border rounded-xl transition-smooth hover:shadow-lg"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-subheading text-lg text-foreground mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-white border border-border rounded-2xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-display text-3xl text-accent mb-2">500+</p>
              <p className="text-muted-foreground font-accent">Clientes Satisfeitos</p>
            </div>
            <div>
              <p className="font-display text-3xl text-accent mb-2">10+</p>
              <p className="text-muted-foreground font-accent">Anos de Experiência</p>
            </div>
            <div>
              <p className="font-display text-3xl text-accent mb-2">98%</p>
              <p className="text-muted-foreground font-accent">Taxa de Satisfação</p>
            </div>
            <div>
              <p className="font-display text-3xl text-accent mb-2">24/7</p>
              <p className="text-muted-foreground font-accent">Disponibilidade</p>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-16 p-8 bg-white border-l-4 border-accent rounded-lg">
          <p className="text-lg text-foreground mb-4 italic">
            "PCFlix transformou a forma como cuido do meu computador. Agora durme
            tranquilo sabendo que meu PC está em boas mãos. Recomendo muito!"
          </p>
          <p className="font-accent text-accent">— Cliente PCFlix</p>
        </div>
      </div>
    </section>
  );
}
