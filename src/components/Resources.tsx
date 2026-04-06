"use client";

import { FileText, BookOpen, Users, Download, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import FadeIn, { StaggerContainer, StaggerItem } from "./FadeIn";
import { useLanguage } from "@/i18n/LanguageContext";
import translations from "@/i18n/translations";

const resourceIcons: LucideIcon[] = [FileText, BookOpen, Users];

export default function Resources() {
  const { t } = useLanguage();
  const r = translations.resources;

  return (
    <section id="resources" className="py-24 lg:py-32 bg-muted relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeIn>
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
              {t(r.label)}
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
              {t(r.title)}
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              {t(r.description)}
            </p>
          </FadeIn>
        </div>

        <StaggerContainer
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          staggerDelay={0.12}
        >
          {r.items.map((resource, i) => {
            const Icon = resourceIcons[i];
            return (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="group bg-white rounded-2xl p-7 border border-border/40 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 h-full flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-5 group-hover:bg-accent/10 group-hover:scale-110 transition-all duration-300">
                    <Icon
                      size={22}
                      className="text-accent"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {t(resource.title)}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">
                    {t(resource.description)}
                  </p>
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
                  >
                    <Download size={16} />
                    {t(resource.button)}
                  </motion.button>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
