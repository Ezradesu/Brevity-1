"use client";

import FeaturesSection from "@/components/feature";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero";
import HowItWorksSection from "@/components/howitworks";
import JoinUs from "@/components/joinus";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <HeroSection isPageLoaded />
      <FeaturesSection />
      <HowItWorksSection />
      <JoinUs />
      <FooterSection isPageLoaded />
    </div>
  );
}
