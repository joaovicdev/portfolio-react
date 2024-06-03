import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import pt from './translations/pt-br/translations.json';
import en from './translations/en/translations.json';

const resources = {
  pt: {
    translation: pt,
  },
  en: {
    translation: en,
  }
};

i18next.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: 'pt',
  resources,
});

export default i18next;
