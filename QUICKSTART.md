# Quick Start - Profit3D Landing Page

## Instalação e execução rápida

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento
npm run dev
```

Acesse: http://localhost:3000

## Comandos úteis

```bash
# Build de produção
npm run build

# Rodar build de produção localmente
npm start

# Verificar erros de lint
npm run lint
```

## Estrutura da página

A landing page possui as seguintes seções (em ordem):

1. **Header** - Navegação fixa no topo
2. **Hero** - Título com efeito typewriter + CTAs
3. **Features** - 6 cards com benefícios
4. **Tools Showcase** - Cards de ML e Shopee
5. **How It Works** - 4 passos do onboarding
6. **Pricing** - Planos mensais e anuais
7. **FAQ** - 6 perguntas frequentes
8. **Footer** - Links e copyright

## Customização rápida

### Alterar cores do gradiente
Edite `tailwind.config.ts`:
```typescript
backgroundImage: {
  'gradient-primary': 'linear-gradient(135deg, #SUACOR1 0%, #SUACOR2 100%)',
}
```

### Alterar textos principais
- **Hero**: `components/Hero.tsx`
- **Features**: `components/Features.tsx`
- **Preços**: `components/PricingPreview.tsx`
- **FAQ**: `components/FAQ.tsx`

### Adicionar URLs do Stripe
Edite `lib/constants.ts` e siga instruções em `INTEGRATION_EXAMPLE.md`

## Próximos passos

1. Leia `SETUP.md` para configuração completa antes do deploy
2. Veja `INTEGRATION_EXAMPLE.md` para integração com Stripe
3. Adicione logo e favicon
4. Configure analytics
5. Deploy na Vercel

## Suporte

Em caso de dúvidas, consulte o `README.md` completo.
