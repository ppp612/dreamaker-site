"use client";

import { Layers, Wrench, Truck, Users, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import FadeIn, { StaggerContainer, StaggerItem } from "./FadeIn";
import { useLanguage } from "@/i18n/LanguageContext";
import translations from "@/i18n/translations";

const pillarIcons: LucideIcon[] = [Layers, Wrench, Truck, Users];

export default function BusinessSummary() {
  const { t } = useLanguage();
  const b = translations.business;

  return (
    <section id="about" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeIn>
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
              {t(b.label)}
            </p>
          </FadeIn>
          <FadeIn delay={0.1} distance={35}>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight whitespace-pre-line">
              {t(b.title)}
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              {t(b.description)}
            </p>
          </FadeIn>
        </div>

        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.12}
        >
          {b.pillars.map((pillar, i) => {
            const Icon = pillarIcons[i];
            return (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="group p-6 rounded-2xl bg-muted border border-border/40 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-5 shadow-sm group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Icon
                      size={22}
                      className="text-accent"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {t(pillar.title)}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {t(pillar.description)}
                  </p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
