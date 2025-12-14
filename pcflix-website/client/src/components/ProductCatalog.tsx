import { useState } from "react";
import { ShoppingCart, Star, Filter, MessageCircle } from "lucide-react";

/**
 * Design Philosophy: Medical-Tech Minimalism
 * - Clean product grid with clear pricing and ratings
 * - Filter system for easy navigation
 * - Red accent for pricing and "Add to Cart" CTAs
 * - Professional product cards with hover effects
 */

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "SSD NVMe 1TB",
    category: "Armazenamento",
    price: 299.90,
    originalPrice: 399.90,
    rating: 4.8,
    reviews: 45,
    image: "🖥️",
    badge: "Promoção",
  },
  {
    id: 2,
    name: "Ryzen 5 5600X",
    category: "Processador",
    price: 589.90,
    rating: 4.9,
    reviews: 78,
    image: "⚙️",
  },
  {
    id: 3,
    name: "RAM DDR4 16GB",
    category: "Memória",
    price: 189.90,
    originalPrice: 249.90,
    rating: 4.7,
    reviews: 32,
    image: "💾",
    badge: "Promoção",
  },
  {
    id: 4,
    name: "Placa-Mãe B550",
    category: "Placa-Mãe",
    price: 459.90,
    rating: 4.6,
    reviews: 28,
    image: "🔌",
  },
  {
    id: 5,
    name: "Fonte 650W 80+",
    category: "Fonte",
    price: 349.90,
    rating: 4.8,
    reviews: 52,
    image: "🔋",
  },
  {
    id: 6,
    name: "Cooler CPU RGB",
    category: "Refrigeração",
    price: 129.90,
    originalPrice: 179.90,
    rating: 4.5,
    reviews: 19,
    image: "❄️",
    badge: "Promoção",
  },
  {
    id: 7,
    name: "SSD 2TB SATA",
    category: "Armazenamento",
    price: 199.90,
    rating: 4.7,
    reviews: 41,
    image: "💿",
  },
  {
    id: 8,
    name: "Ryzen 7 5800X",
    category: "Processador",
    price: 799.90,
    rating: 4.9,
    reviews: 92,
    image: "⚙️",
  },
];

const categories = [
  "Todos",
  "Processador",
  "Memória",
  "Armazenamento",
  "Placa-Mãe",
  "Fonte",
  "Refrigeração",
];

export default function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProducts =
    selectedCategory === "Todos"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const whatsappNumber = "6699845818";

  const sendWhatsAppMessage = (product: Product) => {
    const message = encodeURIComponent(
      `Olá! Gostaria de encomendar o seguinte produto:\n\n📦 ${product.name}\n💰 R$ ${product.price.toFixed(2)}\n\nPor favor, confirme a disponibilidade e o prazo de entrega.`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <section id="products" className="py-20 md:py-32 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div className="max-w-2xl mb-8 md:mb-0">
            <p className="text-accent font-accent text-sm uppercase tracking-wider mb-2">
              Catálogo de Produtos
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground">
              Peças e Componentes Importados
            </h2>
          </div>
          <div className="text-right">
            <p className="text-muted-foreground text-sm">
              {filteredProducts.length} produtos encontrados
            </p>
          </div>
        </div>

        {/* Filter Section */}
        <div className="mb-12 overflow-x-auto pb-4">
          <div className="flex gap-3 min-w-max">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-accent text-sm transition-smooth whitespace-nowrap ${
                  selectedCategory === category
                    ? "bg-accent text-white"
                    : "bg-secondary text-foreground hover:bg-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-border rounded-xl overflow-hidden hover-lift transition-smooth group"
            >
              {/* Product Image */}
              <div className="relative bg-secondary h-48 flex items-center justify-center overflow-hidden">
                <div className="text-6xl group-hover:scale-110 transition-smooth">
                  {product.image}
                </div>

                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-3 right-3 bg-accent text-white px-3 py-1 rounded-full font-accent text-xs">
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4 space-y-3">
                {/* Category */}
                <p className="text-xs text-accent font-accent uppercase">
                  {product.category}
                </p>

                {/* Name */}
                <h3 className="font-subheading text-sm text-foreground line-clamp-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(product.rating)
                            ? "fill-accent text-accent"
                            : "text-border"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    ({product.reviews})
                  </span>
                </div>

                {/* Pricing */}
                <div className="flex items-baseline gap-2 pt-2 border-t border-border">
                  <span className="font-display text-lg text-accent">
                    R$ {product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xs text-muted-foreground line-through">
                      R$ {product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                {/* WhatsApp Order Button */}
                <button
                  onClick={() => sendWhatsAppMessage(product)}
                  className="w-full mt-4 px-4 py-2 bg-accent text-white rounded-lg font-accent text-sm hover:bg-red-700 transition-smooth flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Encomendar
                </button>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
