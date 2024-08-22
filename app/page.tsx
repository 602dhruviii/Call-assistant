import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";

import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "AI Call Assistant",
  description: "Trail page",
};

export default function Home() {
  return (
    <>
      <HeroSection />  
      <FeaturesSection />    
      <BenefitsSection />      
      <ServicesSection />
      <TestimonialSection />
      <CommunitySection />
      <SponsorsSection />
      <PricingSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
