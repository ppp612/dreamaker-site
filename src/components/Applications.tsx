"use client";

import {
  Home,
  Building2,
  LayoutGrid,
  Warehouse,
  Package,
  Settings,
  LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import FadeIn, { StaggerContainer, StaggerItem } from "./FadeIn";
import { useLanguage } from "@/i18n/LanguageContext";
import translations from "@/i18n/translations";

const appIcons: LucideIcon[] = [
  Home,
  Building2,
  LayoutGrid,
  Warehouse,
  Package,
  Settings,
];

export default function Applications() {
  const { t } = useLanguage();
  const a = translations.applications;

  return (
    <section id="applications" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeIn>
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
              {t(a.label)}
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
              {t(a.title)}
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              {t(a.description)}
            </p>
          </FadeIn>
        </div>

        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.1}
        >
          {a.items.map((app, i) => {
            const Icon = appIcons[i];
            return (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="group relative bg-muted rounded-2xl p-7 border border-border/40 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 h-full"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                      <Icon
                        size={22}
                        className="text-accent"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-accent/70 bg-accent/8 px-3 py-1 rounded-full">
                      {t(app.tag)}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {t(app.title)}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {t(app.description)}
                  </p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <p className="text-center mt-10 text-sm text-gray-400 max-w-2xl mx-auto">
            {t(a.disclaimer)}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
