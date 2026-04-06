"use client";

import { Bed, Bath, Maximize2, Sun, LucideIcon } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import FadeIn, { StaggerContainer, StaggerItem } from "./FadeIn";
import { useLanguage } from "@/i18n/LanguageContext";
import translations from "@/i18n/translations";

const statIcons: LucideIcon[] = [Maximize2, Bed, Bath, Sun];

export default function DisplayConcept() {
  const { t } = useLanguage();
  const d = translations.display;
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const badgeScale = useTransform(scrollYProgress, [0.2, 0.5], [0.9, 1]);

  return (
    <section
      ref={sectionRef}
      id="display"
      className="py-24 lg:py-32 bg-muted relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn direction="right" distance={50} duration={0.9}>
            <motion.div style={{ y: imageY }} className="relative">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary/5 via-gray-100 to-accent/5 overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-3xl bg-white/80 backdrop-blur flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500">
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

              <motion.div
                style={{ scale: badgeScale }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-5 py-3 shadow-xl shadow-black/5 border border-border/60 animate-float-delayed"
              >
                <p className="text-xs font-semibold text-accent uppercase tracking-wider">
                  {t(d.floatingLabel)}
                </p>
                <p className="text-sm font-bold text-primary mt-0.5">
                  {t(d.floatingTitle)}
                </p>
              </motion.div>
            </motion.div>
          </FadeIn>

          <div>
            <FadeIn>
              <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
                {t(d.label)}
              </p>
            </FadeIn>
            <FadeIn delay={0.1} distance={35}>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight whitespace-pre-line">
                {t(d.title)}
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                {t(d.description)}
              </p>
            </FadeIn>

            <StaggerContainer
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10"
              staggerDelay={0.1}
            >
              {d.stats.map((stat, i) => {
                const Icon = statIcons[i];
                const value =
                  typeof stat.value === "string" ? stat.value : t(stat.value);
                return (
                  <StaggerItem key={i}>
                    <motion.div
                      whileHover={{
                        y: -4,
                        scale: 1.03,
                        transition: { duration: 0.25 },
                      }}
                      className="bg-white rounded-2xl p-5 border border-border/40 text-center hover:shadow-lg hover:border-accent/20 transition-all duration-300"
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
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            <FadeIn delay={0.4}>
              <div className="flex flex-wrap gap-4 mt-8">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-colors hover:shadow-xl hover:shadow-primary/20"
                >
                  {t(d.ctaPrimary)}
                </motion.a>
                <motion.a
                  href="#resources"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-primary font-medium rounded-full hover:bg-white transition-colors hover:border-accent/30"
                >
                  {t(d.ctaSecondary)}
                </motion.a>
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
