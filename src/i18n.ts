import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importa o arquivo unificado que junta tudo
import translations from './locales/index';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      "pt-BR": { translation: translations["pt-BR"] },
      "en-US": { translation: translations["en-US"] },
    },
    lng: "pt-BR",
    fallbackLng: "en-US",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
