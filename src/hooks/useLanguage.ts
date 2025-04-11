// hooks/useLanguage.ts
import { useLanguageStore } from "../stores/language.ts";
import { useI18n } from 'vue-i18n';

export const useLanguage = () => {
  const languageStore = useLanguageStore();
  const { locale } = useI18n();

  const changeLanguage = (lang: string) => {
    languageStore.setLang(lang);
    locale.value = lang;
  };

  return {
    lang: languageStore.lang,
    changeLanguage
  };
};
