"use client";

import Link from "next/link";
import { XCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PaymentCancelPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <XCircle className="mx-auto text-red-500 mb-6" size={64} />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Pagamento não concluído
          </h1>
          <p className="text-gray-600 mb-8">
            Seu pagamento não foi processado. Nenhuma cobrança foi realizada.
            Se o problema persistir, entre em contato com nosso suporte.
          </p>
          <Link
            href="/#planos"
            className="inline-block px-8 py-3 bg-gradient-primary text-white rounded-xl font-semibold text-base shadow-md hover:shadow-lg transition-all"
          >
            Tentar novamente
          </Link>
          <p className="mt-6 text-sm text-gray-500">
            <Link href="/" className="text-blue-600 hover:underline">
              Voltar ao site
            </Link>
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
