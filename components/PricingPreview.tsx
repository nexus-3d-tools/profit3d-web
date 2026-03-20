"use client";

import { Check, Shield, CreditCard, RotateCcw, Loader2 } from "lucide-react";
import { useState } from "react";
import { API_BASE } from "@/lib/constants";

const plans = [
  {
    marketplace: "Mercado Livre",
    planIdMonthly: "BASIC",
    planIdYearly: "BASIC_YEAR",
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
    planIdMonthly: "PRO",
    planIdYearly: "PRO_YEAR",
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
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [annualByPlan, setAnnualByPlan] = useState<Record<number, boolean>>({ 0: false, 1: false });

  async function handleCheckout(plan: string) {
    const trimmed = email.trim();
    if (!trimmed) {
      setError("Informe seu e-mail para receber o link da extensão após o pagamento.");
      return;
    }
    setError("");
    setLoading(plan);
    const apiUrl = `${API_BASE}/api/checkout`;
    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan, customerEmail: trimmed }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        const msg = data.error || data.message || `Erro ${res.status}. Tente novamente.`;
        setError(msg);
        return;
      }
      const checkoutUrl = data.checkoutUrl;
      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      } else {
        setError("Resposta inválida do servidor.");
      }
    } catch (e) {
      const errMsg = e instanceof Error ? e.message : "Erro de conexão";
      setError(`Erro: ${errMsg}. Verifique se a API está online (${API_BASE}).`);
    } finally {
      setLoading(null);
    }
  }

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Escolha o <span className="bg-gradient-primary bg-clip-text text-transparent">melhor plano</span> para sua
            operação
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Todos os planos incluem os recursos completos da extensão escolhida. Cobrança recorrente e automática,
            cancele quando quiser.
          </p>

          <div className="max-w-md mx-auto mb-8 text-left">
          <label htmlFor="checkout-email" className="block text-sm font-medium text-gray-700 mb-2">
            Seu e-mail (obrigatório) — para envio do link da extensão
          </label>
          <input
            id="checkout-email"
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setError(""); }}
            placeholder="seu@email.com"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
          {!email.trim() && (
            <p className="mt-2 text-sm text-amber-600">
              Preencha seu e-mail acima para habilitar os botões de assinatura.
            </p>
          )}
        </div>

        {error && (
          <div className="max-w-md mx-auto mb-6">
            <p className="text-center text-sm text-red-600">{error}</p>
          </div>
        )}

        <div className="flex flex-wrap gap-6 justify-center items-center text-sm text-gray-600 mb-8">
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
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-2 bg-gradient-primary text-white rounded-full text-sm font-semibold shadow-lg">
                    Mais econômico
                  </span>
                </div>
              )}

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

              <div className="mb-6">
                <div className="p-5 rounded-xl border-2 border-gray-200 bg-gray-50 mb-4">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-3xl font-bold text-gray-900">
                      {annualByPlan[index] ? plan.yearly.monthlyEquivalent : plan.monthly.price}
                    </span>
                    <span className="text-gray-600">/mês</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">
                    {annualByPlan[index] ? (
                      <>Pagamento anual de {plan.yearly.fullPrice}</>
                    ) : (
                      <>Cobrado mensalmente</>
                    )}
                  </p>
                  <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg bg-white border border-gray-200 hover:border-blue-300 transition-colors">
                    <div className="relative flex-shrink-0 w-11 h-6">
                      <input
                        type="checkbox"
                        checked={annualByPlan[index] || false}
                        onChange={(e) => setAnnualByPlan((prev) => ({ ...prev, [index]: e.target.checked }))}
                        className="sr-only peer"
                      />
                      <div className={`w-full h-full rounded-full transition-colors ${annualByPlan[index] ? "bg-green-500" : "bg-gray-200"}`} />
                      <div
                        className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform"
                        style={{ transform: annualByPlan[index] ? "translateX(20px)" : "translateX(0)" }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {annualByPlan[index] ? (
                        <span className="text-green-600">{plan.yearly.savings}</span>
                      ) : (
                        <>Economize com cobrança anual – R$ {plan.yearly.monthlyEquivalent}/mês</>
                      )}
                    </span>
                  </label>
                </div>
                <button
                  type="button"
                  onClick={() => handleCheckout(annualByPlan[index] ? plan.planIdYearly : plan.planIdMonthly)}
                  disabled={!!loading || !email.trim()}
                  title={!email.trim() ? "Preencha seu e-mail acima para continuar" : undefined}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-base transition-all shadow-md hover:shadow-lg ${
                    !email.trim()
                      ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                      : plan.popular
                        ? "bg-gradient-primary text-white hover:bg-gradient-primary-hover"
                        : "bg-gray-900 text-white hover:bg-gray-800"
                  } disabled:opacity-60 disabled:cursor-not-allowed`}
                >
                  {loading === (annualByPlan[index] ? plan.planIdYearly : plan.planIdMonthly) && (
                    <Loader2 className="inline animate-spin mr-2" size={20} />
                  )}
                  Assinar {annualByPlan[index] ? "anual" : "mensal"}
                </button>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 text-sm text-gray-600">
          <p>Dúvidas sobre qual plano escolher? <a href="#faq" className="text-blue-600 hover:underline">Veja o FAQ</a></p>
        </div>
      </div>
    </section>
  );
}
