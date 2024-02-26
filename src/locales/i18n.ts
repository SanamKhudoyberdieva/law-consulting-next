import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEn from '../locales/en/translation.json';
import translationRu from '../locales/ru/translation.json';
import translationUz from '../locales/uz/translation.json';

const resources = {
  en: { translation: translationEn },
  ru: { translation: translationRu },
  uz: { translation: translationUz }
};
  
let initialLanguage = (typeof window !== 'undefined') ? localStorage.getItem('language') || 'uz' : 'uz';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: initialLanguage,
    interpolation: {
      escapeValue: false
    }
});
  
export default i18n;