import { Instagram, Youtube, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <a href="/" className="mb-4 block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/icons/logo1-sfundo.png" 
                alt="Profit3D" 
                className="h-10 w-auto brightness-0 invert"
              />
            </a>
            <p className="text-sm text-gray-400 max-w-md">
              Ferramentas para vendedores de impressão 3D que querem aumentar suas vendas e margens em marketplaces
              como Mercado Livre e Shopee.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#features" className="hover:text-white transition-colors">
                  Ferramentas
                </a>
              </li>
              <li>
                <a href="/#how-it-works" className="hover:text-white transition-colors">
                  Como funciona
                </a>
              </li>
              <li>
                <a href="/#pricing" className="hover:text-white transition-colors">
                  Planos
                </a>
              </li>
              <li>
                <a href="/#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/termos-de-uso" className="hover:text-white transition-colors">
                  Termos de uso
                </a>
              </li>
              <li>
                <a href="/politica-de-privacidade" className="hover:text-white transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="/contato" className="hover:text-white transition-colors">
                  Contato / Suporte
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} Profit3D. Todos os direitos reservados.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/profit3d.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.youtube.com/@profit3d"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="/contato"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Contato"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
