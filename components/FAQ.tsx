"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Funciona em quais marketplaces?",
    answer:
      "Atualmente o Profit3D funciona no Mercado Livre e na Shopee. Em breve lançaremos suporte para Amazon, Magalu e TikTok Shop. Você pode escolher o plano de acordo com o marketplace que você vende.",
  },
  {
    question: "Preciso instalar algo?",
    answer:
      "Sim, você precisa instalar a extensão do Chrome. Após a compra, você receberá um e-mail com o link para download e as instruções de instalação. É rápido e simples.",
  },
  {
    question: "Como recebo acesso após pagar?",
    answer:
      "Após finalizar o pagamento no Stripe, você receberá um e-mail com um magic link (link de acesso único). Basta clicar nele para fazer login na extensão sem precisar de senha.",
  },
  {
    question: "Posso compartilhar meu acesso?",
    answer:
      "Não. Cada plano é individual e vinculado ao seu e-mail. O compartilhamento de acesso viola nossos termos de uso e pode resultar no cancelamento da sua conta.",
  },
  {
    question: "Como cancelo?",
    answer:
      "Você pode cancelar a qualquer momento através do painel da extensão ou enviando um e-mail para suporte@profit3d.com. O acesso continua até o fim do período pago e não há renovação automática após o cancelamento.",
  },
  {
    question: "O que vem em breve?",
    answer:
      "Estamos trabalhando em suporte para Amazon, Magalu e TikTok Shop. Além disso, planejamos lançar análise de concorrência, alertas de preço e integração com ferramentas de estoque. Nossos assinantes têm acesso prioritário às novidades.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Tire suas dúvidas sobre o Profit3D
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Perguntas frequentes</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-blue-200 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`flex-shrink-0 text-gray-500 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  size={20}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 pt-2 bg-gray-50">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Ainda tem dúvidas?</p>
          <a
            href="mailto:suporte@profit3d.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Entre em contato
          </a>
        </div>
      </div>
    </section>
  );
}
