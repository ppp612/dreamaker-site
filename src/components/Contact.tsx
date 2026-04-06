"use client";

import { useState, FormEvent } from "react";
import { Send, MapPin, Mail, Phone } from "lucide-react";
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
    <section id="contact" className="py-24 lg:py-32 bg-white">
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
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center shrink-0">
                    <MapPin
                      size={18}
                      className="text-accent"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">
                      {t(c.locationLabel)}
                    </p>
                    <p className="text-sm text-gray-500">
                      {t(c.locationValue)}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center shrink-0">
                    <Mail
                      size={18}
                      className="text-accent"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">
                      {t(c.emailLabel)}
                    </p>
                    <p className="text-sm text-gray-500">
                      info@dreamaker.com.au
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center shrink-0">
                    <Phone
                      size={18}
                      className="text-accent"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">
                      {t(c.phoneLabel)}
                    </p>
                    <p className="text-sm text-gray-500">+61 2 0000 0000</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} direction="left">
            {submitted ? (
              <div className="bg-muted rounded-3xl p-10 border border-border/40 flex items-center justify-center min-h-[500px]">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <Send size={24} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {t(c.thankYouTitle)}
                  </h3>
                  <p className="text-gray-500 max-w-sm">
                    {t(c.thankYouMessage)}
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-muted rounded-3xl p-8 lg:p-10 border border-border/40"
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
                      className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm text-primary placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/40 transition-all"
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
                        className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm text-primary placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/40 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        {t(c.formPhone)}
                      </label>
                      <input
                        type="tel"
                        placeholder={t(c.formPhonePlaceholder)}
                        className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm text-primary placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/40 transition-all"
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
                      className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/40 transition-all"
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
                      className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm text-primary placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/40 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      {t(c.formMessage)}
                    </label>
                    <textarea
                      rows={4}
                      placeholder={t(c.formMessagePlaceholder)}
                      className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm text-primary placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/40 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    {t(c.formSubmit)}
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    {t(c.formNote)}
                  </p>
                </div>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
