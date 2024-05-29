import { createI18n } from "vue-i18n";
import ZH from "./locales/zh.json";
import EN from "./locales/en.json";

export const i18n = createI18n({
  locale: navigator.language,
  fallbackLocale: "en",
  messages: {
    en: EN,
    'zh-CN': ZH,
  },
});
