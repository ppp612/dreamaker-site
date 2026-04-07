"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import ImagePlaceholder from "./ImagePlaceholder";
import { useLanguage } from "@/i18n/LanguageContext";
import translations from "@/i18n/translations";

export default function HowWeSupport() {
  const { t } = useLanguage();
  const p = translations.howWeSupport;

  return (
    <section id="approach" className="py-16 sm:py-24 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: sticky headline + image */}
          <div className="lg:sticky lg:top-28">
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-5">
                {t(p.label)}
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-primary tracking-tight whitespace-pre-line leading-[1.15]">
                {t(p.title)}
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="mt-6 text-base text-gray-500 leading-relaxed lg:text-lg">
                {t(p.description)}
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <div className="mt-10 hidden lg:block">
                <ImagePlaceholder
                  aspect="aspect-[16/10]"
                  label="Approach"
                  sublabel="strategy session / whiteboard"
                  rounded="rounded-2xl"
                />
              </div>
            </FadeIn>
          </div>

          {/* Right: numbered steps */}
          <div className="space-y-0">
            {p.steps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ x: 6 }}
                  className="group py-8 sm:py-10 border-t border-border/60 first:border-t-0 lg:first:border-t"
                >
                  <div className="flex items-start gap-6 sm:gap-8">
                    <span className="text-5xl sm:text-6xl font-extralight text-accent/40 leading-none shrink-0 tabular-nums group-hover:text-accent transition-colors duration-300">
                      {step.number}
                    </span>
                    <div className="pt-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                        {t(step.title)}
                      </h3>
                      <p className="mt-3 text-sm sm:text-base text-gray-500 leading-relaxed max-w-md">
                        {t(step.description)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
