"use client";

import {
  Package,
  PenTool,
  Factory,
  Truck,
  Wrench,
  CheckCircle2,
  LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import FadeIn, { StaggerContainer, StaggerItem } from "./FadeIn";
import { useLanguage } from "@/i18n/LanguageContext";
import translations from "@/i18n/translations";

const serviceIcons: LucideIcon[] = [Package, PenTool, Factory, Truck, Wrench];

export default function Services() {
  const { t } = useLanguage();
  const s = translations.services;

  return (
    <section id="services" className="py-24 lg:py-32 bg-muted relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <FadeIn>
              <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
                {t(s.label)}
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight whitespace-pre-line">
                {t(s.title)}
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                {t(s.description)}
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-8 p-5 bg-white rounded-2xl border border-border/40">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-accent mt-0.5 shrink-0"
                  />
                  <p className="text-sm text-gray-500 leading-relaxed">
                    <span className="font-medium text-primary">
                      {t(s.noteLabel)}
                    </span>{" "}
                    {t(s.noteText)}
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="hidden lg:flex items-center gap-3 mt-8">
                {serviceIcons.map((Icon, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                    className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-border/40"
                  >
                    <Icon size={18} className="text-accent/60" strokeWidth={1.5} />
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>

          <StaggerContainer className="space-y-4" staggerDelay={0.1}>
            {s.items.map((service, i) => {
              const Icon = serviceIcons[i];
              return (
                <StaggerItem key={i} direction="left" distance={30}>
                  <motion.div
                    whileHover={{
                      x: 6,
                      transition: { duration: 0.25 },
                    }}
                    className="group bg-white rounded-2xl p-6 border border-border/40 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500"
                  >
                    <div className="flex items-start gap-5">
                      <div className="w-11 h-11 rounded-xl bg-muted flex items-center justify-center group-hover:bg-accent/10 group-hover:scale-110 transition-all duration-300 shrink-0">
                        <Icon
                          size={20}
                          className="text-accent"
                          strokeWidth={1.5}
                        />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-primary mb-1 group-hover:text-accent transition-colors duration-300">
                          {t(service.title)}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {t(service.description)}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
