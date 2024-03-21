import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Carousel } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Banner } from '../types/home';
import { getSubtitle, getTitle } from '@/utils/custom';

const CarouselMain = ({ carouselData }: { carouselData: Banner[] | null }) => {
  const { t, i18n } = useTranslation();

  const CustomPrevIcon = () => (
    <button className="carousel-control-prev" type="button">
      <span className="carousel-control-prev-icon"></span>
      <span className="visually-hidden">Previous</span>
    </button>
  );

  const CustomNextIcon = () => (
    <button className="carousel-control-next" type="button">
      <span className="carousel-control-next-icon"></span>
      <span className="visually-hidden">Next</span>
    </button>
  );

  if (!carouselData) return

  return (
    <div className="position-relative">
      <Carousel
        prevIcon={<CustomPrevIcon />}
        nextIcon={<CustomNextIcon />}
        className="carousel slide"
      >
        <div className="carousel-inner">
          {
            carouselData && carouselData.map((x) => (
              <div className="carousel-item active" key={"carousel-item-id-" + x.id}>
                <Image
                  src={x.desktop_image}
                  width={1336}
                  height={500}
                  className="img-fluid w-100"
                  alt="banner"
                />
                <div className="carousel-backdrop">
                  <div className="lc-carousel-content container" data-aos="fade-right">
                    <div className="carousel-title">{getTitle(x.title_ru, i18n.language)}</div>
                    <div className="carousel-info">
                      {getSubtitle(x.subtitle_ru, i18n.language)}
                    </div>
                    {x.more_details_link && <Link href={`${x.more_details_link}`} className="lc-btn-dark-transparent lc-color-reverse">
                      <span>{t('more-details')}</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.61999 3.95331L13.6667 7.99998L9.61999 12.0466" stroke="white" strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" stroke-linejoin="round" />
                        <path d="M2.33334 8H13.5533" stroke="white" strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" stroke-linejoin="round" />
                      </svg>
                    </Link>}
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </Carousel>
    </div>
  )
}

export default CarouselMain;