"use client";

import { Bed, Bath, Maximize2, Sun, LucideIcon } from "lucide-react";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/i18n/LanguageContext";
import translations from "@/i18n/translations";

const statIcons: LucideIcon[] = [Maximize2, Bed, Bath, Sun];

export default function DisplayConcept() {
  const { t } = useLanguage();
  const d = translations.display;

  return (
    <section id="display" className="py-24 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn direction="right">
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary/5 via-gray-100 to-accent/5 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-3xl bg-white/80 backdrop-blur flex items-center justify-center shadow-sm">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-accent/50"
                      >
                        <rect x="3" y="3" width="7" height="7" rx="1" />
                        <rect x="14" y="3" width="7" height="7" rx="1" />
                        <rect x="3" y="14" width="7" height="7" rx="1" />
                        <rect x="14" y="14" width="7" height="7" rx="1" />
                      </svg>
                    </div>
                    <p className="text-gray-400 text-sm font-medium">
                      {t(d.imagePlaceholder)}
                    </p>
                    <p className="text-gray-300 text-xs mt-1">
                      {t(d.imagePlaceholderSub)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-5 py-3 shadow-xl shadow-black/5 border border-border/60">
                <p className="text-xs font-semibold text-accent uppercase tracking-wider">
                  {t(d.floatingLabel)}
                </p>
                <p className="text-sm font-bold text-primary mt-0.5">
                  {t(d.floatingTitle)}
                </p>
              </div>
            </div>
          </FadeIn>

          <div>
            <FadeIn>
              <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
                {t(d.label)}
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight whitespace-pre-line">
                {t(d.title)}
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                {t(d.description)}
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
                {d.stats.map((stat, i) => {
                  const Icon = statIcons[i];
                  const value =
                    typeof stat.value === "string"
                      ? stat.value
                      : t(stat.value);
                  return (
                    <div
                      key={i}
                      className="bg-white rounded-2xl p-5 border border-border/40 text-center"
                    >
                      <Icon
                        size={20}
                        className="text-accent mx-auto mb-2"
                        strokeWidth={1.5}
                      />
                      <p className="text-2xl font-bold text-primary">
                        {value}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        {t(stat.label)}
                      </p>
                    </div>
                  );
                })}
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
                >
                  {t(d.ctaPrimary)}
                </a>
                <a
                  href="#resources"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-primary font-medium rounded-full hover:bg-white transition-all"
                >
                  {t(d.ctaSecondary)}
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <p className="mt-6 text-xs text-gray-400 leading-relaxed">
                {t(d.disclaimer)}
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
