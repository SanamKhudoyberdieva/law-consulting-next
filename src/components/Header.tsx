import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LangDropdown from './LangDropdown';
import { HeaderTypes } from '../types/general';

const Header = ({ header }: { header: HeaderTypes | null }) => {
  if (!header) return
  return (
    <header className="lc-main-header">
      <div className="container">
        <div className="lc-navbar">
          <div className="lc-navbar-left sm-hide">
            <div className="lc-socials">
              {
                header.instagram_link && <Link href={header.instagram_link} className="lc-social-ic">
                  <Image src={require("../assets/img/ic_instagram.svg")} alt="instagram" />
                </Link>
              }
              {header.telegram_link && <Link href={header.telegram_link} className="lc-social-ic">
                <Image src={require("../assets/img/ic_telegram.svg")} alt="telegram" />
              </Link>}
              {header.facebook_link && <Link href={header.facebook_link} className="lc-social-ic">
                <Image src={require("../assets/img/ic_facebook.svg")} alt="facebook" />
              </Link>}
            </div>
          </div>
          <div className="lc-navbar-center">
            <Link href="/" className="navbar-brand lc-logo">
              <Image width={100} height={100} src={header.mini_logo} alt="logo" />
            </Link>
          </div>
          <div className="lc-navbar-right">
            <LangDropdown />
            <div className="lc-mob-nav">
              <button className="btn lc-hamburger">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="36" height="36" rx="18" fill="white" />
                  <path d="M10 15H26" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M10 21H26" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;