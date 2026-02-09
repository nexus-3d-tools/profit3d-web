import { MousePointerClick, CreditCard, Mail, Chrome } from "lucide-react";

const steps = [
  {
    icon: MousePointerClick,
    title: "Escolha seu plano",
    description: "Selecione o marketplace (Mercado Livre ou Shopee) e o plano ideal para sua operação.",
  },
  {
    icon: CreditCard,
    title: "Finalize o pagamento",
    description: "Checkout seguro através do Stripe com cobrança recorrente. Cancele quando quiser.",
  },
  {
    icon: Mail,
    title: "Receba o acesso no e-mail",
    description: "Após o pagamento, você receberá um magic link no seu e-mail para acessar a plataforma.",
  },
  {
    icon: Chrome,
    title: "Instale e use a extensão",
    description: "Baixe a extensão do Chrome, faça login com seu magic link e comece a vender mais.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Como funciona</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comece a usar em minutos com nosso processo simples e guiado.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector Line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 opacity-30" />
                )}

                {/* Step Card */}
                <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all">
                  {/* Step Number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
                    <Icon className="text-blue-600" size={28} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-white rounded-lg font-semibold hover:bg-gradient-primary-hover transition-all shadow-lg hover:shadow-xl"
          >
            Começar agora →
          </a>
        </div>
      </div>
    </section>
  );
}
