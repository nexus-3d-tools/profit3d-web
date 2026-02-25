import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade – Profit3D",
  description:
    "Política de Privacidade da extensão Profit3D. Conheça como tratamos seus dados.",
};

export default function PoliticaPrivacidadePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <article className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto prose prose-gray prose-lg">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Política de Privacidade – Profit3D
          </h1>
          <p className="text-gray-500 text-sm mb-10">
            Última atualização: 25 de fevereiro de 2026
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            A extensão Profit3D respeita a privacidade dos seus usuários e está
            comprometida com a proteção de dados.
          </p>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              1. Coleta de Dados
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A extensão Profit3D não coleta, armazena ou compartilha dados
              pessoais dos usuários.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              A extensão funciona exclusivamente analisando informações públicas
              presentes nas páginas de anúncios do Mercado Livre e Shopee para
              realizar cálculos de custo e lucro.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nenhuma informação sensível, credencial de login ou dado pessoal é
              armazenado ou transmitido.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              2. Uso de Informações
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A extensão utiliza apenas:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>
                Dados públicos visíveis na página do anúncio (como preço e
                categoria)
              </li>
              <li>
                Configurações inseridas voluntariamente pelo usuário (como custo
                de filamento ou embalagem)
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Essas informações são utilizadas exclusivamente para cálculo e
              exibição de estimativas financeiras.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              3. Armazenamento Local
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A extensão pode utilizar o armazenamento local do navegador para
              salvar preferências da calculadora.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Esses dados permanecem apenas no dispositivo do usuário e não são
              enviados para servidores externos.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              4. Comunicação com Servidor
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A extensão pode se comunicar com servidores da Profit3D para:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Verificação de autenticação</li>
              <li>Validação de planos de acesso</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Nenhuma informação pessoal sensível é compartilhada nesse processo
              além do necessário para autenticação.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              5. Compartilhamento de Dados
            </h2>
            <p className="text-gray-700 leading-relaxed">
              A Profit3D não vende, transfere ou compartilha dados de usuários
              com terceiros.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              6. Segurança
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Adotamos boas práticas de segurança para proteger qualquer
              comunicação realizada entre a extensão e nossos servidores.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              7. Contato
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Em caso de dúvidas sobre esta Política de Privacidade, entre em
              contato:{" "}
              <a
                href="/contato"
                className="text-blue-600 hover:underline font-medium"
              >
                utilize nosso formulário de contato
              </a>
              .
            </p>
            <a
              href="/contato"
              className="inline-block mt-4 px-6 py-2.5 bg-gradient-primary text-white rounded-lg font-medium hover:bg-gradient-primary-hover transition-all shadow-md hover:shadow-lg"
            >
              Ir para formulário de contato
            </a>
          </section>
        </div>
      </article>
      <Footer />
    </main>
  );
}
