import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import {
  commonEN,
  commonTH,
  forumEH,
  forumTH,
  landingEN,
  landingTH,
  leaderboardEN,
  leaderboardTH,
  quizEN,
  quizTH,
} from '../locales';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpBackend)
  .init({
    lng: 'th', // Set the default language
    fallbackLng: 'th', // Set the fallback language if translation is missing
    // debug: true,
    interpolation: {
      escapeValue: false, // React handles escaping
    },
    detection: {
      order: ['querystring', 'path'],
      lookupQuerystring: 'lng', // Name of the query string parameter
      lookupFromPathIndex: 0, // Path segment index to check for language
    },
    resources: {
      en: {
        common: commonEN,
        landing: landingEN,
        forum: forumEH,
        quiz: quizEN,
        leaderboard: leaderboardEN,
      },
      th: {
        common: commonTH,
        landing: landingTH,
        forum: forumTH,
        quiz: quizTH,
        leaderboard: leaderboardTH,
      },
    },
  });

export default i18n;
