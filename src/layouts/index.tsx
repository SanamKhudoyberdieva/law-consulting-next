import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import translationEn from '../locales/en/translation.json';
import translationRu from '../locales/ru/translation.json';
import translationUz from '../locales/uz/translation.json';
import { useDispatch, useSelector } from "react-redux";
import { initReactI18next } from "react-i18next";
import i18n from '../locales/i18n';
import { RootState } from '../store/store';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import { General } from '../types/general';
import { setHome } from '../store/slices/homeSlice';
import { setGeneral } from '../store/slices/generalSlice';

const resources = {
  en: { translation: translationEn },
  ru: { translation: translationRu },
  uz: { translation: translationUz }
};

const MainLayout = ({ children }: any) => {
  let { lang } = useSelector((state: RootState) => state.language);
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const data = useSelector((state: RootState) => state.generalReducer)
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

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/general?lang=${i18n.language}`);
      dispatch(setGeneral(response.data));
    } catch (err) {
      if (err instanceof Error && err.message) {
        setError(err.message);
      } else {
        setError('An error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchHome = async () => {
    try {
      const response = await axios.get(`/api/home?lang=${i18n.language}`);
      dispatch(setHome(response.data));
    } catch (err) {
      if (err instanceof Error && err.message) {
        setError(err.message);
      } else {
        setError('An error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHome();
    fetchData();
  }, []);

  if (!data) return
  return (
    <div lang={lang}>
      <Header header={data.header} />
      <Navbar />
      {children}
      <Footer header={data.header} footer={data.footer} />
    </div>
  )
}

export default MainLayout;