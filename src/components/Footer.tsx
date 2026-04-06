"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/i18n/LanguageContext";
import translations from "@/i18n/translations";

export default function Footer() {
  const { t } = useLanguage();
  const f = translations.footer;

  const navGroups = [
    {
      title: t(f.groupCompany),
      links: [
        { label: t(f.companyLinks.about), href: "#about" },
        { label: t(f.companyLinks.applications), href: "#applications" },
        { label: t(f.companyLinks.whySteel), href: "#why-steel" },
        { label: t(f.companyLinks.services), href: "#services" },
      ],
    },
    {
      title: t(f.groupResources),
      links: [
        { label: t(f.resourceLinks.productSummary), href: "#resources" },
        { label: t(f.resourceLinks.capabilityStatement), href: "#resources" },
        { label: t(f.resourceLinks.builderGuide), href: "#resources" },
        { label: t(f.resourceLinks.displayConcept), href: "#display" },
      ],
    },
    {
      title: t(f.groupConnect),
      links: [
        { label: t(f.connectLinks.contactUs), href: "#contact" },
        { label: t(f.connectLinks.requestInfo), href: "#contact" },
        { label: t(f.connectLinks.partnerWithUs), href: "#contact" },
      ],
    },
  ];

  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">D</span>
                </div>
                <span className="font-semibold text-white tracking-tight">
                  DREAMAKER PTY LTD
                </span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                {t(f.description)}
              </p>
              <div className="mt-6 space-y-2 text-sm text-white/40">
                <p>{t(f.location)}</p>
                <p>info@dreamaker.com.au</p>
                <p>+61 2 0000 0000</p>
              </div>
            </div>

            {navGroups.map((group) => (
              <div key={group.title}>
                <p className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-4">
                  {group.title}
                </p>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 3 }}
                        className="text-sm text-white/40 hover:text-accent transition-colors inline-block"
                      >
                        {link.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">{t(f.copyright)}</p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-white/30 hover:text-white/50 transition-colors duration-300"
            >
              {t(f.privacy)}
            </a>
            <a
              href="#"
              className="text-xs text-white/30 hover:text-white/50 transition-colors duration-300"
            >
              {t(f.terms)}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
