"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import ImagePlaceholder from "./ImagePlaceholder";
import { useLanguage } from "@/i18n/LanguageContext";
import translations from "@/i18n/translations";

export default function BentoCapabilities() {
  const { t } = useLanguage();
  const c = translations.capabilities;
  const gap = "gap-3 sm:gap-4";

  const bgStyles = [
    "bg-primary text-white",
    "border border-border/50 bg-white hover:shadow-lg hover:shadow-accent/5",
    "bg-accent/8",
    "bg-muted",
    "border border-border/50 bg-white hover:shadow-lg hover:shadow-accent/5",
    "bg-primary text-white",
  ];

  const isDark = (i: number) => i === 0 || i === 5;

  return (
    <section id="capabilities" className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`grid grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(140px,auto)] ${gap}`}>
          {/* ── Row 1: Wide image + Headline ───────────── */}
          <FadeIn className="col-span-2">
            <ImagePlaceholder
              aspect="aspect-[2/1]"
              label="Capabilities"
              sublabel="materials / logistics / warehouse"
              rounded="rounded-3xl"
              className="h-full min-h-[180px]"
            />
          </FadeIn>

          <FadeIn delay={0.08} className="col-span-2">
            <div className="h-full rounded-3xl bg-muted p-8 sm:p-10 flex flex-col justify-center">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-primary leading-snug tracking-tight">
                {t(c.headline)}
              </h2>
              <p className="mt-4 text-sm text-gray-500 leading-relaxed max-w-lg">
                {t(c.description)}
              </p>
            </div>
          </FadeIn>

          {/* ── Row 2: First 3 areas (1+1+1) + tall image (1, row-span-2) */}
          {c.areas.slice(0, 3).map((area, i) => (
            <FadeIn key={i} delay={0.12 + i * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                className={`h-full rounded-3xl p-6 sm:p-7 transition-all duration-300 ${bgStyles[i]}`}
              >
                <div className={`w-6 h-px mb-5 ${isDark(i) ? "bg-white/20" : "bg-accent/40"}`} />
                <h3 className={`text-base sm:text-lg font-semibold mb-2 ${isDark(i) ? "text-white" : "text-primary"}`}>
                  {t(area.title)}
                </h3>
                <p className={`text-sm leading-relaxed ${isDark(i) ? "text-white/60" : "text-gray-500"}`}>
                  {t(area.description)}
                </p>
              </motion.div>
            </FadeIn>
          ))}

          <FadeIn delay={0.25} className="hidden lg:block lg:row-span-2">
            <ImagePlaceholder
              aspect="aspect-auto"
              label="Project"
              sublabel="site / production"
              rounded="rounded-3xl"
              className="h-full min-h-[300px]"
            />
          </FadeIn>

          {/* ── Row 3: Last 3 areas (1+1+1), filling the 3 cols left by tall image */}
          {c.areas.slice(3).map((area, i) => {
            const idx = i + 3;
            return (
              <FadeIn key={idx} delay={0.3 + i * 0.05}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`h-full rounded-3xl p-6 sm:p-7 transition-all duration-300 ${bgStyles[idx]}`}
                >
                  <div className={`w-6 h-px mb-5 ${isDark(idx) ? "bg-white/20" : "bg-accent/40"}`} />
                  <h3 className={`text-base sm:text-lg font-semibold mb-2 ${isDark(idx) ? "text-white" : "text-primary"}`}>
                    {t(area.title)}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isDark(idx) ? "text-white/60" : "text-gray-500"}`}>
                    {t(area.description)}
                  </p>
                </motion.div>
              </FadeIn>
            );
          })}

          {/* Mobile-only image (replaces tall image hidden on mobile) */}
          <FadeIn className="col-span-2 lg:hidden">
            <ImagePlaceholder
              aspect="aspect-[16/10]"
              label="Project"
              sublabel="site / production"
              rounded="rounded-3xl"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
