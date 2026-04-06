"use client";

import { Home, HardHat, ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/i18n/LanguageContext";
import translations from "@/i18n/translations";

export default function AudienceSplit() {
  const { t } = useLanguage();
  const a = translations.audience;

  return (
    <section className="py-24 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
              {t(a.label)}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
              {t(a.title)}
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <FadeIn delay={0.1}>
            <div className="group relative bg-white rounded-3xl p-8 lg:p-10 border border-border/40 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <Home size={26} className="text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {t(a.homeowner.title)}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t(a.homeowner.description)}
              </p>
              <a
                href="#applications"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
              >
                {t(a.homeowner.cta)}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="group relative bg-primary rounded-3xl p-8 lg:p-10 text-white hover:shadow-xl hover:shadow-primary/20 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <HardHat size={26} className="text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3">
                {t(a.builder.title)}
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                {t(a.builder.description)}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
              >
                {t(a.builder.cta)}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
