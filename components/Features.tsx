import { TrendingUp, DollarSign, BarChart3, Clock, Target, Zap } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Margem em 1 clique",
    description: "Veja sua margem de lucro instantaneamente em cada produto, sem precisar fazer cálculos manuais.",
  },
  {
    icon: DollarSign,
    title: "Precificação sugerida",
    description: "Receba sugestões inteligentes de preço baseadas em custos, margem desejada e mercado.",
  },
  {
    icon: BarChart3,
    title: "Relatórios claros",
    description: "Dashboard com métricas essenciais: vendas, margem média, produtos mais rentáveis e tendências.",
  },
  {
    icon: Clock,
    title: "Economize tempo",
    description: "Automatize análises que você fazia manualmente em planilhas. Foque em vender mais.",
  },
  {
    icon: Target,
    title: "Decisões com dados",
    description: "Pare de adivinhar. Use dados reais para escolher quais produtos focar e quais remanejar.",
  },
  {
    icon: Zap,
    title: "Atualizações constantes",
    description: "Novas funcionalidades e melhorias baseadas no feedback dos vendedores. Evolução contínua.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Por que usar o <span className="bg-gradient-primary bg-clip-text text-transparent">Profit3D</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ferramentas pensadas para vendedores de impressão 3D que querem crescer com inteligência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 bg-white group"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
