import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ToolsShowcase from "@/components/ToolsShowcase";
import HowItWorks from "@/components/HowItWorks";
import PricingPreview from "@/components/PricingPreview";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <ToolsShowcase />
      <HowItWorks />
      <PricingPreview />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
