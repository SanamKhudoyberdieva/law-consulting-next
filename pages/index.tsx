import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import CarouselMain from '@/src/components/CarouselMain';
import NewsSlider from '@/src/components/Sliders/NewsSlider';
import ClientsSlider from '@/src/components/Sliders/ClientsSlider';
import ServicesSlider from '@/src/components/Sliders/ServicesSlider';
import axios from 'axios';

const Home = () => {
  const { t, i18n } = useTranslation();

  const [data, setData] = useState(null);
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

  return (
    <main>
      <CarouselMain />
      <section className="lc-services-section" id="services" data-aos="fade-up">
        <div className="container">
          <h2 className="lc-section-title">{t('services')}</h2>
        </div>
        <ServicesSlider />
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
                    A low company typically refers to a business or organization
                    that operates with limited resources, often characterized by
                    a small workforce, minimal capital investment, and modest
                    revenue or profits. These companies may have a simple
                    organizational structure, with few hierarchical layers and a
                    focus on hands-on management.
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
        <ClientsSlider />
      </section>

      <section className="lc-news-section">
        <div className="container">
          <h2 className="lc-section-title" data-aos="fade-up">{t('news')}</h2>
          <NewsSlider />
        </div>
      </section>
    </main>
  )
}

export default Home;