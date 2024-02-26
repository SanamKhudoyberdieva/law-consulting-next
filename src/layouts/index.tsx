import Link from 'next/link';
import React, { useEffect } from 'react';

import translationEn from '../locales/en/translation.json';
import translationRu from '../locales/ru/translation.json';
import translationUz from '../locales/uz/translation.json';
import { useSelector } from "react-redux";
import { initReactI18next } from "react-i18next";
import i18n from '../locales/i18n';
import { RootState } from '../store/store';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const resources = {
  en: { translation: translationEn },
  ru: { translation: translationRu },
  uz: { translation: translationUz }
};

const MainLayout = ({ children }: any) => {
  let { lang } = useSelector((state: RootState) => state.language);

  const initialLanguage = useSelector((state: RootState) => state.language.lang)

  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: initialLanguage,
      interpolation: {
        escapeValue: false
      }
    });

  return (
    <html lang={lang}>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </html>
  )
}

export default MainLayout;