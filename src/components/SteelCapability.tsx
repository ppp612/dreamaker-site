"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import ImagePlaceholder from "./ImagePlaceholder";
import { useLanguage } from "@/i18n/LanguageContext";
import translations from "@/i18n/translations";

export default function SteelCapability() {
  const { t } = useLanguage();
  const s = translations.steelCapability;

  return (
    <section id="steel" className="bg-primary relative overflow-hidden">
      {/* Top gradient fade */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_70%_0%,rgba(201,169,110,0.07),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left: image + label */}
          <div>
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-8">
                {t(s.label)}
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              {/* ━━ Replace: swap with <Image src="/images/steel.jpg" ... /> ━━ */}
              <ImagePlaceholder
                aspect="aspect-[4/3]"
                label="Steel Structure"
                sublabel="steel frame / factory / warehouse / site"
                rounded="rounded-2xl"
                className="border-white/10"
              />
            </FadeIn>
          </div>

          {/* Right: headline + points */}
          <div>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-[1.15] whitespace-pre-line">
                {t(s.title)}
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-6 text-base sm:text-lg text-white/50 leading-relaxed max-w-lg">
                {t(s.description)}
              </p>
            </FadeIn>

            <div className="mt-12 space-y-0">
              {s.points.map((point, i) => (
                <FadeIn key={i} delay={0.25 + i * 0.08}>
                  <motion.div
                    whileHover={{ x: 6 }}
                    className="group py-6 border-t border-white/10 first:border-t-0"
                  >
                    <div className="flex items-start gap-4">
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0 group-hover:bg-accent transition-colors duration-300" />
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-accent transition-colors duration-300">
                          {t(point.title)}
                        </h3>
                        <p className="mt-2 text-sm text-white/40 leading-relaxed max-w-sm">
                          {t(point.description)}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
