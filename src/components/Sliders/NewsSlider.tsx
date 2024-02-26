import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';

const NewsSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
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
        <Slider {...settings} className="lc-news-slick" data-aos="fade-up">
            <div className="lc-news-wrapper">
                <div className="lc-news-img">
                    <Link href="/">
                        <Image 
                            src={require("../../assets/img/bg_news1.jpeg")} 
                            className="img-fluid w-100 lazy" 
                            alt="news" 
                        />
                    </Link>
                </div>
                <div className="lc-news-date">18.04.2023</div>
                <h4 className="lc-news-title">
                    <Link href="/">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.
                    </Link>
                </h4>
            </div>
            <div className="lc-news-wrapper">
                <div className="lc-news-img">
                    <Link href="/">
                        <Image 
                            src={require("../../assets/img/bg_news2.webp")} 
                            className="img-fluid w-100 lazy" 
                            alt="news" 
                        />
                    </Link>
                </div>
                <div className="lc-news-date">18.04.2023</div>
                <h4 className="lc-news-title">
                    <Link href="/">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.
                    </Link>
                </h4>
            </div>
            <div className="lc-news-wrapper">
                <div className="lc-news-img">
                    <Link href="/">
                        <Image 
                            src={require("../../assets/img/bg_news3.webp")} 
                            className="img-fluid w-100 lazy" 
                            alt="news" 
                        />
                    </Link>
                </div>
                <div className="lc-news-date">18.04.2023</div>
                <h4 className="lc-news-title">
                    <Link href="/">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.
                    </Link>
                </h4>
            </div>
        </Slider>
    )
}

export default NewsSlider;