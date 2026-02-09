# Exemplo de Integração com Stripe

## Como adicionar URLs do Stripe Checkout

### 1. Configure as constantes

Em `lib/constants.ts`:
```typescript
export const STRIPE_CHECKOUT = {
  ML_MONTHLY: "https://buy.stripe.com/seu-link-mensal-ml",
  ML_YEARLY: "https://buy.stripe.com/seu-link-anual-ml",
  COMBO_MONTHLY: "https://buy.stripe.com/seu-link-mensal-combo",
  COMBO_YEARLY: "https://buy.stripe.com/seu-link-anual-combo",
};
```

### 2. Atualize o PricingPreview.tsx

Adicione no início do arquivo:
```typescript
import { STRIPE_CHECKOUT } from "@/lib/constants";
```

Adicione uma prop `stripeLinks` ao objeto de cada plano:
```typescript
const plans = [
  {
    marketplace: "Mercado Livre",
    // ... outros campos
    stripeLinks: {
      monthly: STRIPE_CHECKOUT.ML_MONTHLY,
      yearly: STRIPE_CHECKOUT.ML_YEARLY,
    },
  },
  {
    marketplace: "Shopee + Mercado Livre",
    // ... outros campos
    stripeLinks: {
      monthly: STRIPE_CHECKOUT.COMBO_MONTHLY,
      yearly: STRIPE_CHECKOUT.COMBO_YEARLY,
    },
  },
];
```

### 3. Atualize o botão CTA

Substitua:
```typescript
<a href="#" className="...">
  Assinar agora →
</a>
```

Por:
```typescript
<a href={plan.stripeLinks.yearly} className="...">
  Assinar plano anual →
</a>
```

Ou crie dois botões (mensal e anual) se preferir dar mais opções visíveis.

### 4. Query parameters úteis

Você pode adicionar parâmetros às URLs do Stripe:
```typescript
const checkoutUrl = `${STRIPE_CHECKOUT.ML_MONTHLY}?client_reference_id=${userId}&prefilled_email=${email}`;
```

### 5. Tracking de conversão

Adicione evento de analytics ao clicar:
```typescript
<a
  href={plan.stripeLinks.yearly}
  onClick={() => {
    // Google Analytics
    gtag('event', 'begin_checkout', {
      currency: 'BRL',
      value: 490.00,
      items: [{ item_name: 'ML Yearly' }]
    });
  }}
  className="..."
>
  Assinar agora →
</a>
```

## Exemplo de fluxo completo

1. Usuário clica em "Assinar agora"
2. É redirecionado para Stripe Checkout
3. Completa o pagamento
4. Stripe webhook notifica seu backend
5. Backend gera magic link e envia por e-mail
6. Usuário clica no magic link
7. Extensão valida o token e libera acesso

## Webhook do Stripe

No seu backend, crie um endpoint para receber webhooks:
```typescript
// POST /api/webhooks/stripe
export async function POST(request: Request) {
  const sig = request.headers.get('stripe-signature');
  const body = await request.text();
  
  // Verificar assinatura
  const event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    // Criar usuário, gerar magic link, enviar e-mail
  }
  
  return Response.json({ received: true });
}
```
