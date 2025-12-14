import {
  Zap,
  Wrench,
  HardDrive,
  Cpu,
  Package,
  Stethoscope,
} from "lucide-react";

/**
 * Design Philosophy: Medical-Tech Minimalism
 * - Card-based grid with left-aligned text and icon indicators
 * - Subtle hover effects with lift animation
 * - Medical cross concept integrated into service icons
 * - Generous whitespace between cards
 */

const services = [
  {
    icon: Stethoscope,
    title: "Diagnóstico e Troubleshooting",
    description:
      "Identificamos problemas com precisão clínica. Diagnóstico completo do seu sistema para encontrar a raiz do problema.",
  },
  {
    icon: Wrench,
    title: "Manutenção e Limpeza",
    description:
      "Limpeza profissional interna e externa. Removemos poeira, malware e otimizamos o desempenho do seu PC.",
  },
  {
    icon: HardDrive,
    title: "Upgrade de SSD e RAM",
    description:
      "Aumente a velocidade e capacidade do seu computador. Componentes importados de qualidade com preços acessíveis.",
  },
  {
    icon: Cpu,
    title: "Instalação e Otimização de SO",
    description:
      "Instalamos e otimizamos Windows, Linux e outros sistemas operacionais para máximo desempenho.",
  },
  {
    icon: Package,
    title: "Builds Customizados Ryzen",
    description:
      "Construímos PCs personalizados com processadores Ryzen. Desde entrada até gaming, temos a solução certa.",
  },
  {
    icon: Zap,
    title: "Venda de Peças Importadas",
    description:
      "Componentes de qualidade importados da China com preços competitivos. Garantia e suporte técnico inclusos.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-accent font-accent text-sm uppercase tracking-wider mb-2">
            Nossos Serviços
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            Cuidado Completo para Seu PC
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos uma gama completa de serviços de assistência técnica,
            desde diagnósticos até construção de PCs personalizados.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-white border border-border rounded-xl hover-lift transition-smooth"
              >
                {/* Icon */}
                <div className="mb-6 inline-block p-3 bg-secondary rounded-lg group-hover:bg-accent group-hover:text-white transition-smooth">
                  <Icon className="w-6 h-6 text-accent group-hover:text-white transition-smooth" />
                </div>

                {/* Content */}
                <h3 className="font-subheading text-lg text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Accent line */}
                <div className="mt-6 h-1 w-12 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-smooth" />

                {/* Learn More Button */}
                <button
                  onClick={() => {
                    const msg = `Ola! Gostaria de saber mais sobre o servico: ${service.title}`;
                    const encoded = encodeURIComponent(msg);
                    window.open(`https://wa.me/6699845818?text=${encoded}`, "_blank");
                  }}
                  className="mt-4 text-accent font-accent text-sm hover:text-red-700 transition-smooth"
                >
                  Saiba Mais →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
