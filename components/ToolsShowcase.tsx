import { ArrowRight, CheckCircle } from "lucide-react";

const tools = [
  {
    name: "Mercado Livre",
    description: "Maximize seu faturamento no maior marketplace da América Latina com análises completas.",
    iconImage: "/icons/ml-icon.png",
    features: ["Análise de margem em tempo real", "Precificação inteligente", "Relatórios de vendas e lucro"],
    ctaText: "Ver planos Mercado Livre",
    ctaHref: "#pricing",
  },
  {
    name: "Shopee",
    description: "Transforme suas vendas na Shopee com métricas precisas e decisões baseadas em dados.",
    iconImage: "/icons/combo-icon.png",
    features: ["Cálculo automático de custos", "Dashboard de performance", "Análise de competitividade"],
    ctaText: "Ver planos Shopee",
    ctaHref: "#pricing",
  },
];

const comingSoon = [
  { name: "Amazon", status: "Em desenvolvimento" },
  { name: "Magalu", status: "Próximo na fila" },
  { name: "TikTok Shop", status: "Em planejamento" },
];

export default function ToolsShowcase() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ferramentas disponíveis
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Escolha a ferramenta ideal para o seu marketplace e comece a tomar decisões baseadas em dados.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center border border-gray-200 p-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={tool.iconImage} 
                    alt={tool.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{tool.name}</h3>
              </div>

              <p className="text-gray-600 mb-6">{tool.description}</p>

              <ul className="space-y-3 mb-8">
                {tool.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={tool.ctaHref}
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-primary text-white rounded-lg font-semibold hover:bg-gradient-primary-hover transition-all shadow-md hover:shadow-lg group"
              >
                {tool.ctaText}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border-2 border-dashed border-gray-300 p-8">
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-3">
              Em breve
            </span>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Novas ferramentas chegando</h3>
            <p className="text-gray-600">Estamos expandindo para mais marketplaces</p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {comingSoon.map((item, index) => (
              <div key={index} className="px-6 py-3 bg-gray-100 border border-gray-300 rounded-lg">
                <div className="font-semibold text-gray-500">{item.name}</div>
                <div className="text-xs text-gray-400 mt-1">{item.status}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
