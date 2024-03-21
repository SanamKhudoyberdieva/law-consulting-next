import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="lc-cat-nav-wrapper">
      <div className="container">
        <ul className="nav lc-cat-nav">
          <li className="nav-item lc-parent-cat">
            <Link href="/about" className="nav-link">{t('about')}</Link>
          </li>
          <li className="nav-item lc-parent-cat">
            <Link href="/team" className="nav-link">{t('team')}</Link>
          </li>
          <li className="nav-item lc-parent-cat">
            <Link href="/services" className="nav-link">{t('services')}</Link>
          </li>
          <li className="nav-item lc-parent-cat">
            <Link href="/news" className="nav-link">{t('news')}</Link>
          </li>
          <li className="nav-item lc-parent-cat">
            <Link href="/" className="nav-link"> Testimonials </Link>
          </li>
          <li className="nav-item lc-parent-cat">
            <Link href="/vacancy" className="nav-link">{t('vacancies')}</Link>
          </li>
          <li className="nav-item lc-parent-cat">
            <Link href="/contact" className="nav-link">{t('contacts')}</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;