import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importa a versão unificada dos lexicons
import translations from './locales/index.lexicon';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      'pt-BR': { translation: translations['pt-BR'] },
      'en-US': { translation: translations['en-US'] },
    },
    lng: 'pt-BR',
    fallbackLng: 'en-US',
    interpolation: {
      escapeValue: false, // react já faz a proteção contra XSS
    },
  });

export default i18n;
