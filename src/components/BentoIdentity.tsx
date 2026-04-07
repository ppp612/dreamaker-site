"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import ImagePlaceholder from "./ImagePlaceholder";
import { useLanguage } from "@/i18n/LanguageContext";
import translations from "@/i18n/translations";

export default function BentoIdentity() {
  const { t } = useLanguage();
  const b = translations.bento;
  const gap = "gap-3 sm:gap-4";

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Desktop: CSS Grid with named areas */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(160px,auto)] ${gap}`}
        >
          {/* ── A: Company intro (2×2) ──────────────────────────── */}
          <FadeIn className="col-span-2 row-span-2">
            <div className="h-full rounded-3xl bg-muted p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-6">
                DREAMAKER PTY LTD
              </p>
              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-primary/80 font-light">
                {t(b.companyIntro)}
              </p>
            </div>
          </FadeIn>

          {/* ── B: Image (large, spans 2 rows on lg) ───────────── */}
          <FadeIn delay={0.08} className="col-span-2 lg:row-span-2 hidden lg:block">
            <ImagePlaceholder
              aspect="aspect-auto"
              label="About"
              sublabel="team / office / collaboration"
              rounded="rounded-3xl"
              className="h-full min-h-[320px]"
            />
          </FadeIn>

          {/* Mobile-only image */}
          <FadeIn delay={0.08} className="col-span-2 lg:hidden">
            <ImagePlaceholder
              aspect="aspect-[16/10]"
              label="About"
              sublabel="team / office / collaboration"
              rounded="rounded-3xl"
            />
          </FadeIn>

          {/* ── C: Stat — Service-Led ──────────────────────────── */}
          <FadeIn delay={0.12}>
            <div className="h-full rounded-3xl bg-primary p-6 sm:p-8 flex flex-col justify-between text-white">
              <p className="text-2xl sm:text-3xl font-semibold leading-tight">
                {t(b.statServiceLed)}
              </p>
              <p className="text-sm text-white/50 mt-4">
                {t(b.statServiceSub)}
              </p>
            </div>
          </FadeIn>

          {/* ── D: Stat — AU Based ─────────────────────────────── */}
          <FadeIn delay={0.16}>
            <div className="h-full rounded-3xl bg-accent/10 p-6 sm:p-8 flex flex-col justify-between">
              <p className="text-2xl sm:text-3xl font-semibold leading-tight text-primary">
                {t(b.statAuBased)}
              </p>
              <p className="text-sm text-gray-500 mt-4">
                {t(b.statAuSub)}
              </p>
            </div>
          </FadeIn>

          {/* ── E: Quote (2 cols) ──────────────────────────────── */}
          <FadeIn delay={0.2} className="col-span-2">
            <div className="h-full rounded-3xl bg-accent p-8 sm:p-10 flex items-center">
              <p className="text-xl sm:text-2xl lg:text-3xl font-light italic text-primary/90 leading-snug">
                &ldquo;{t(b.quote)}&rdquo;
              </p>
            </div>
          </FadeIn>

          {/* ── F–H: Service items (3 × 1col) ─────────────────── */}
          {b.services.map((svc, i) => (
            <FadeIn key={i} delay={0.24 + i * 0.06}>
              <motion.div
                whileHover={{ y: -4 }}
                className="h-full rounded-3xl border border-border/50 bg-white p-6 sm:p-7 transition-shadow duration-300 hover:shadow-lg hover:shadow-accent/5"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-base sm:text-lg font-semibold text-primary mb-2">
                  {t(svc.title)}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {t(svc.description)}
                </p>
              </motion.div>
            </FadeIn>
          ))}

          {/* ── I: Small image ─────────────────────────────────── */}
          <FadeIn delay={0.42}>
            <ImagePlaceholder
              aspect="aspect-auto"
              label="Detail"
              sublabel="material / detail shot"
              rounded="rounded-3xl"
              className="h-full min-h-[160px]"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
