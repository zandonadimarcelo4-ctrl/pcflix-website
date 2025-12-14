import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Plans from "@/components/Plans";
import ProductCatalog from "@/components/ProductCatalog";
import WhyPCFlix from "@/components/WhyPCFlix";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/**
 * PCFlix Website - Home Page
 * Design Philosophy: Medical-Tech Minimalism
 * - Clean, professional layout with healthcare metaphors
 * - Red accent color for CTAs and key information
 * - Responsive design for all devices
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Services />
        <Plans />
        <ProductCatalog />
        <WhyPCFlix />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
