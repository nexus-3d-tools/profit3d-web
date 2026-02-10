"use client";

import TypewriterText from "./TypewriterText";
import MarketplaceBadges from "./MarketplaceBadges";

export default function Hero() {
  const phrases = [
    { text: "vender mais no Mercado Livre", color: "text-yellow-500" },
    { text: "vender mais na Shopee", color: "text-orange-500" },
  ];

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto text-center">
        {/* Tag */}
        <div className="inline-block mb-6">
          <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            Junte-se a + 1.000 vendedores
          </span>
        </div>

        {/* Main Title with Typewriter */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Ferramentas que te ajudam a{" "}
          <br className="hidden sm:block" />
          <TypewriterText phrases={phrases} />
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Acompanhe métricas e tome decisões baseadas em dados para aumentar sua margem e faturamento.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="#pricing"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-primary text-white rounded-lg font-semibold hover:bg-gradient-primary-hover transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Ver planos →
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto px-8 py-4 bg-white text-gray-800 rounded-lg font-semibold border-2 border-gray-200 hover:border-gray-300 transition-all"
          >
            Conhecer ferramentas
          </a>
        </div>

        {/* Marketplace Badges */}
        <MarketplaceBadges />
      </div>
    </section>
  );
}
