import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import CarouselMain from '@/src/components/CarouselMain';
import NewsSlider from '@/src/components/Sliders/NewsSlider';
import ClientsSlider from '@/src/components/Sliders/ClientsSlider';
import ServicesSlider from '@/src/components/Sliders/ServicesSlider';
import axios from 'axios';
import { HomeTypes } from '@/src/types/home';

const Home = () => {
  const { t, i18n } = useTranslation();

  const [data, setData] = useState<HomeTypes | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/home?lang=${i18n.language}`);
      setData(response.data);
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
    fetchData();
  }, []);

  console.log("data", data)
  if (!data) return
  return (
    <main>
      <CarouselMain carouselData={data.banners} />
      <section className="lc-services-section" id="services" data-aos="fade-up">
        <div className="container">
          <h2 className="lc-section-title">{t('services')}</h2>
        </div>
        <ServicesSlider serviceData={data.services} />
      </section>

      <section className="lc-about-section">
        <div className="lc-page-row">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="lc-about-content">
                  <h2 className="lc-section-title text-white text-start" data-aos="fade-right">
                    {t('about-company')}
                  </h2>
                  <div className="lc-about-desc" data-aos="fade-right">
                    {data.about_company.text_ru}
                  </div>
                  <Link href="/about" className="lc-btn-dark-transparent lc-color-reverse" data-aos="fade-right">
                    <span>{t('more-details')}</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.43 5.93005L20.5 12.0001L14.43 18.0701" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M3.49996 12H20.33" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="col-md-6"></div>
            </div>
          </div>
          <div className="lc-row-img">
            <Image src={require("../src/assets/img/bg_comp.png")} alt="company" />
          </div>
        </div>
      </section>

      <section className="lc-clients-section" data-aos="fade-up">
        <div className="container">
          <h2 className="lc-section-title">{t('clients')}</h2>
        </div>
        <ClientsSlider clients={data.clients} />
      </section>

      <section className="lc-news-section">
        <div className="container">
          <h2 className="lc-section-title" data-aos="fade-up">{t('news')}</h2>
          <NewsSlider news={data.news} />
        </div>
      </section>
    </main>
  )
}

export default Home;