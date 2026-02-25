import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso – Profit3D",
  description: "Termos de Uso da extensão e serviços Profit3D.",
};

export default function TermosUsoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <article className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto prose prose-gray prose-lg">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Termos de Uso – Profit3D
          </h1>
          <p className="text-gray-500 text-sm mb-10">
            Última atualização: 25 de fevereiro de 2026
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            Estes Termos de Uso regulam o acesso e uso da extensão Profit3D e
            dos serviços relacionados oferecidos pela Profit3D.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Ao utilizar a extensão, você concorda com estes Termos.
          </p>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              1. Sobre a Profit3D
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A Profit3D é uma ferramenta de análise e cálculo de custos e lucro
              estimado para vendedores de impressão 3D que anunciam em
              marketplaces como Mercado Livre e Shopee.
            </p>
            <p className="text-gray-700 leading-relaxed">
              A extensão atua exclusivamente como ferramenta auxiliar de cálculo
              e não possui vínculo comercial direto com os marketplaces.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              2. Natureza do Serviço
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">A Profit3D:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Exibe uma calculadora integrada à página do anúncio</li>
              <li>
                Realiza estimativas com base em dados públicos e valores
                inseridos pelo usuário
              </li>
              <li>Não interfere no anúncio original</li>
              <li>Não altera dados do marketplace</li>
              <li>Não realiza publicações automáticas</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              As informações exibidas são estimativas e não constituem garantia
              de lucro ou resultado financeiro.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              3. Responsabilidade do Usuário
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              O usuário é integralmente responsável por:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Inserir corretamente seus custos</li>
              <li>Conferir taxas aplicáveis ao seu tipo de conta</li>
              <li>Validar as informações antes de tomar decisões comerciais</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              A Profit3D não se responsabiliza por:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Prejuízos financeiros</li>
              <li>Decisões comerciais tomadas com base nas estimativas</li>
              <li>Alterações nas políticas ou taxas dos marketplaces</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              4. Integrações com Marketplaces
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A Profit3D pode utilizar integração oficial via API quando
              aplicável.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">A ferramenta:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Não armazena credenciais de login do usuário</li>
              <li>Utiliza autenticação segura quando necessário</li>
              <li>
                Opera de acordo com as políticas das plataformas integradas
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              A Profit3D não é afiliada oficialmente ao Mercado Livre ou Shopee,
              salvo quando explicitamente informado.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              5. Planos e Pagamentos
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A Profit3D poderá oferecer planos pagos, incluindo:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Acesso exclusivo a determinados marketplaces</li>
              <li>Recursos avançados de cálculo</li>
              <li>Funcionalidades premium</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Os pagamentos, quando aplicáveis, serão processados por terceiros
              autorizados (ex: Stripe).
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              A cobrança é recorrente quando aplicável ao plano contratado.
            </p>
            <p className="text-gray-700 leading-relaxed">
              O cancelamento poderá ser realizado a qualquer momento, sendo
              válido até o término do período contratado.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              6. Limitação de Responsabilidade
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A Profit3D é fornecida &quot;como está&quot;, sem garantias de:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Precisão absoluta dos cálculos</li>
              <li>Disponibilidade ininterrupta</li>
              <li>Ausência de falhas técnicas</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Em nenhuma hipótese a Profit3D será responsável por danos
              indiretos, lucros cessantes ou perdas financeiras decorrentes do
              uso da ferramenta.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              7. Propriedade Intelectual
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Todos os direitos relativos à marca, software, design e conteúdo
              da Profit3D pertencem exclusivamente aos seus desenvolvedores.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">É proibida:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Engenharia reversa</li>
              <li>Cópia parcial ou total do código</li>
              <li>Redistribuição não autorizada</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              8. Modificações nos Termos
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A Profit3D pode atualizar estes Termos a qualquer momento.
            </p>
            <p className="text-gray-700 leading-relaxed">
              A continuidade do uso da extensão após alterações implica
              concordância com a versão atualizada.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              9. Encerramento de Acesso
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A Profit3D pode suspender ou encerrar o acesso do usuário em caso
              de:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Uso indevido</li>
              <li>Violação destes Termos</li>
              <li>Tentativa de exploração técnica da ferramenta</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              10. Contato
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dúvidas ou solicitações?{" "}
              <a
                href="/contato"
                className="text-blue-600 hover:underline font-medium"
              >
                Envie pelo formulário de contato
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
