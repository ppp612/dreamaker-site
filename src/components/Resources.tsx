"use client";

import { FileText, BookOpen, Users, Download, LucideIcon } from "lucide-react";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/i18n/LanguageContext";
import translations from "@/i18n/translations";

const resourceIcons: LucideIcon[] = [FileText, BookOpen, Users];

export default function Resources() {
  const { t } = useLanguage();
  const r = translations.resources;

  return (
    <section id="resources" className="py-24 lg:py-32 bg-muted">
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

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {r.items.map((resource, i) => {
            const Icon = resourceIcons[i];
            return (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="group bg-white rounded-2xl p-7 border border-border/40 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-5 group-hover:bg-accent/10 transition-colors">
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
                  <button className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dark transition-colors">
                    <Download size={16} />
                    {t(resource.button)}
                  </button>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
