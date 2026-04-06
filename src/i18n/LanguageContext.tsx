"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import type { Locale } from "./translations";

interface LanguageContextValue {
  locale: Locale;
  toggleLocale: () => void;
  t: (obj: Record<string, string> | { en: string; zh: string }) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "en" ? "zh" : "en"));
  }, []);

  const t = useCallback(
    (obj: Record<string, string> | { en: string; zh: string }) => {
      return (obj as Record<string, string>)[locale] ?? obj.en ?? "";
    },
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ locale, toggleLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
