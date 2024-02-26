import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

const ClientsSlider = () => {

    function SampleNextArrow(props: { onClick: any; }) {
        const { onClick } = props;
        return (
            <button
                className="slick-arrow slick-next slick-next slick-arrow es-black"
                type="button"
                onClick={onClick}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.43 5.93018L20.5 12.0002L14.43 18.0702" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3.49996 12H20.33" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        );
    }
    
    function SamplePrevArrow(props: { onClick: any; }) {
        const { onClick } = props;
        return (
            <button
                className="slick-arrow slick-prev slick-disabled slick-prev slick-arrow es-black"
                type="button"
                onClick={onClick}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.57 5.93018L3.5 12.0002L9.57 18.0702" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20.5 12H3.67004" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        );
    }
    
    const settings = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: <SamplePrevArrow onClick={undefined} />,
        nextArrow: <SampleNextArrow onClick={undefined} />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
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
        <Slider {...settings} className="lc-clients-slick">
            <div className="lc-clients-wrapper">
                <div className="lc-clients-img">
                    <Image 
                        src={require("../../assets/img/cl_logo1.png")} 
                        className="img-fluid" 
                        alt="service" 
                    />
                </div>
            </div>
            <div className="lc-clients-wrapper">
                <div className="lc-clients-img">
                    <Image 
                        src={require("../../assets/img/cl_logo1.png")} 
                        className="img-fluid" 
                        alt="service" 
                    />
                </div>
            </div>
            <div className="lc-clients-wrapper">
                <div className="lc-clients-img">
                    <Image 
                        src={require("../../assets/img/cl_logo1.png")} 
                        className="img-fluid" 
                        alt="service" 
                    />
                </div>
            </div>
            <div className="lc-clients-wrapper">
                <div className="lc-clients-img">
                    <Image 
                        src={require("../../assets/img/cl_logo1.png")} 
                        className="img-fluid" 
                        alt="service" 
                    />
                </div>
            </div>
            <div className="lc-clients-wrapper">
                <div className="lc-clients-img">
                    <Image 
                        src={require("../../assets/img/cl_logo1.png")} 
                        className="img-fluid" 
                        alt="service" 
                    />
                </div>
            </div>
            <div className="lc-clients-wrapper">
                <div className="lc-clients-img">
                    <Image 
                        src={require("../../assets/img/cl_logo1.png")} 
                        className="img-fluid" 
                        alt="service" 
                    />
                </div>
            </div>
            <div className="lc-clients-wrapper">
                <div className="lc-clients-img">
                    <Image 
                        src={require("../../assets/img/cl_logo1.png")} 
                        className="img-fluid" 
                        alt="service" 
                    />
                </div>
            </div>
        </Slider>
    )
}

export default ClientsSlider;