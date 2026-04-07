"use client";

import { LanguageProvider } from "@/i18n/LanguageContext";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BentoIdentity from "@/components/BentoIdentity";
import Statement from "@/components/Statement";
import HowWeSupport from "@/components/HowWeSupport";
import SteelCapability from "@/components/SteelCapability";
import BentoCapabilities from "@/components/BentoCapabilities";
import Audience from "@/components/Audience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <SmoothScroll>
        <Header />
        <main>
          <Hero />
          <BentoIdentity />
          <Statement />
          <HowWeSupport />
          <SteelCapability />
          <BentoCapabilities />
          <Audience />
          <Contact />
        </main>
        <Footer />
      </SmoothScroll>
    </LanguageProvider>
  );
}
