import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Nav, Tab } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Service } from '@/src/types/home';
import axios from 'axios';
import { getTitle } from '@/utils/custom';
import { useSelector } from 'react-redux';
import { RootState } from '@/src/store/store';

const Services = () => {
    const { t, i18n } = useTranslation();
    const { services } = useSelector((state: RootState) => state.homeReducer)
    if (!services) return
    return (
        <main>
            <section className="lc-bg-section lc-about-bg">
                <div className="container">
                    <h1 className="lc-bg-title">Services</h1>
                </div>
            </section>
            <section className="lc-page-section">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link href="/">Главная</Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">Services</li>
                        </ol>
                    </nav>
                    <h2 className="lc-section-title">{t('services')}</h2>
                    <div className="row g-4">
                        {
                            services && services.data && services.data.map((x) => (
                                <div className="col-md-4" key={"services-page-list-item-id-" + x.id}>
                                    <div className="lc-news-img">
                                        <Link href={`/services/${x.id}`}>
                                            <Image
                                                src={x.image}
                                                width={300}
                                                height={400}
                                                className="img-fluid w-100"
                                                alt="news"
                                            />
                                        </Link>
                                    </div>
                                    <h4 className="lc-news-title">
                                        <Link href={`/services/${x.id}`}>
                                            {getTitle(x)}
                                        </Link>
                                    </h4>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Services;