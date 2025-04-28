"use client"

// lib/i18n.ts
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import enCommon from '@/public/locales/en/common.json';
import enHome from '@/public/locales/en/home.json';
import enAbout from '@/public/locales/en/about.json';
import enForm from '@/public/locales/en/form.json';

import esCommon from '@/public/locales/es/common.json';
import esHome from '@/public/locales/es/home.json';
import esAbout from '@/public/locales/es/about.json';
import esForm from '@/public/locales/es/form.json';

// Define the translations
const resources = {
  en: { common: enCommon, about: enAbout, home: enHome, form: enForm },
  es: { common: esCommon, about: esAbout, home: esHome, form: esForm  },
};

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng:  localStorage.getItem("lang") || "en", 
    fallbackLng: "en", 
    interpolation: {
      escapeValue: false,
    },
  });

  export default i18next
