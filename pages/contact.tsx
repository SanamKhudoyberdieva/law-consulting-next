import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { YMaps, Map, Placemark, ZoomControl, FullscreenControl, SearchControl } from 'react-yandex-maps';

const Contact = () => {
    const coordinates: number[] = [55.751574, 37.573856];
    return (
        <main>
            <section className="lc-page-section">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link href="/">Главная</Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">Contact</li>
                        </ol>
                    </nav>
                    <h1 className="lc-section-title text-left">Контакты</h1>
                    <div className="lc-contacts-row row">
                        <div className="col-md-4">
                            <div className="lc-contacts-content">
                                <div className="lc-contact-title">Law consulting</div>
                                <div className="lc-contact-info">
                                    <div className="lc-contact-property">Адрес:</div>
                                    <div className="lc-contact-value">Узбекистан, г. Наманган, Давлатабадский р-н, ул. Мустакиллик, дом 25</div>
                                </div>
                                <div className="lc-contact-info">
                                    <div className="lc-contact-property">E-mail:</div>
                                    <div className="lc-contact-value">info@example.uz</div>
                                </div>
                                <div className="lc-contact-info">
                                    <div className="lc-contact-property">Контакты:</div>
                                    <Link href="tel:+998692100101" className="lc-contact-value">+998 69 110 11 11</Link>
                                </div>
                                <div className="lc-contact-info">
                                    <div className="lc-contact-property">Мы в соц сетях:</div>
                                    <div className="lc-contact-value">
                                        <div className="lc-socials">
                                            <Link href="/" target="_blank" className="lc-social-ic">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.7428 10.6768H13.5344L13.9728 7.69956H10.7422V6.07235C10.7422 4.83556 11.1272 3.73883 12.2292 3.73883H14V1.14067C13.6889 1.09656 13.0308 1 11.7875 1C9.19114 1 7.669 2.43945 7.669 5.7189V7.69956H5V10.6768H7.669V18.8599C8.19758 18.9434 8.73297 19 9.28255 19C9.77933 19 10.2642 18.9523 10.7428 18.8844V10.6768Z" fill="black" />
                                                </svg>
                                            </Link>
                                            <Link className="lc-social-ic" href="/" target="_blank">
                                                <Image 
                                                    src={require("../src/assets/img/ic_telegram_bl.svg")} 
                                                    alt="telegram" 
                                                />
                                            </Link>
                                            <Link className="lc-social-ic" href="/" target="_blank">
                                                <Image 
                                                    src={require("../src/assets/img/ic_instagram_black.svg")} 
                                                    alt="instagram" 
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="lc-map mapouter lc-contact-map">
                                <YMaps>
                                    <Map
                                        defaultState={{ center: coordinates, zoom: 10 }}
                                        style={{ width: '100%', height: '100%' }}
                                    >
                                        <FullscreenControl />
                                        <SearchControl
                                        options={{
                                            float: "left",
                                        }}
                                        />
                                        <ZoomControl />
                                        <Placemark geometry={coordinates} />
                                    </Map>
                                </YMaps>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Contact;