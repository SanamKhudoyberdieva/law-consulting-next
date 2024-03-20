import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';
import { Services } from '@/src/types/home';

const ServicesSlider = ({ serviceData }: { serviceData: Services }) => {

  function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
      <button
        className="slick-arrow slick-next slick-next slick-arrow es-black"
        type="button"
        onClick={onClick}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.43 5.93018L20.5 12.0002L14.43 18.0702" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M3.49996 12H20.33" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    );
  }

  function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
      <button
        className="slick-arrow slick-prev slick-disabled slick-prev slick-arrow es-black"
        type="button"
        onClick={onClick}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.57 5.93018L3.5 12.0002L9.57 18.0702" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M20.5 12H3.67004" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    );
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
    nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings} className="lc-service-slick">
      {
        serviceData.data && serviceData.data.map((x) => (
          <div className="lc-service-wrapper" key={"service-item-id-" + x.id}>
            <div className="lc-service-img">
              <Link href={`/services/${x.id}`}>
                <Image
                  width={300}
                  height={500}
                  src={x.image}
                  className="img-fluid"
                  alt="service"
                />
              </Link>
            </div>
            <div className="lc-service-title-slick">
              <Link href={`/services/${x.id}`}>{x.title_ru}</Link>
            </div>
          </div>
        ))
      }
    </Slider>
  )
}

export default ServicesSlider;