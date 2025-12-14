import { MessageCircle, Cpu, MemoryStick, HardDrive, Power, Component, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

/**
 * Design Philosophy: Complex, High-Energy Product Page
 * - Focus on the "Thanus" theme with a Red-to-Purple gradient (Red: #DC2626, Purple: #8B5CF6)
 * - Use motion and depth to simulate a 3D/complex feel
 * - Clear presentation of specs and value proposition
 */

const thanusSpecs = [
  { icon: Cpu, name: "Processador", value: "AMD Ryzen 3 3200G" },
  { icon: MemoryStick, name: "Memória RAM", value: "8GB DDR4 3200MHz" },
  { icon: HardDrive, name: "Armazenamento", value: "SSD NVMe 256GB" },
  { icon: Power, name: "Fonte", value: "500W 80 Plus White" },
  { icon: Component, name: "Placa-Mãe", value: "A320M ou B450M" },
];

const features = [
  "Performance Sólida em 1080p",
  "Otimizado para Jogos Competitivos",
  "Expansível para Futuros Upgrades",
  "Montagem Profissional e Testada",
];

export default function ThanusPage() {
  const whatsappNumber = "6699845818";
  const pcName = "Thanus";
  const pcPrice = 1350.00;

  const sendWhatsAppMessage = () => {
    const message = encodeURIComponent(
      `Olá PCFlix! Tenho interesse no PC Montado "${pcName}" (R$ ${pcPrice.toFixed(2)}). Gostaria de solicitar um orçamento e saber mais sobre as opções de pagamento.`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const heroVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation Placeholder - Assuming it's rendered by App.tsx or a parent */}
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="font-heading text-lg text-foreground hover:text-accent transition-colors">
            PCFlix
          </Link>
          <Button onClick={sendWhatsAppMessage} className="bg-accent hover:bg-red-700">
            <MessageCircle className="w-4 h-4 mr-2" /> Falar com Consultor
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section - Complex Red to Purple Gradient */}
        <motion.section
          className="relative overflow-hidden py-24 md:py-40 text-white"
          style={{
            background: "linear-gradient(135deg, #DC2626 0%, #8B5CF6 100%)", // Red to Purple
          }}
          initial="initial"
          animate="animate"
          variants={heroVariants}
        >
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-widest mb-4 opacity-80">
                PC Montado | Edição Especial
              </p>
              <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
                PC Thanus
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                O poder que você precisa para dominar os jogos mais pesados, com o menor custo. Performance e estilo em um só lugar.
              </p>
              <div className="flex items-center gap-6">
                <span className="text-4xl font-display font-bold">
                  R$ {pcPrice.toFixed(2)}
                </span>
                <Button
                  size="lg"
                  className="bg-white text-accent hover:bg-gray-100 font-bold"
                  onClick={sendWhatsAppMessage}
                >
                  Comprar Agora <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
          {/* Simulated 3D Element (Abstract Shape) */}
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"
            animate={{ rotate: -360, scale: [1, 0.8, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </motion.section>

        {/* Specs Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <h2 className="font-heading text-3xl text-foreground mb-10 text-center">
              Especificações Técnicas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {thanusSpecs.map((spec, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 border border-border rounded-xl hover-lift transition-shadow"
                  variants={cardVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <spec.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                  <p className="font-accent font-semibold text-lg text-foreground">
                    {spec.name}
                  </p>
                  <p className="text-muted-foreground text-sm">{spec.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Thanus Section */}
        <section className="py-20 bg-secondary">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
                Por Que Escolher o PC Thanus?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                O Thanus foi projetado para ser o melhor custo-benefício do mercado, entregando uma experiência de jogo fluida e confiável.
              </p>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <span className="text-accent font-bold text-xl">✓</span>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-96">
              {/* Placeholder for a complex graphic/image */}
              <div className="absolute inset-0 bg-accent/20 rounded-xl transform rotate-3 scale-105" />
              <div className="absolute inset-0 bg-accent/40 rounded-xl transform -rotate-3 scale-105" />
              <Card className="absolute inset-0 bg-white shadow-2xl flex items-center justify-center">
                <CardContent className="text-center p-10">
                  <CardTitle className="text-2xl font-heading text-accent mb-2">
                    Ryzen 3 3200G
                  </CardTitle>
                  <p className="text-lg text-muted-foreground">
                    Gráficos Integrados Radeon Vega 8
                  </p>
                  <Separator className="my-4" />
                  <p className="text-4xl font-display font-bold text-foreground">
                    1080p
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Performance Otimizada
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-accent text-white">
          <div className="container flex flex-col md:flex-row items-center justify-between">
            <h2 className="font-heading text-3xl font-bold mb-4 md:mb-0">
              Pronto para Dominar?
            </h2>
            <Button
              size="lg"
              className="bg-white text-accent hover:bg-gray-100 font-bold"
              onClick={sendWhatsAppMessage}
            >
              Solicitar Orçamento <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </section>
      </main>

      {/* Footer Placeholder - Assuming it's rendered by App.tsx or a parent */}
      <footer className="bg-foreground text-white py-8 text-center">
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} PCFlix. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
