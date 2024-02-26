import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const News = () => {
    return (
        <main>
            <section className="lc-bg-section lc-about-bg">
                <div className="container">
                    <h1 className="lc-bg-title">News</h1>
                </div>
            </section>
            <section className="lc-page-section">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link href="/">Главная</Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">News</li>
                        </ol>
                    </nav>
                    <ul className="nav nav-pills lc-nav-pills" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link lc-nav-link  active">News</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link lc-nav-link">Videos</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active">
                            <div className="lc-news-list">
                                <div className="lc-news-wrapper">
                                    <div className="lc-news-img">
                                        <Link href="/">
                                            <Image 
                                                src={require("../src/assets/img/bg_news1.jpeg")} 
                                                className="img-fluid w-100" 
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
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-profile">
                            <div className="lc-news-list">
                                <div className="lc-news-wrapper">
                                    <div className="lc-news-img">
                                        <Link href="/">
                                            <Image 
                                                src={require("../src/assets/img/bg_news1.jpeg")} 
                                                className="img-fluid w-100" 
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default News;