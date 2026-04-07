"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/i18n/LanguageContext";
import translations from "@/i18n/translations";

export default function Statement() {
  const { t } = useLanguage();
  const s = translations.statement;

  return (
    <section className="relative bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(201,169,110,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <FadeIn duration={1}>
          <blockquote className="max-w-4xl">
            <p className="text-3xl sm:text-4xl lg:text-6xl font-light leading-[1.15] text-white tracking-tight">
              &ldquo;{t(s.text)}&rdquo;
            </p>
          </blockquote>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
            <p className="text-sm tracking-widest uppercase text-white/35 font-medium">
              — {t(s.attribution)}
            </p>
            <motion.a
              href="#approach"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
            >
              {t(s.cta)}
              <ArrowRight size={14} strokeWidth={2} />
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
