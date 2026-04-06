"use client";

import { Layers, Wrench, Truck, Users, LucideIcon } from "lucide-react";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/i18n/LanguageContext";
import translations from "@/i18n/translations";

const pillarIcons: LucideIcon[] = [Layers, Wrench, Truck, Users];

export default function BusinessSummary() {
  const { t } = useLanguage();
  const b = translations.business;

  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeIn>
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
              {t(b.label)}
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {b.pillars.map((pillar, i) => {
            const Icon = pillarIcons[i];
            return (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="group p-6 rounded-2xl bg-muted border border-border/40 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-5 shadow-sm group-hover:shadow-md transition-shadow">
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
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
