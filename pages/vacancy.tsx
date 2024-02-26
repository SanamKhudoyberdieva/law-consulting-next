import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Accordion } from 'react-bootstrap';

const Vacancy = () => {
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
                    <h1 className="lc-section-title text-left">Vacancies</h1>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="lc-vacancy-group">Название места</div>
                        </div>
                        <div className="col-md-7">
                            <Accordion defaultActiveKey="0" className="accordion lc-accordion">
                                <Accordion.Item eventKey="0" className="accordion-item">
                                    <Accordion.Header className="accordion-button lc-vacancy-btn out-btn">
                                        <span>Торговый представитель HoReCaa</span>
                                        <span className="lc-accordion-arrow">
                                            <Image 
                                                src={require("../src/assets/img/ic_arrow-down.svg")} 
                                                alt="arrow" 
                                            />
                                        </span>
                                    </Accordion.Header>
                                    <Accordion.Body className="accordion-body">
                                        <div className="vacany-info-group">
                                            <div className="lc-list-title">Опыт работы</div>
                                            Опыт работы от 1 года торговым представителем (опыт работы в канале HoReCa будет преимуществом)
                                        </div>
                                        <div className="vacany-info-group">
                                            <div className="lc-list-title">Обязанности</div>
                                            • Поиск и привлечение новых клиентов;
                                            • Выезд на территорию и консультирование клиентов;
                                            • Презентация наших товаров;
                                            • Выполнение ежемесячных планов продаж и обеспечение максимальной реализации продукции по каждому
                                            бренду.
                                        </div>
                                        <div className="vacany-info-group">
                                            <div className="lc-list-title">Требования</div>
                                            Обязательное знание русского и узбекского языков Обязательное наличие автомобиля Наличие
                                            наработанной клиентской базы (будет преимуществом)
                                            </div>
                                        <button className="btn lc-btn-mini">
                                            <span>Подать заявку</span>
                                        </button>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className="accordion-item">
                                    <Accordion.Header className="accordion-button lc-vacancy-btn out-btn">
                                        <span>Торговый представитель HoReCaa</span>
                                        <span className="lc-accordion-arrow">
                                            <Image 
                                                src={require("../src/assets/img/ic_arrow-down.svg")} 
                                                alt="arrow" 
                                            />
                                        </span>
                                    </Accordion.Header>
                                    <Accordion.Body className="accordion-body">
                                        <div className="vacany-info-group">
                                            <div className="lc-list-title">Опыт работы</div>
                                            Опыт работы от 1 года торговым представителем (опыт работы в канале HoReCa будет преимуществом)
                                        </div>
                                        <div className="vacany-info-group">
                                            <div className="lc-list-title">Обязанности</div>
                                            • Поиск и привлечение новых клиентов;
                                            • Выезд на территорию и консультирование клиентов;
                                            • Презентация наших товаров;
                                            • Выполнение ежемесячных планов продаж и обеспечение максимальной реализации продукции по каждому
                                            бренду.
                                        </div>
                                        <div className="vacany-info-group">
                                            <div className="lc-list-title">Требования</div>
                                            Обязательное знание русского и узбекского языков Обязательное наличие автомобиля Наличие
                                            наработанной клиентской базы (будет преимуществом)
                                            </div>
                                        <button className="btn lc-btn-mini">
                                            <span>Подать заявку</span>
                                        </button>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className="accordion-item">
                                    <Accordion.Header className="accordion-button lc-vacancy-btn out-btn">
                                        <span>Торговый представитель HoReCaa</span>
                                        <span className="lc-accordion-arrow">
                                            <Image 
                                                src={require("../src/assets/img/ic_arrow-down.svg")} 
                                                alt="arrow" 
                                            />
                                        </span>
                                    </Accordion.Header>
                                    <Accordion.Body className="accordion-body">
                                        <div className="vacany-info-group">
                                            <div className="lc-list-title">Опыт работы</div>
                                            Опыт работы от 1 года торговым представителем (опыт работы в канале HoReCa будет преимуществом)
                                        </div>
                                        <div className="vacany-info-group">
                                            <div className="lc-list-title">Обязанности</div>
                                            • Поиск и привлечение новых клиентов;
                                            • Выезд на территорию и консультирование клиентов;
                                            • Презентация наших товаров;
                                            • Выполнение ежемесячных планов продаж и обеспечение максимальной реализации продукции по каждому
                                            бренду.
                                        </div>
                                        <div className="vacany-info-group">
                                            <div className="lc-list-title">Требования</div>
                                            Обязательное знание русского и узбекского языков Обязательное наличие автомобиля Наличие
                                            наработанной клиентской базы (будет преимуществом)
                                            </div>
                                        <button className="btn lc-btn-mini">
                                            <span>Подать заявку</span>
                                        </button>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Vacancy;