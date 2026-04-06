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
import FadeIn from "./FadeIn";
import { useLanguage } from "@/i18n/LanguageContext";
import translations from "@/i18n/translations";

const serviceIcons: LucideIcon[] = [Package, PenTool, Factory, Truck, Wrench];

export default function Services() {
  const { t } = useLanguage();
  const s = translations.services;

  return (
    <section id="services" className="py-24 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-32">
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
          </div>

          <div className="space-y-4">
            {s.items.map((service, i) => {
              const Icon = serviceIcons[i];
              return (
                <FadeIn key={i} delay={0.08 * i}>
                  <div className="group bg-white rounded-2xl p-6 border border-border/40 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
                    <div className="flex items-start gap-5">
                      <div className="w-11 h-11 rounded-xl bg-muted flex items-center justify-center group-hover:bg-accent/10 transition-colors shrink-0">
                        <Icon
                          size={20}
                          className="text-accent"
                          strokeWidth={1.5}
                        />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-primary mb-1">
                          {t(service.title)}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {t(service.description)}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
