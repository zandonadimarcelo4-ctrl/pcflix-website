import { Check } from "lucide-react";

/**
 * Design Philosophy: Medical-Tech Minimalism
 * - Side-by-side comparison with visual emphasis on recommended tier
 * - Clear pricing hierarchy with red accent for popular plan
 * - Progressive disclosure: expand cards to show more details
 */

const plans = [
  {
    name: "Básico",
    price: "R$ 99",
    period: "por ano",
    description: "Perfeito para uso doméstico ocasional",
    popular: false,
    features: [
      "1 diagnóstico gratuito por ano",
      "Suporte técnico por WhatsApp",
      "Desconto de 10% em serviços",
      "Atualização de antivírus",
      "Limpeza de malware básica",
    ],
    cta: "Escolher Plano",
  },
  {
    name: "Profissional",
    price: "R$ 199",
    period: "por ano",
    description: "Para usuários que precisam de suporte contínuo",
    popular: true,
    features: [
      "Tudo do plano Básico",
      "Diagnósticos ilimitados",
      "Suporte prioritário 24/7",
      "Limpeza profunda trimestral",
      "Otimização de desempenho",
      "Backup automático de dados",
      "Desconto de 20% em peças",
    ],
    cta: "Assinar Agora",
  },
  {
    name: "Empresarial",
    price: "Personalizado",
    period: "sob consulta",
    description: "Solução completa para pequenos negócios",
    popular: false,
    features: [
      "Tudo do plano Profissional",
      "Suporte para múltiplos computadores",
      "Manutenção preventiva mensal",
      "Relatórios de saúde do sistema",
      "Prioridade em upgrades",
      "Consultoria técnica incluída",
    ],
    cta: "Solicitar Orçamento",
  },
];

export default function Plans() {
  return (
    <section id="plans" className="py-20 md:py-32 bg-secondary">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-accent font-accent text-sm uppercase tracking-wider mb-2">
            Planos PCFlix Care
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            Suporte Técnico Contínuo
          </h2>
          <p className="text-lg text-muted-foreground">
            Escolha o plano perfeito para suas necessidades. Todos incluem 1 ano
            de assistência técnica com cada serviço.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl transition-smooth ${
                plan.popular
                  ? "md:scale-105 bg-white border-2 border-accent shadow-2xl"
                  : "bg-white border border-border hover-lift"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-block px-4 py-1 bg-accent text-white font-accent text-xs rounded-full">
                    MAIS POPULAR
                  </span>
                </div>
              )}

              <div className="p-8 space-y-6">
                {/* Plan Name */}
                <div>
                  <h3 className="font-subheading text-2xl text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {plan.description}
                  </p>
                </div>

                {/* Pricing */}
                <div className="border-t border-b border-border py-6">
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="font-display text-3xl text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Sem taxas ocultas
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-3 text-sm text-foreground"
                    >
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => {
                    const msg = `Ola! Gostaria de contratar o plano ${plan.name} da PCFlix Care. Preco: ${plan.price}. Por favor, me envie mais detalhes.`;
                    const encoded = encodeURIComponent(msg);
                    window.open(`https://wa.me/6699845818?text=${encoded}`, "_blank");
                  }}
                  className={`block w-full py-3 rounded-lg font-accent text-center transition-smooth ${
                    plan.popular
                      ? "bg-accent text-white hover:bg-red-700"
                      : "bg-secondary text-foreground hover:bg-border"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 p-8 bg-white rounded-xl border border-border">
          <h3 className="font-subheading text-lg text-foreground mb-4">
            O que está incluído em todos os planos?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-3">
              <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-accent text-foreground">
                  1 ano de assistência técnica
                </p>
                <p className="text-sm text-muted-foreground">
                  Incluído com cada serviço contratado
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-accent text-foreground">
                  Suporte por WhatsApp
                </p>
                <p className="text-sm text-muted-foreground">
                  Comunicação rápida e direta
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-accent text-foreground">
                  Verificações preventivas
                </p>
                <p className="text-sm text-muted-foreground">
                  Manutenção regular do sistema
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-accent text-foreground">
                  Peças não incluídas
                </p>
                <p className="text-sm text-muted-foreground">
                  Compradas separadamente com desconto
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
