"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/i18n/LanguageContext";
import translations from "@/i18n/translations";

export default function Hero() {
  const { t } = useLanguage();
  const h = translations.hero;

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-muted via-white to-muted" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm font-medium text-primary/70">
                  {t(h.badge)}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-[1.1] tracking-tight">
                {t(h.headlineMain)}
                <span className="block text-accent mt-2">
                  {t(h.headlineAccent)}
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
                {t(h.description)}
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-4 mt-10">
                <a
                  href="#applications"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
                >
                  {t(h.ctaPrimary)}
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#display"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-primary font-medium rounded-full hover:bg-muted transition-all"
                >
                  {t(h.ctaSecondary)}
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex items-center gap-8 mt-12 pt-8 border-t border-border/60">
                <div>
                  <p className="text-2xl font-bold text-primary">
                    {t(h.statSteelTitle)}
                  </p>
                  <p className="text-sm text-gray-500">{t(h.statSteelSub)}</p>
                </div>
                <div className="w-px h-10 bg-border" />
                <div>
                  <p className="text-2xl font-bold text-primary">
                    {t(h.statModularTitle)}
                  </p>
                  <p className="text-sm text-gray-500">
                    {t(h.statModularSub)}
                  </p>
                </div>
                <div className="w-px h-10 bg-border" />
                <div>
                  <p className="text-2xl font-bold text-primary">
                    {t(h.statAuTitle)}
                  </p>
                  <p className="text-sm text-gray-500">{t(h.statAuSub)}</p>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} direction="left">
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white/80 backdrop-blur flex items-center justify-center shadow-sm">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="text-primary/40"
                      >
                        <path d="M3 21h18M3 7v1a3 3 0 006 0V7m0 1a3 3 0 006 0V7m0 1a3 3 0 006 0V7H3l2-4h14l2 4M5 21V10.87M19 21V10.87" />
                      </svg>
                    </div>
                    <p className="text-gray-400 text-sm font-medium">
                      {t(h.imagePlaceholder)}
                    </p>
                    <p className="text-gray-300 text-xs mt-1">
                      {t(h.imagePlaceholderSub)}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                  <div className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-primary/70">
                    {t(h.tagSteel)}
                  </div>
                  <div className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-primary/70">
                    {t(h.tagPrefab)}
                  </div>
                  <div className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-primary/70">
                    {t(h.tagModular)}
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl shadow-black/5 border border-border/60">
                <p className="text-xs text-gray-400 font-medium">
                  {t(h.floatingLabel)}
                </p>
                <p className="text-lg font-bold text-primary mt-0.5">
                  {t(h.floatingTitle)}
                </p>
                <p className="text-xs text-gray-500">{t(h.floatingDesc)}</p>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-gray-300" size={24} />
        </div>
      </div>
    </section>
  );
}
