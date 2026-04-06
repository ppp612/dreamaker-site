"use client";

import { Sofa, Bed, CookingPot, Bath, LucideIcon } from "lucide-react";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/i18n/LanguageContext";
import translations from "@/i18n/translations";

const spaceIcons: LucideIcon[] = [Sofa, Bed, CookingPot, Bath];
const gradients = [
  "from-amber-50 to-orange-50",
  "from-blue-50 to-indigo-50",
  "from-emerald-50 to-teal-50",
  "from-violet-50 to-purple-50",
];

export default function InteriorShowcase() {
  const { t } = useLanguage();
  const n = translations.interior;

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeIn>
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
              {t(n.label)}
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
              {t(n.title)}
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              {t(n.description)}
            </p>
          </FadeIn>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {n.spaces.map((space, i) => {
            const Icon = spaceIcons[i];
            return (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="group cursor-pointer">
                  <div
                    className={`aspect-[3/4] rounded-2xl bg-gradient-to-br ${gradients[i]} overflow-hidden relative border border-border/30 group-hover:shadow-lg transition-all duration-300`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-white/80 backdrop-blur flex items-center justify-center shadow-sm">
                          <Icon
                            size={28}
                            className="text-gray-400"
                            strokeWidth={1.5}
                          />
                        </div>
                        <p className="text-gray-400 text-xs font-medium">
                          {t(n.imagePlaceholder)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-base font-semibold text-primary">
                      {t(space.title)}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {t(space.description)}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
