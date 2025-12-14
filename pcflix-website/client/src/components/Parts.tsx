import { ShoppingCart, Zap, DollarSign, Truck, Cpu, HardDrive, Package } from "lucide-react";

/**
 * Design Philosophy: Medical-Tech Minimalism
 * - Asymmetric layout showcasing product categories
 * - Clean typography with clear hierarchy
 * - Red accent for pricing and CTAs
 */

const categories = [
  {
    icon: Cpu,
    title: "Processadores Ryzen",
    description: "Processadores AMD Ryzen de última geração com excelente custo-benefício",
    items: "Ryzen 5, 7, 9",
  },
  {
    icon: HardDrive,
    title: "SSDs e HDDs",
    description: "Armazenamento rápido e confiável para seu computador",
    items: "SSD NVMe, SSD SATA, HDD",
  },
  {
    icon: Zap,
    title: "Memória RAM",
    description: "RAM DDR4 e DDR5 para máximo desempenho",
    items: "8GB, 16GB, 32GB",
  },
  {
    icon: ShoppingCart,
    title: "Placas-Mãe",
    description: "Placas-mãe de qualidade para builds estáveis",
    items: "AM4, AM5, Intel",
  },
];



export default function Parts() {
  return (
    <section id="parts" className="py-20 md:py-32 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-accent font-accent text-sm uppercase tracking-wider mb-2">
            Peças e Componentes
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            Componentes Importados de Qualidade
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos componentes importados da China com preços acessíveis e
            garantia completa. Temos tudo para montar seu PC dos sonhos.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="p-8 bg-secondary border border-border rounded-xl hover-lift transition-smooth"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-accent rounded-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-subheading text-lg text-foreground">
                      {category.title}
                    </h3>
                    <p className="text-sm text-accent font-accent">
                      {category.items}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
            );
          })}
        </div>

        {/* Pre-built PCs Section */}
        <div className="bg-gradient-to-r from-foreground to-accent rounded-2xl p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="font-heading text-3xl">
                PCs Pré-Construídos Ryzen
              </h3>
              <p className="text-white/90 leading-relaxed">
                Não quer montar seu próprio PC? Oferecemos builds pré-montados e
                testados com processadores Ryzen. Desde entrada até gaming, temos
                a configuração perfeita para você.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <p>Builds personalizadas conforme seu orçamento</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <p>Testados e otimizados antes da entrega</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <p>Suporte técnico incluído</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <p>Garantia de 1 ano em todos os componentes</p>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-accent rounded-lg font-accent hover:bg-secondary transition-smooth"
              >
                <ShoppingCart className="w-4 h-4" />
                Solicitar Orçamento
              </a>
            </div>

            {/* Right side - Benefits */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <DollarSign className="w-8 h-8 mx-auto mb-3 text-white" />
                <p className="font-accent text-lg mb-1">Preços Acessíveis</p>
                <p className="text-sm text-white/80">Melhor custo-benefício</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <Truck className="w-8 h-8 mx-auto mb-3 text-white" />
                <p className="font-accent text-lg mb-1">Entrega Rápida</p>
                <p className="text-sm text-white/80">Pronto para usar</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <Zap className="w-8 h-8 mx-auto mb-3 text-white" />
                <p className="font-accent text-lg mb-1">Alto Desempenho</p>
                <p className="text-sm text-white/80">Ryzen de qualidade</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <ShoppingCart className="w-8 h-8 mx-auto mb-3 text-white" />
                <p className="font-accent text-lg mb-1">Suporte Incluído</p>
                <p className="text-sm text-white/80">Sempre disponível</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
