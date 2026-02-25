import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContatoSuccessBanner from "@/components/ContatoSuccessBanner";
import { Suspense } from "react";

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Contato
          </h1>
          <p className="text-gray-600 mb-8">
            Envie sua dúvida ou solicitação. Responderemos o mais rápido possível.
          </p>

          <Suspense fallback={null}>
            <ContatoSuccessBanner />
          </Suspense>

          <form
            action="https://formsubmit.co/mathaugustosrcx@gmail.com"
            method="POST"
            className="space-y-6"
          >
            {/* FormSubmit config */}
            <input type="hidden" name="_subject" value="Nova mensagem do site Profit3D" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://profit3d.com.br/contato?enviado=1" />

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Descrição
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
                placeholder="Descreva sua dúvida ou solicitação..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-primary text-white rounded-lg font-semibold hover:bg-gradient-primary-hover transition-all shadow-md hover:shadow-lg"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}
