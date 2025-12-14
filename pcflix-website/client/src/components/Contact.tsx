import { MessageCircle, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Medical-Tech Minimalism
 * - Clear contact options with direct WhatsApp integration
 * - Simple form for inquiries
 * - Red accent for CTAs
 * - Social media links prominently displayed
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const whatsappNumber = "6699845818";
  const whatsappMessage = encodeURIComponent(
    "Olá PCFlix! Gostaria de saber mais sobre seus serviços."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-accent font-accent text-sm uppercase tracking-wider mb-2">
            Entre em Contato
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            Vamos Conversar Sobre Seu PC
          </h2>
          <p className="text-lg text-muted-foreground">
            Dúvidas sobre serviços, produtos ou orçamentos? Entre em contato
            conosco. Respondemos rapidamente!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-6 bg-white border border-border rounded-xl hover-lift transition-smooth group"
            >
              <div className="flex-shrink-0 p-3 bg-accent/10 rounded-lg group-hover:bg-accent group-hover:text-white transition-smooth">
                <MessageCircle className="w-6 h-6 text-accent group-hover:text-white" />
              </div>
              <div>
                <h3 className="font-accent text-foreground font-semibold mb-1">
                  WhatsApp
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Suporte rápido e direto
                </p>
                <p className="text-accent font-accent text-sm">(66) 99845-8818</p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/pc_flix_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-6 bg-white border border-border rounded-xl hover-lift transition-smooth group"
            >
              <div className="flex-shrink-0 p-3 bg-accent/10 rounded-lg group-hover:bg-accent group-hover:text-white transition-smooth">
                <Instagram className="w-6 h-6 text-accent group-hover:text-white" />
              </div>
              <div>
                <h3 className="font-accent text-foreground font-semibold mb-1">
                  Instagram
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Acompanhe nossas novidades
                </p>
                <p className="text-accent font-accent text-sm">@pc_flix_</p>
              </div>
            </a>

            {/* Email */}
            <div className="flex items-start gap-4 p-6 bg-white border border-border rounded-xl">
              <div className="flex-shrink-0 p-3 bg-accent/10 rounded-lg">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-accent text-foreground font-semibold mb-1">
                  Email
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Envie suas dúvidas
                </p>
                <p className="text-accent font-accent text-sm">
                  contato@pcflix.com.br
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-border rounded-xl p-8 space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-accent text-foreground mb-2"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-smooth"
                    placeholder="Seu nome"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-accent text-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-smooth"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-accent text-foreground mb-2"
                >
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-smooth"
                  placeholder="Como podemos ajudar?"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-accent text-foreground mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-smooth resize-none"
                  placeholder="Descreva sua dúvida ou solicitação..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent text-white rounded-lg font-accent hover:bg-red-700 transition-smooth"
              >
                {submitted ? "Mensagem Enviada! ✓" : "Enviar Mensagem"}
              </button>
            </form>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-6 bg-white border-2 border-accent text-accent rounded-xl hover:bg-accent hover:text-white transition-smooth font-accent"
          >
            <MessageCircle className="w-5 h-5" />
            Chamar no WhatsApp
          </a>
          <a
            href="https://instagram.com/pc_flix_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-6 bg-white border border-border text-foreground rounded-xl hover:bg-secondary transition-smooth font-accent"
          >
            <Instagram className="w-5 h-5" />
            Seguir no Instagram
          </a>
          <a
            href="#products"
            className="flex items-center justify-center gap-3 p-6 bg-accent text-white rounded-xl hover:bg-red-700 transition-smooth font-accent"
          >
            <Phone className="w-5 h-5" />
            Ver Catálogo
          </a>
        </div>
      </div>
    </section>
  );
}
