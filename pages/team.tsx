import TeamSlider from '@/src/components/Sliders/TeamSlider';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Team = () => {
    return (
        <main>
            <section className="lc-bg-section lc-about-bg">
                <div className="container">
                    <h1 className="lc-bg-title">Team</h1>
                </div>
            </section>
            <section className="lc-page-section">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link href="/">Главная</Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">Team</li>
                        </ol>
                    </nav>
                    <div className="lc-employee-view">
                        <div className="lc-employee-v-img">
                            <Image src={require("../src/assets/img/bg_team1.jpeg")} alt="team" />
                        </div>
                        <div className="lc-employee-info">
                            <div className="lc-employee-info-part">
                                <div className="lc-employee-v-name">Shoxrux Azimov</div>
                                <div className="lc-employee-v-role">Lawyer</div>
                            </div>
                            <div className="lc-employee-info-part">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                    d="M26.5643 23.0875L24.5018 23.575C24.0393 23.6875 23.6768 24.0375 23.5768 24.5L23.1393 26.3375C22.9018 27.3375 21.6268 27.65 20.9643 26.8625L17.2268 22.5625C16.9268 22.2125 17.0893 21.6625 17.5393 21.55C19.7518 21.0125 21.7393 19.775 23.2018 18.0125C23.4393 17.725 23.8643 17.6875 24.1268 17.95L26.9018 20.725C27.8518 21.675 27.5143 22.8625 26.5643 23.0875Z"
                                    fill="#000000" />
                                    <path
                                    d="M3.37594 23.0875L5.43844 23.575C5.90094 23.6875 6.26344 24.0375 6.36344 24.5L6.80094 26.3375C7.03844 27.3375 8.31344 27.65 8.97594 26.8625L12.7134 22.5625C13.0134 22.2125 12.8509 21.6625 12.4009 21.55C10.1884 21.0125 8.20094 19.775 6.73844 18.0125C6.50094 17.725 6.07594 17.6875 5.81344 17.95L3.03844 20.725C2.08844 21.675 2.42594 22.8625 3.37594 23.0875Z"
                                    fill="#000000" />
                                    <path
                                    d="M15 2.50012C10.1625 2.50012 6.25 6.41262 6.25 11.2501C6.25 13.0626 6.7875 14.7251 7.7125 16.1126C9.0625 18.1126 11.2 19.5251 13.6875 19.8876C14.1125 19.9626 14.55 20.0001 15 20.0001C15.45 20.0001 15.8875 19.9626 16.3125 19.8876C18.8 19.5251 20.9375 18.1126 22.2875 16.1126C23.2125 14.7251 23.75 13.0626 23.75 11.2501C23.75 6.41262 19.8375 2.50012 15 2.50012ZM18.825 10.9751L17.7875 12.0126C17.6125 12.1876 17.5125 12.5251 17.575 12.7751L17.875 14.0626C18.1125 15.0751 17.575 15.4751 16.675 14.9376L15.425 14.2001C15.2 14.0626 14.825 14.0626 14.6 14.2001L13.35 14.9376C12.45 15.4626 11.9125 15.0751 12.15 14.0626L12.45 12.7751C12.5 12.5376 12.4125 12.1876 12.2375 12.0126L11.175 10.9751C10.5625 10.3626 10.7625 9.75012 11.6125 9.61262L12.95 9.38762C13.175 9.35012 13.4375 9.15012 13.5375 8.95012L14.275 7.47512C14.675 6.67512 15.325 6.67512 15.725 7.47512L16.4625 8.95012C16.5625 9.15012 16.825 9.35012 17.0625 9.38762L18.4 9.61262C19.2375 9.75012 19.4375 10.3626 18.825 10.9751Z"
                                    fill="#000000" />
                                </svg>
                                <p className="lc-employee-v-desc">Нет сомнений, что элементы политического процесса будут разоблачены</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lc-team-section">
                    <div className="container">
                        <h2 className="lc-section-title">Сотрудники</h2>
                        <TeamSlider />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Team;