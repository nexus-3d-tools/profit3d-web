# Setup Guide - Profit3D Landing Page

## Instalação inicial

1. Instale as dependências:
```bash
npm install
```

2. Rode o servidor de desenvolvimento:
```bash
npm run dev
```

3. Acesse http://localhost:3000

## Configurações necessárias antes do deploy

### 1. Stripe Checkout
Edite `lib/constants.ts` e adicione as URLs do Stripe Checkout:
```typescript
export const STRIPE_CHECKOUT = {
  ML_MONTHLY: "https://checkout.stripe.com/...",
  ML_YEARLY: "https://checkout.stripe.com/...",
  COMBO_MONTHLY: "https://checkout.stripe.com/...",
  COMBO_YEARLY: "https://checkout.stripe.com/...",
};
```

Depois, atualize os componentes para usar essas constantes ao invés de `href="#"`.

### 2. Logo/Branding
- Adicione seu logo em `public/logo.png` ou similar
- Atualize `components/Header.tsx` para usar a imagem
- Adicione favicon em `app/favicon.ico`

### 3. Analytics
Em `app/layout.tsx`, adicione scripts de tracking:
- Google Analytics
- Meta Pixel (opcional)
- Hotjar (opcional)

### 4. SEO
Atualize `app/layout.tsx` com metadata completa:
```typescript
export const metadata: Metadata = {
  title: "Profit3D - ...",
  description: "...",
  openGraph: {
    // ...
  },
  twitter: {
    // ...
  },
};
```

### 5. Domínio e Deploy
- Configure domínio no Vercel/Netlify
- Atualize `public/robots.txt` com URL real
- Configure variáveis de ambiente no painel de deploy

### 6. E-mail de suporte
Substitua `suporte@profit3d.com` nos componentes pelo e-mail real.

### 7. Links de redes sociais
Atualize `lib/constants.ts` com URLs reais do Instagram/YouTube.

## Checklist pré-deploy

- [ ] URLs do Stripe configuradas
- [ ] Logo e favicon adicionados
- [ ] Analytics configurado
- [ ] Metadata/SEO completo
- [ ] E-mail de suporte correto
- [ ] Links de redes sociais corretos
- [ ] Testado em mobile e desktop
- [ ] Build de produção OK (`npm run build`)
- [ ] Páginas de Termos e Privacidade criadas

## Deploy na Vercel

```bash
# Instale a CLI da Vercel
npm i -g vercel

# Deploy
vercel
```

Ou conecte o repositório diretamente na dashboard da Vercel.
