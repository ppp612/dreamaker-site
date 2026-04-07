"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/i18n/LanguageContext";
import translations from "@/i18n/translations";

export default function Audience() {
  const { t } = useLanguage();
  const a = translations.audience;
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-16 sm:mb-20">
            {t(a.label)}
          </p>
        </FadeIn>

        <div className="max-w-4xl">
          {a.items.map((item, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <motion.div
                onHoverStart={() => setActive(i)}
                onHoverEnd={() => setActive(null)}
                className="group border-t border-border/60 last:border-b"
              >
                <a
                  href="#contact"
                  className="flex items-start sm:items-center justify-between gap-4 py-7 sm:py-8"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="text-xs text-gray-300 tabular-nums font-light shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-primary group-hover:text-accent transition-colors duration-300">
                        {t(item.title)}
                      </h3>
                    </div>

                    <AnimatePresence>
                      {active === i && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden text-sm text-gray-500 pl-8 sm:pl-12 lg:pl-14 max-w-lg"
                        >
                          <span className="block pt-3 pb-1">
                            {t(item.description)}
                          </span>
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <motion.div
                    animate={{ x: active === i ? 0 : -8, opacity: active === i ? 1 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 mt-1 sm:mt-0"
                  >
                    <ArrowRight size={20} className="text-accent" strokeWidth={1.5} />
                  </motion.div>
                </a>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
