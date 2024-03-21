import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Nav, Tab } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '@/src/store/store';
import { getTitle } from '@/utils/custom';
import i18n from '@/src/locales/i18n';
import moment from 'moment';

const NewsList = () => {
    const { news } = useSelector((state: RootState) => state.homeReducer)
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
                            <li className="breadcrumb-item active" aria-current="page">Services</li>
                        </ol>
                    </nav>
                    <Tab.Container defaultActiveKey="first">
                        <Nav className="lc-nav-pills">
                            <Nav.Item className="nav-item" role="presentation">
                                <Nav.Link eventKey="first" className="nav-link lc-nav-link">Services</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="nav-item" role="presentation">
                                <Nav.Link eventKey="second" className="nav-link lc-nav-link">Videos</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content className="tab-content" id="pills-tabContent">
                            <Tab.Pane eventKey="first">
                                <div className="row g-4">
                                    {
                                        news && news.data && news.data.map((x) => (
                                            <div className="col-md-4" key={"news-page-list-item-id-" + x.id}>
                                                <div className="lc-news-img">
                                                    <Link href={`/news/${x.id}`}>
                                                        <Image
                                                            src={x.image}
                                                            width={300}
                                                            height={400}
                                                            className="img-fluid w-100"
                                                            alt="news"
                                                        />
                                                    </Link>
                                                </div>
                                                <div className="lc-news-date">{moment(x.created_at).format('DD.MM.YYYY')}</div>
                                                <h4 className="lc-news-title">
                                                    <Link href={`/news/${x.id}`}>
                                                        {getTitle(x, i18n.language)}
                                                    </Link>
                                                </h4>
                                            </div>
                                        ))
                                    }
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="lc-news-img">
                                            <Link href="/">
                                                <Image
                                                    src={require("../../src/assets/img/bg_news1.jpeg")}
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
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div>
            </section>
        </main>
    )
}

export default NewsList;