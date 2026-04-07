"use client";

import { useState, useRef, FormEvent } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/i18n/LanguageContext";
import translations from "@/i18n/translations";
import { submitEnquiry } from "@/lib/api";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const { t } = useLanguage();
  const c = translations.contact;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = formRef.current;
    if (!form) return;

    const data = new FormData(form);
    const stage = data.get("stage") as string;
    const messageBody = data.get("message") as string;
    const fullMessage = stage
      ? `[Project Stage: ${stage}]\n\n${messageBody}`
      : messageBody;

    try {
      await submitEnquiry({
        name: data.get("name") as string,
        email: data.get("email") as string,
        phone: (data.get("phone") as string) || "",
        role: data.get("role") as string,
        location: "",
        message: fullMessage,
      });
      setSubmitted(true);
    } catch {
      setError(t(c.formError));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: editorial text */}
          <div className="flex flex-col justify-center">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-primary tracking-tight leading-[1.15]">
                {t(c.title)}
              </h2>
            </FadeIn>
            <FadeIn delay={0.12}>
              <p className="mt-6 text-base sm:text-lg text-gray-500 leading-relaxed max-w-md">
                {t(c.description)}
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="mt-10 space-y-2 text-sm text-gray-400">
                <p>{t(c.locationValue)}</p>
                <p>info@dreamaker.com.au</p>
                <p>+61 2 0000 0000</p>
              </div>
            </FadeIn>
          </div>

          {/* Right: form */}
          <FadeIn delay={0.15} direction="left" distance={40}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-muted rounded-3xl p-8 sm:p-12 flex items-center justify-center min-h-[400px]"
                >
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="w-14 h-14 mx-auto mb-5 rounded-full bg-accent/10 flex items-center justify-center"
                    >
                      <CheckCircle size={24} className="text-accent" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-primary mb-2">{t(c.thankYouTitle)}</h3>
                    <p className="text-gray-500 max-w-xs mx-auto text-sm">{t(c.thankYouMessage)}</p>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="bg-muted rounded-3xl p-6 sm:p-8 lg:p-10"
                >
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        {t(c.formName)}
                      </label>
                      <input
                        name="name"
                        type="text"
                        required
                        placeholder={t(c.formNamePlaceholder)}
                        className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm text-primary placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/30 transition"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">
                          {t(c.formEmail)}
                        </label>
                        <input
                          name="email"
                          type="email"
                          required
                          placeholder={t(c.formEmailPlaceholder)}
                          className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm text-primary placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/30 transition"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">
                          {t(c.formPhone)}
                        </label>
                        <input
                          name="phone"
                          type="tel"
                          placeholder={t(c.formPhonePlaceholder)}
                          className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm text-primary placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/30 transition"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">
                          {t(c.formRole)}
                        </label>
                        <select
                          name="role"
                          required
                          defaultValue=""
                          className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 transition"
                        >
                          <option value="" disabled>{t(c.formRolePlaceholder)}</option>
                          {c.formRoleOptions.map((opt, i) => (
                            <option key={i} value={opt.value}>{t(opt)}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">
                          {t(c.formStage)}
                        </label>
                        <select
                          name="stage"
                          defaultValue=""
                          className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 transition"
                        >
                          <option value="" disabled>{t(c.formStagePlaceholder)}</option>
                          {c.formStageOptions.map((opt, i) => (
                            <option key={i} value={opt.value}>{t(opt)}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        {t(c.formMessage)}
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        required
                        placeholder={t(c.formMessagePlaceholder)}
                        className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm text-primary placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/30 transition resize-none"
                      />
                    </div>

                    {error && (
                      <p className="text-sm text-red-500 text-center">{error}</p>
                    )}

                    <motion.button
                      type="submit"
                      disabled={submitting}
                      whileHover={submitting ? {} : { y: -1 }}
                      whileTap={submitting ? {} : { scale: 0.99 }}
                      className="w-full py-3.5 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-primary/15 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <Loader2 size={16} className="animate-spin" />
                      ) : (
                        <Send size={16} />
                      )}
                      {submitting ? t(c.formSubmitting) : t(c.formSubmit)}
                    </motion.button>

                    <p className="text-xs text-gray-400 text-center">{t(c.formNote)}</p>
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
