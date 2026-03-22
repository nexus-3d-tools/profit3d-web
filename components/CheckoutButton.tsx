"use client";

import { useState, useRef, useEffect } from "react";
import { Loader2, X } from "lucide-react";
import { API_BASE } from "@/lib/constants";

interface CheckoutButtonProps {
  plan: string;
  className?: string;
  children?: React.ReactNode;
}

export function CheckoutButton({ plan, className, children }: CheckoutButtonProps) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setEmail("");
      setError("");
    }
  }, [open]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) {
      setError("Informe seu e-mail.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan, customerEmail: trimmed }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || data.message || `Erro ${res.status}. Tente novamente.`);
        return;
      }
      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
      } else {
        setError("Resposta inválida do servidor.");
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "Erro de conexão. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {children}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
        >
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              aria-label="Fechar"
            >
              <X size={20} />
            </button>

            <h2 className="text-xl font-bold text-gray-900 mb-1">Quase lá!</h2>
            <p className="text-sm text-gray-600 mb-6">
              Informe seu e-mail para receber o link da extensão após o pagamento.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <label htmlFor="checkout-email" className="block text-sm font-medium text-gray-700 mb-1">
                E-mail
              </label>
              <input
                ref={inputRef}
                id="checkout-email"
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(""); }}
                placeholder="seu@email.com"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none mb-4"
              />

              {error && (
                <p className="text-sm text-red-600 mb-4">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-6 bg-gradient-primary text-white rounded-xl font-semibold text-base transition-all shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading && <Loader2 className="animate-spin" size={18} />}
                {loading ? "Aguarde..." : "Ir para pagamento"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
