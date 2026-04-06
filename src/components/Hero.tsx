"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import FadeIn from "./FadeIn";
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

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const orbScale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  const orbOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const floatingY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-gradient-to-br from-muted via-white to-muted"
      />
      <motion.div
        style={{ scale: orbScale, opacity: orbOpacity }}
        className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl animate-pulse-soft"
      />
      <motion.div
        style={{ scale: orbScale, opacity: orbOpacity }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-3xl animate-pulse-soft"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <FadeIn duration={0.8}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8">
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-accent"
                />
                <span className="text-sm font-medium text-primary/70">
                  {t(h.badge)}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.15} duration={0.9} distance={40}>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-primary leading-[1.1] tracking-tight">
                {t(h.headlineMain)}
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
                  className="block text-accent mt-2"
                >
                  {t(h.headlineAccent)}
                </motion.span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3} duration={0.8}>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
                {t(h.description)}
              </p>
            </FadeIn>

            <FadeIn delay={0.45}>
              <div className="flex flex-wrap gap-4 mt-10">
                <motion.a
                  href="#applications"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-primary text-white text-sm sm:text-base font-medium rounded-full hover:bg-primary/90 transition-colors hover:shadow-xl hover:shadow-primary/20"
                >
                  {t(h.ctaPrimary)}
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={18} />
                  </motion.span>
                </motion.a>
                <motion.a
                  href="#display"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 border border-border text-primary text-sm sm:text-base font-medium rounded-full hover:bg-muted transition-colors hover:border-accent/30"
                >
                  {t(h.ctaSecondary)}
                </motion.a>
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="grid grid-cols-3 mt-12 pt-8 border-t border-border/60">
                {[
                  { title: h.statSteelTitle, sub: h.statSteelSub },
                  { title: h.statModularTitle, sub: h.statModularSub },
                  { title: h.statAuTitle, sub: h.statAuSub },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className={`text-center sm:text-left ${
                      i > 0 ? "border-l border-border/60" : ""
                    }`}
                  >
                    <p className="text-lg sm:text-2xl font-bold text-primary">
                      {t(stat.title)}
                    </p>
                    <p className="text-[11px] sm:text-sm text-gray-500 mt-0.5">
                      {t(stat.sub)}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3} direction="left" distance={50} duration={1}>
            <motion.div style={{ y: imageY }} className="relative">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white/80 backdrop-blur flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500">
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
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  {[h.tagSteel, h.tagPrefab, h.tagModular].map((tag, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + i * 0.15 }}
                      className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-primary/70"
                    >
                      {t(tag)}
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                style={{ y: floatingY }}
                className="hidden sm:block absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl shadow-black/5 border border-border/60 animate-float"
              >
                <p className="text-xs text-gray-400 font-medium">
                  {t(h.floatingLabel)}
                </p>
                <p className="text-lg font-bold text-primary mt-0.5">
                  {t(h.floatingTitle)}
                </p>
                <p className="text-xs text-gray-500">{t(h.floatingDesc)}</p>
              </motion.div>

              <div className="sm:hidden mt-4 bg-white rounded-2xl p-4 shadow-lg shadow-black/5 border border-border/60">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400 font-medium">
                      {t(h.floatingLabel)}
                    </p>
                    <p className="text-base font-bold text-primary mt-0.5">
                      {t(h.floatingTitle)}
                    </p>
                  </div>
                  <p className="text-xs text-gray-500">{t(h.floatingDesc)}</p>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="text-gray-300" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
