import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

const TeamSlider = () => {
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
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <SamplePrevArrow onClick={undefined} />,
        nextArrow: <SampleNextArrow onClick={undefined} />,
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
              slidesToShow: 1.1,
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
        <Slider {...settings} className="lc-team-slick">
            <div className="lc-team-wrapper">
                <div className="lc-employee-img">
                    <Image 
                        src={require("../../assets/img/bg_team1.jpeg")} 
                        className="img-fluid" 
                        alt="team" 
                    />
                </div>
                <div className="lc-employee-down-ic">
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.65465 8.77696C7.4175 9.47045 8.5825 9.47045 9.34535 8.77696L15.1721 3.47988C16.5248 2.25019 15.6549 0 13.8268 0H2.17321C0.34515 0 -0.52479 2.25019 0.827868 3.47988L6.65465 8.77696Z" fill="#000000" />
                    </svg>
                </div>
                <div className="lc-employee-name">Хамраев Шохрух</div>
                <div className="lc-employee-role">Генеральный директор</div>
            </div>
            <div className="lc-team-wrapper">
                <div className="lc-employee-img">
                    <Image 
                        src={require("../../assets/img/bg_team1.jpeg")} 
                        className="img-fluid" 
                        alt="team" 
                    />
                </div>
                <div className="lc-employee-down-ic">
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.65465 8.77696C7.4175 9.47045 8.5825 9.47045 9.34535 8.77696L15.1721 3.47988C16.5248 2.25019 15.6549 0 13.8268 0H2.17321C0.34515 0 -0.52479 2.25019 0.827868 3.47988L6.65465 8.77696Z" fill="#000000" />
                    </svg>
                </div>
                <div className="lc-employee-name">Хамраев Шохрух</div>
                <div className="lc-employee-role">Генеральный директор</div>
            </div>
            <div className="lc-team-wrapper">
                <div className="lc-employee-img">
                    <Image 
                        src={require("../../assets/img/bg_team1.jpeg")} 
                        className="img-fluid" 
                        alt="team" 
                    />
                </div>
                <div className="lc-employee-down-ic">
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.65465 8.77696C7.4175 9.47045 8.5825 9.47045 9.34535 8.77696L15.1721 3.47988C16.5248 2.25019 15.6549 0 13.8268 0H2.17321C0.34515 0 -0.52479 2.25019 0.827868 3.47988L6.65465 8.77696Z" fill="#000000" />
                    </svg>
                </div>
                <div className="lc-employee-name">Хамраев Шохрух</div>
                <div className="lc-employee-role">Генеральный директор</div>
            </div>
            <div className="lc-team-wrapper">
                <div className="lc-employee-img">
                    <Image 
                        src={require("../../assets/img/bg_team1.jpeg")} 
                        className="img-fluid" 
                        alt="team" 
                    />
                </div>
                <div className="lc-employee-down-ic">
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.65465 8.77696C7.4175 9.47045 8.5825 9.47045 9.34535 8.77696L15.1721 3.47988C16.5248 2.25019 15.6549 0 13.8268 0H2.17321C0.34515 0 -0.52479 2.25019 0.827868 3.47988L6.65465 8.77696Z" fill="#000000" />
                    </svg>
                </div>
                <div className="lc-employee-name">Хамраев Шохрух</div>
                <div className="lc-employee-role">Генеральный директор</div>
            </div>
            <div className="lc-team-wrapper">
                <div className="lc-employee-img">
                    <Image 
                        src={require("../../assets/img/bg_team1.jpeg")} 
                        className="img-fluid" 
                        alt="team" 
                    />
                </div>
                <div className="lc-employee-down-ic">
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.65465 8.77696C7.4175 9.47045 8.5825 9.47045 9.34535 8.77696L15.1721 3.47988C16.5248 2.25019 15.6549 0 13.8268 0H2.17321C0.34515 0 -0.52479 2.25019 0.827868 3.47988L6.65465 8.77696Z" fill="#000000" />
                    </svg>
                </div>
                <div className="lc-employee-name">Хамраев Шохрух</div>
                <div className="lc-employee-role">Генеральный директор</div>
            </div>
            <div className="lc-team-wrapper">
                <div className="lc-employee-img">
                    <Image 
                        src={require("../../assets/img/bg_team1.jpeg")} 
                        className="img-fluid" 
                        alt="team" 
                    />
                </div>
                <div className="lc-employee-down-ic">
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.65465 8.77696C7.4175 9.47045 8.5825 9.47045 9.34535 8.77696L15.1721 3.47988C16.5248 2.25019 15.6549 0 13.8268 0H2.17321C0.34515 0 -0.52479 2.25019 0.827868 3.47988L6.65465 8.77696Z" fill="#000000" />
                    </svg>
                </div>
                <div className="lc-employee-name">Хамраев Шохрух</div>
                <div className="lc-employee-role">Генеральный директор</div>
            </div>
        </Slider>
    )
}

export default TeamSlider;