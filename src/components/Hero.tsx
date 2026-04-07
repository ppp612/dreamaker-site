"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FadeIn from "./FadeIn";
import ImagePlaceholder from "./ImagePlaceholder";
import { useLanguage } from "@/i18n/LanguageContext";
import translations from "@/i18n/translations";

export default function Hero() {
  const { t } = useLanguage();
  const h = translations.hero;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 48]);
  const orbOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-muted/80 via-white to-white"
      />
      <motion.div
        style={{ opacity: orbOpacity }}
        className="pointer-events-none absolute -top-32 right-[-15%] h-[600px] w-[600px] rounded-full bg-accent/[0.04] blur-3xl"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8 pt-28 pb-12 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-0">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <FadeIn duration={0.9} distance={40}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light leading-[1.08] tracking-tight text-primary">
                {t(h.headline)}
                <span className="block mt-2 font-semibold text-accent">
                  {t(h.headlineAccent)}
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2} duration={0.8}>
              <p className="mt-8 max-w-md text-base leading-relaxed text-gray-500 sm:text-lg lg:text-xl lg:leading-relaxed">
                {t(h.description)}
              </p>
            </FadeIn>

            <FadeIn delay={0.35}>
              <div className="mt-12 flex flex-wrap gap-4">
                <motion.a
                  href="#about"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-white transition-shadow hover:shadow-xl hover:shadow-primary/15 sm:text-base"
                >
                  {t(h.ctaPrimary)}
                  <ArrowRight size={16} strokeWidth={2} />
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center rounded-full border border-border px-7 py-3.5 text-sm font-medium text-primary transition-colors hover:border-accent/40 hover:bg-muted/60 sm:text-base"
                >
                  {t(h.ctaSecondary)}
                </motion.a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.15} direction="left" distance={50} duration={1}>
            <motion.div style={{ y: imageY }}>
              <ImagePlaceholder
                aspect="aspect-[4/3]"
                label="Hero Image"
                sublabel="team / project scene / office"
                rounded="rounded-3xl"
                className="shadow-[0_32px_80px_-24px_rgba(26,26,46,0.14)]"
              />
            </motion.div>
          </FadeIn>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="pointer-events-none mt-20 flex justify-center lg:mt-28"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="text-gray-200"
          >
            <ChevronDown size={28} strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
