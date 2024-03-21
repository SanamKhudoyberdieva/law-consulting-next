import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';
import { NewsList } from '@/src/types/home';

const NewsSlider = ({ news }: { news: NewsList | null }) => {
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

    if (!news) return

    return (
        <Slider {...settings} className="lc-news-slick" data-aos="fade-up">
            {
                news && news.data && news.data.map((x) => (
                    <div className="lc-news-wrapper">
                        <div className="lc-news-img">
                            <Link href={`/news/${x.id}`}>
                                <Image
                                    src={x.image}
                                    width={300}
                                    height={400}
                                    className="img-fluid w-100 lazy"
                                    alt="news"
                                />
                            </Link>
                        </div>
                        <div className="lc-news-date">{x.created_at}</div>
                        <h4 className="lc-news-title">
                            <Link href={`/news/${x.id}`}>
                                {x.title_ru}
                            </Link>
                        </h4>
                    </div>
                ))
            }
        </Slider>
    )
}

export default NewsSlider;