import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Profit3D - Ferramentas para vendedores de impressão 3D",
  description: "Acompanhe métricas e tome decisões baseadas em dados para aumentar sua margem e faturamento em marketplaces como Mercado Livre e Shopee.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
