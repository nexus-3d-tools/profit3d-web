// Brand constants
export const BRAND = {
  name: "Profit3D",
  email: "suporte@profit3d.com",
  tagline: "Ferramentas para vendedores de impressão 3D",
};

// API - use NEXT_PUBLIC_API_URL no .env para sobrescrever (ex: Railway em dev)
export const API_BASE =
  (typeof process !== "undefined" && process.env?.NEXT_PUBLIC_API_URL) ||
  "https://api.profit3d.com.br";

export const EXTENSION_URL = "https://chromewebstore.google.com/detail/profit3d/akijhijcjegpldmcinplchgcijmdnmak";

// Social media links
export const SOCIAL = {
  instagram: "https://instagram.com",
  youtube: "https://youtube.com",
};

// Supported marketplaces
export const MARKETPLACES = {
  active: ["Mercado Livre", "Shopee"],
  comingSoon: ["Amazon", "Magalu", "TikTok Shop"],
};
