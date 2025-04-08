import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translations from './locales/translations';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      "pt-BR": { translation: translations["pt-BR"] },
      "en-US": { translation: translations["en-US"] }
    },
    lng: "pt-BR",            // idioma padrão
    fallbackLng: "en-US",    // fallback
    interpolation: {
      escapeValue: false     // não escapar HTML
    }
  });  

export default i18n;
