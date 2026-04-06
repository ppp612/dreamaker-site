"use client";

import { Ruler, Shield, Repeat, Puzzle, LucideIcon } from "lucide-react";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/i18n/LanguageContext";
import translations from "@/i18n/translations";

const benefitIcons: LucideIcon[] = [Ruler, Shield, Repeat, Puzzle];

export default function WhySteel() {
  const { t } = useLanguage();
  const w = translations.whySteel;

  return (
    <section id="why-steel" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeIn>
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
              {t(w.label)}
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
              {t(w.title)}
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              {t(w.description)}
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {w.benefits.map((benefit, i) => {
            const Icon = benefitIcons[i];
            return (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="group bg-muted rounded-2xl p-8 border border-border/40 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 h-full">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow shrink-0">
                      <Icon
                        size={22}
                        className="text-accent"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">
                        {t(benefit.title)}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {t(benefit.description)}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
