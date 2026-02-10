import { Check, Shield, CreditCard, RotateCcw } from "lucide-react";

const plans = [
  {
    marketplace: "Mercado Livre",
    icon: "ML",
    iconImage: "/icons/ml-icon.png",
    iconColor: "bg-yellow-400",
    monthly: {
      price: "49,90",
      fullPrice: "R$ 49,90",
    },
    yearly: {
      price: "490,00",
      fullPrice: "R$ 490,00",
      monthlyEquivalent: "R$ 40,83",
      savings: "Economize R$ 108,80/ano",
    },
    features: [
      "Análise de margem em tempo real",
      "Precificação inteligente",
      "Relatórios de vendas",
      "Dashboard completo",
      "Suporte via e-mail",
    ],
    popular: false,
  },
  {
    marketplace: "Shopee + Mercado Livre",
    icon: "S+ML",
    iconImage: "/icons/combo-icon.png",
    iconColor: "bg-gradient-to-r from-orange-500 to-yellow-400",
    monthly: {
      price: "99,00",
      fullPrice: "R$ 99,00",
    },
    yearly: {
      price: "998,00",
      fullPrice: "R$ 998,00",
      monthlyEquivalent: "R$ 83,17",
      savings: "Economize R$ 190,00/ano",
    },
    features: [
      "Tudo do plano Mercado Livre",
      "Ferramentas para Shopee",
      "Comparação entre marketplaces",
      "Relatórios consolidados",
      "Suporte prioritário",
    ],
    popular: true,
  },
];

export default function PricingPreview() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Escolha o <span className="bg-gradient-primary bg-clip-text text-transparent">melhor plano</span> para sua
            operação
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Todos os planos incluem os recursos completos da extensão escolhida. Cobrança recorrente e automática,
            cancele quando quiser.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6 justify-center items-center text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Shield className="text-green-600" size={20} />
              <span>Checkout seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="text-blue-600" size={20} />
              <span>Cobrança recorrente e automática</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="text-purple-600" size={20} />
              <span>Cancele quando quiser</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl border-2 p-8 ${
                plan.popular
                  ? "border-blue-500 shadow-2xl scale-105"
                  : "border-gray-200 hover:border-blue-200 hover:shadow-lg"
              } transition-all duration-300`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-2 bg-gradient-primary text-white rounded-full text-sm font-semibold shadow-lg">
                    Mais econômico
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <div className="inline-flex w-20 h-20 bg-white rounded-xl items-center justify-center mb-4 shadow-lg p-2 border border-gray-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={plan.iconImage} 
                    alt={plan.marketplace}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.marketplace}</h3>
              </div>

              {/* Pricing Options */}
              <div className="space-y-4 mb-6">
                {/* Monthly */}
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-sm font-medium text-gray-600">Plano Mensal</span>
                    <div>
                      <span className="text-3xl font-bold text-gray-900">R$ {plan.monthly.price}</span>
                      <span className="text-gray-600">/mês</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">Cobrado mensalmente</p>
                </div>

                {/* Yearly */}
                <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border-2 border-blue-200">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-sm font-medium text-blue-700">Plano Anual</span>
                    <div>
                      <span className="text-3xl font-bold text-gray-900">{plan.yearly.monthlyEquivalent}</span>
                      <span className="text-gray-600">/mês*</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mb-1">*Pagamento anual de {plan.yearly.fullPrice}</p>
                  <p className="text-xs font-semibold text-green-600">{plan.yearly.savings}</p>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#"
                className={`block text-center w-full px-6 py-4 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg ${
                  plan.popular
                    ? "bg-gradient-primary text-white hover:bg-gradient-primary-hover"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                Assinar agora →
              </a>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 text-sm text-gray-600">
          <p>Dúvidas sobre qual plano escolher? <a href="#faq" className="text-blue-600 hover:underline">Veja o FAQ</a></p>
        </div>
      </div>
    </section>
  );
}
