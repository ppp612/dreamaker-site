"use client";

import { LanguageProvider } from "@/i18n/LanguageContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BusinessSummary from "@/components/BusinessSummary";
import AudienceSplit from "@/components/AudienceSplit";
import Applications from "@/components/Applications";
import DisplayConcept from "@/components/DisplayConcept";
import WhySteel from "@/components/WhySteel";
import Services from "@/components/Services";
import InteriorShowcase from "@/components/InteriorShowcase";
import Resources from "@/components/Resources";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <BusinessSummary />
        <AudienceSplit />
        <Applications />
        <DisplayConcept />
        <WhySteel />
        <Services />
        <InteriorShowcase />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
