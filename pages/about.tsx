import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
    return (
        <main>
            <section className="lc-bg-section lc-about-bg">
                <div className="container">
                    <h1 className="lc-bg-title">О компании</h1>
                </div>
            </section>
            <section className="lc-page-section">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link href="/">Главная</Link>
                            </li>
                            <li className="breadcrumb-item active">О компании</li>
                        </ol>
                    </nav>
                    <div className="lc-carriers-info-row">
                        <div className="lc-carriers-card">
                            <div className="lc-carriers-info">
                                <div className="lc-carriers-card-text">
                                    "XYZ Enterprises is a startup specializing in innovative tech solutions for sustainable agriculture. Our
                                    team of experts is dedicated to developing cutting-edge software and hardware solutions to optimize
                                    farming practices, increase crop yield, and minimize environmental impact. With a focus on affordability
                                    and ease of use, we aim to empower farmers worldwide to embrace technology for a more sustainable
                                    future."
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