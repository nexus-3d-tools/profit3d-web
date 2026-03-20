"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle, Loader2, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { API_BASE } from "@/lib/constants";

type Status = "loading" | "active" | "pending" | "no-email";

function SuccessContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
  const [status, setStatus] = useState<Status>("loading");
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    if (!email.trim()) {
      setStatus("no-email");
      return;
    }
    let cancelled = false;
    async function check() {
      try {
        const res = await fetch(
          `${API_BASE}/api/customers?email=${encodeURIComponent(email)}`
        );
        if (cancelled) return;
        if (!res.ok) {
          setStatus("pending");
          return;
        }
        const data = await res.json();
        if (data.subscriptionActive) {
          setStatus("active");
        } else {
          setStatus("pending");
        }
      } catch {
        if (!cancelled) setStatus("pending");
      }
    }
    check();
    return () => { cancelled = true; };
  }, [email, retryCount]);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          {status === "no-email" && (
            <>
              <div className="mb-6">
                <Mail className="mx-auto text-blue-500" size={64} />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Verifique seu e-mail
              </h1>
              <p className="text-gray-600 mb-8">
                Enviamos o link para instalar a extensão Profit3D no endereço
                usado no pagamento. Confira sua caixa de entrada e spam.
              </p>
              <p className="text-sm text-gray-500">
                <Link href="/" className="text-blue-600 hover:underline">
                  Voltar ao site
                </Link>
              </p>
            </>
          )}

          {status === "loading" && (
            <>
              <Loader2 className="mx-auto animate-spin text-blue-500 mb-6" size={48} />
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Confirmando seu pagamento...
              </h1>
              <p className="text-gray-600">
                Aguarde alguns segundos enquanto verificamos sua assinatura.
              </p>
            </>
          )}

          {status === "active" && (
            <>
              <CheckCircle className="mx-auto text-green-500 mb-6" size={64} />
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Assinatura confirmada!
              </h1>
              <p className="text-gray-600 mb-8">
                Sua assinatura está ativa. Enviamos o link da extensão para{" "}
                <strong>{email}</strong>. Confira sua caixa de entrada e spam.
              </p>
              <p className="text-sm text-gray-500">
                <Link href="/" className="text-blue-600 hover:underline">
                  Voltar ao site
                </Link>
              </p>
            </>
          )}

          {status === "pending" && (
            <>
              <Loader2 className="mx-auto text-amber-500 mb-6" size={48} />
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Processando pagamento
              </h1>
              <p className="text-gray-600 mb-6">
                Sua assinatura ainda está sendo confirmada. Isso pode levar até
                alguns minutos. Enviaremos o link da extensão para{" "}
                <strong>{email}</strong> assim que estiver tudo certo.
              </p>
              <button
                type="button"
                onClick={() => setRetryCount((c) => c + 1)}
                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition-colors"
              >
                Verificar novamente
              </button>
              <p className="mt-8 text-sm text-gray-500">
                <Link href="/" className="text-blue-600 hover:underline">
                  Voltar ao site
                </Link>
              </p>
            </>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen flex items-center justify-center">
          <Loader2 className="animate-spin text-blue-500" size={48} />
        </main>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
