# Profit3D - Landing Page

Landing page do Profit3D, ferramenta para vendedores de impressão 3D em marketplaces.

## Stack

- **Next.js 14** com App Router
- **TypeScript**
- **TailwindCSS**
- **lucide-react** para ícones

## Como rodar

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Build para produção

```bash
npm run build
npm start
```

## Estrutura

```
uzf/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página inicial
│   └── globals.css         # Estilos globais
├── components/
│   ├── Header.tsx          # Cabeçalho com navegação
│   ├── Hero.tsx            # Seção hero com typewriter
│   ├── TypewriterText.tsx  # Componente de efeito typewriter
│   ├── MarketplaceBadges.tsx # Badges de marketplaces
│   ├── Features.tsx        # Seção de benefícios
│   ├── ToolsShowcase.tsx   # Cards de ferramentas disponíveis
│   ├── HowItWorks.tsx      # Seção de passos
│   ├── PricingPreview.tsx  # Seção de planos
│   ├── FAQ.tsx             # Perguntas frequentes
│   └── Footer.tsx          # Rodapé
└── ...arquivos de config
```

## Funcionalidades

### Hero com Typewriter
- Efeito de digitação/apagamento customizado
- Alterna entre "vender mais no Mercado Livre" e "vender mais na Shopee"
- Cores diferentes para cada marketplace

### Seções principais
1. **Features** - 6 benefícios com ícones
2. **Tools Showcase** - Cards de Mercado Livre e Shopee + "Em breve"
3. **How It Works** - 4 passos do onboarding
4. **Pricing** - Planos mensais e anuais
5. **FAQ** - 6 perguntas com accordion
6. **Footer** - Links e informações legais

### Responsivo
- Mobile-first design
- Breakpoints: sm (640px), md (768px), lg (1024px)

## Próximos passos

1. **Integrar com Stripe Checkout**
   - Substituir `href="#"` nos botões de CTA por URLs do Stripe
   - Adicionar parâmetros de preço e plano

2. **Adicionar logo/marca**
   - Substituir placeholder de texto no Header
   - Adicionar favicon

3. **Configurar Analytics**
   - Google Analytics
   - Meta Pixel (se aplicável)

4. **SEO**
   - Adicionar Open Graph tags
   - Configurar sitemap
   - robots.txt

5. **Deploy**
   - Vercel (recomendado para Next.js)
   - Configurar domínio customizado

## Customização

### Cores
As cores principais estão definidas em `tailwind.config.ts`:
- Gradiente azul → roxo: `bg-gradient-primary`
- Hover: `bg-gradient-primary-hover`

### Textos
Todos os textos estão inline nos componentes. Para internacionalização futura, considere usar next-intl ou similar.

### Planos
Os preços estão hardcoded em `components/PricingPreview.tsx`. Ajuste conforme necessário.

## Suporte

Para dúvidas: suporte@profit3d.com
