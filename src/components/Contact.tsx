"use client";

import { useState, FormEvent } from "react";
import { Send, MapPin, Mail, Phone, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/i18n/LanguageContext";
import translations from "@/i18n/translations";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();
  const c = translations.contact;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <FadeIn>
              <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
                {t(c.label)}
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight whitespace-pre-line">
                {t(c.title)}
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                {t(c.description)}
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-10 space-y-5">
                {[
                  {
                    icon: MapPin,
                    label: c.locationLabel,
                    value: t(c.locationValue),
                  },
                  {
                    icon: Mail,
                    label: c.emailLabel,
                    value: "info@dreamaker.com.au",
                  },
                  {
                    icon: Phone,
                    label: c.phoneLabel,
                    value: "+61 2 0000 0000",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors duration-300">
                      <item.icon
                        size={18}
                        className="text-accent"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary">
                        {t(item.label)}
                      </p>
                      <p className="text-sm text-gray-500">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} direction="left" distance={40}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="bg-muted rounded-3xl p-8 sm:p-10 border border-border/40 flex items-center justify-center min-h-[300px] sm:min-h-[500px]"
                >
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.2,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center"
                    >
                      <CheckCircle size={28} className="text-accent" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {t(c.thankYouTitle)}
                    </h3>
                    <p className="text-gray-500 max-w-sm">
                      {t(c.thankYouMessage)}
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="bg-muted rounded-3xl p-6 sm:p-8 lg:p-10 border border-border/40"
                >
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        {t(c.formName)}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={t(c.formNamePlaceholder)}
                        className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm text-primary placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/40 transition-all duration-300"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">
                          {t(c.formEmail)}
                        </label>
                        <input
                          type="email"
                          required
                          placeholder={t(c.formEmailPlaceholder)}
                          className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm text-primary placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/40 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">
                          {t(c.formPhone)}
                        </label>
                        <input
                          type="tel"
                          placeholder={t(c.formPhonePlaceholder)}
                          className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm text-primary placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/40 transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        {t(c.formRole)}
                      </label>
                      <select
                        required
                        defaultValue=""
                        className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/40 transition-all duration-300"
                      >
                        <option value="" disabled>
                          {t(c.formRolePlaceholder)}
                        </option>
                        {c.formRoleOptions.map((option, i) => (
                          <option key={i} value={option.en}>
                            {t(option)}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        {t(c.formLocation)}
                      </label>
                      <input
                        type="text"
                        placeholder={t(c.formLocationPlaceholder)}
                        className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm text-primary placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/40 transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        {t(c.formMessage)}
                      </label>
                      <textarea
                        rows={4}
                        placeholder={t(c.formMessagePlaceholder)}
                        className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm text-primary placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/40 transition-all duration-300 resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.01, y: -1 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full py-3.5 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 flex items-center justify-center gap-2"
                    >
                      <Send size={16} />
                      {t(c.formSubmit)}
                    </motion.button>

                    <p className="text-xs text-gray-400 text-center">
                      {t(c.formNote)}
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
