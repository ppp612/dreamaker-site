"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import translations from "@/i18n/translations";

const navItems = [
  { key: "about" as const, href: "#about" },
  { key: "applications" as const, href: "#applications" },
  { key: "displayConcept" as const, href: "#display" },
  { key: "whySteel" as const, href: "#why-steel" },
  { key: "services" as const, href: "#services" },
  { key: "resources" as const, href: "#resources" },
  { key: "contact" as const, href: "#contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { locale, toggleLocale, t } = useLanguage();
  const nav = translations.nav;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-white font-bold text-sm">D</span>
          </div>
          <span className="font-semibold text-primary tracking-tight text-sm lg:text-base">
            DREAMAKER
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm text-gray-600 hover:text-primary transition-colors rounded-lg hover:bg-gray-50"
            >
              {t(nav[item.key])}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleLocale}
            className="px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-primary border border-border/60 rounded-full hover:bg-gray-50 transition-all"
          >
            <span className={locale === "en" ? "text-primary font-semibold" : ""}>
              EN
            </span>
            <span className="mx-1.5 text-border">|</span>
            <span className={locale === "zh" ? "text-primary font-semibold" : ""}>
              中文
            </span>
          </button>
          <a
            href="#contact"
            className="px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary/90 transition-colors"
          >
            {t(nav.getInTouch)}
          </a>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={toggleLocale}
            className="px-2.5 py-1.5 text-xs font-medium text-gray-500 hover:text-primary border border-border/60 rounded-full hover:bg-gray-50 transition-all"
          >
            <span className={locale === "en" ? "text-primary font-semibold" : ""}>
              EN
            </span>
            <span className="mx-1 text-border">|</span>
            <span className={locale === "zh" ? "text-primary font-semibold" : ""}>
              中文
            </span>
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-gray-600 hover:text-primary"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mounted && (
        <div
          className={`lg:hidden bg-white border-b border-border overflow-hidden transition-all duration-300 ${
            mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
              >
                {t(nav[item.key])}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-5 py-3 bg-primary text-white text-sm font-medium rounded-full text-center hover:bg-primary/90 transition-colors"
            >
              {t(nav.getInTouch)}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
