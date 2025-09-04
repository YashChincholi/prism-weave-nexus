import { HeroSection } from "@/components/sections/hero-section";
import { WhyDifferentSection } from "@/components/sections/why-different-section";
import { EcosystemShowcase } from "@/components/sections/ecosystem-showcase";
import { TemplateGallerySection } from "@/components/sections/template-gallery-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FinalCTASection } from "@/components/sections/final-cta-section";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhyDifferentSection />
      <EcosystemShowcase />
      <TemplateGallerySection />
      <TestimonialsSection />
      <PricingSection />
      <FinalCTASection />
    </main>
  );
};

export default Index;