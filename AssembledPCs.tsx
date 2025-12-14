import { MessageCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Design Philosophy: Medical-Tech Minimalism
 * - Clean product grid with clear pricing and focus on performance
 * - Red accent for pricing and "Contact" CTAs
 */

interface AssembledPC {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  badge?: string;
}

const assembledPCs: AssembledPC[] = [
  {
    id: 1,
    name: "Thanus",
    description: "Aguenta até os jogos mais pesados pelo menor custo. Excelente performance em 1080p.",
    price: 1350.00,
    image: "👾", // Placeholder for a gaming/tech emoji
    badge: "Novo",
  },
  // Adicionar mais PCs aqui
];

export default function AssembledPCs() {
  const whatsappNumber = "6699845818"; // Número de WhatsApp assumido do ProductCatalog

  const sendWhatsAppMessage = (pc: AssembledPC) => {
    const message = encodeURIComponent(
      `Olá! Gostaria de saber mais sobre o PC Montado "${pc.name}" (R$ ${pc.price.toFixed(2)}). Por favor, me envie as especificações completas e o prazo de entrega.`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <section id="pcs-montados" className="py-20 md:py-32 bg-secondary">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div className="max-w-2xl mb-8 md:mb-0">
            <p className="text-accent font-accent text-sm uppercase tracking-wider mb-2">
              PCs Montados
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground">
              Performance Otimizada, Pronta para Jogar
            </h2>
          </div>
          <div className="text-right">
            <p className="text-muted-foreground text-sm">
              {assembledPCs.length} PCs encontrados
            </p>
          </div>
        </div>

        {/* PCs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {assembledPCs.map((pc) => (
            <div
              key={pc.id}
              className="bg-white border border-border rounded-xl overflow-hidden hover-lift transition-smooth group"
            >
              {/* PC Image */}
              <div className="relative bg-accent/10 h-48 flex items-center justify-center overflow-hidden">
                <div className="text-6xl group-hover:scale-110 transition-smooth">
                  {pc.image}
                </div>

                {/* Badge */}
                {pc.badge && (
                  <div className="absolute top-3 right-3 bg-accent text-white px-3 py-1 rounded-full font-accent text-xs">
                    {pc.badge}
                  </div>
                )}
              </div>

              {/* PC Info */}
              <div className="p-4 space-y-3">
                {/* Name */}
                <h3 className="font-subheading text-lg text-foreground line-clamp-2 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-accent" />
                  {pc.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground line-clamp-3 h-12">
                  {pc.description}
                </p>

                {/* Pricing */}
                <div className="flex items-baseline gap-2 pt-2 border-t border-border">
                  <span className="font-display text-xl text-accent">
                    R$ {pc.price.toFixed(2)}
                  </span>
                </div>

                {/* WhatsApp Order Button */}
                <Button
                  onClick={() => sendWhatsAppMessage(pc)}
                  className="w-full mt-4 bg-accent text-white hover:bg-red-700 transition-smooth flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Solicitar Orçamento
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
