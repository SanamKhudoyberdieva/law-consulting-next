import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import i18n from '@/src/locales/i18n';
import axios from 'axios';
import { getDescription } from '@/utils/custom';
import { AboutDetails } from '@/src/types/about';
import parse from 'html-react-parser';

const About = () => {
    const { t } = useTranslation();
    const [data, setData] = useState<AboutDetails | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    const fetchData = async () => {
        try {
            const response = await axios.get(`/api/about?lang=${i18n.language}`);
            setData(response.data["case-studies"][0])
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
            <section className="lc-bg-section lc-about-bg">
                <div className="container">
                    <h1 className="lc-bg-title">{t('about')}</h1>
                </div>
            </section>
            <section className="lc-page-section">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link href="/">{t('home')}</Link>
                            </li>
                            <li className="breadcrumb-item active">О компании</li>
                        </ol>
                    </nav>
                    <div className="lc-carriers-info-row">
                        <div className="lc-carriers-card">
                            <div className="lc-carriers-info">
                                <div className="lc-carriers-card-text">
                                    {parse(getDescription(data, i18n.language))}
                                </div>
                            </div>
                        </div>
                        <div className="lc-carriers-card">
                            <div className="lc-carriers-card-cover">
                                <Image src={require("../src/assets/img/bg_about2.jpeg")} alt="about" />
                            </div>
                        </div>
                    </div>
                    <div className="lc-carriers-info-row">
                        <div className="lc-carriers-card">
                            <div className="lc-carriers-card-cover">
                                <Image src={require("../src/assets/img/bg_about2.jpeg")} alt="about" />
                            </div>
                        </div>
                        <div className="lc-carriers-card">
                            <div className="lc-carriers-info">
                                <div className="lc-carriers-card-text">
                                    "Sunrise Cosmetics is a boutique skincare company committed to crafting natural and organic beauty
                                    products. Our mission is to promote self-care and wellness through high-quality skincare solutions that
                                    harness the power of botanical ingredients. With a dedication to sustainability and cruelty-free
                                    practices, we strive to enhance the beauty of our customers while respecting the planet."
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default About;