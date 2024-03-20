import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FooterTypes } from '../types/general';

const Footer = ({ footer }: { footer: FooterTypes }) => {
  return (
    <footer>
      <div className="container">
        <div className="lc-footer-container">
          <div className="lc-footer-group">
            <div className="lc-footer-title" data-aos="fade-up">Contact Us</div>
            <div className="lc-footer-contact" data-aos="fade-up">
              <div className="mb-3">
                <input type="text" className="form-control" id="name" placeholder="Full name" />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <input type="tel" className="form-control" id="phone-number" placeholder="Enter your phone number" />
              </div>
              <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Message" rows={4}></textarea>
              </div>
              <button className="btn lc-btn-mini">
                <span>Submit</span>
              </button>
            </div>
          </div>
          <div className="lc-footer-group text-md-center">
            <div className="lc-footer-logo" data-aos="fade-up">
              <Link href="/">
                <Image src={footer.logo} alt="logo" width={150} height={150} />
              </Link>
            </div>
            <div className="lc-footer-info" data-aos="fade-up">
              {footer.company_description}
            </div>
            <div className="lc-footer-phone" data-aos="fade-up">
              <Link href={`tel:${footer.phone_number}`}>{footer.phone_number}</Link>
            </div>
            <div className="lc-footer-location" data-aos="fade-up">
              <div className="lc-location-ic">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 13.4304C13.7231 13.4304 15.12 12.0336 15.12 10.3104C15.12 8.5873 13.7231 7.19043 12 7.19043C10.2769 7.19043 8.88 8.5873 8.88 10.3104C8.88 12.0336 10.2769 13.4304 12 13.4304Z"
                    stroke="black" stroke-width="1.5" />
                  <path
                    d="M3.62001 8.49C5.59001 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.39001 20.54C5.63001 17.88 2.47001 13.57 3.62001 8.49Z"
                    stroke="black" stroke-width="1.5" />
                </svg>
              </div>
              <div className="es-location-text">
                {footer.address_ru}
              </div>
            </div>
          </div>
          <div className="lc-footer-group text-md-end">
            <div className="lc-footer-title" data-aos="fade-up">Pages</div>
            <ul className="nav lc-footer-list" data-aos="fade-up">
              <li className="nav-item">
                <Link href="/" className="nav-link">About Us</Link>
              </li>
              <li className="nav-item">
                <Link href="/" className="nav-link">Team</Link>
              </li>
              <li className="nav-item">
                <Link href="/" className="nav-link">News</Link>
              </li>
              <li className="nav-item">
                <Link href="/" className="nav-link">Services</Link>
              </li>
              <li className="nav-item">
                <Link href="/" className="nav-link">Contacts</Link>
              </li>
              <li className="nav-item">
                <Link href="/" className="nav-link">Testimonials</Link>
              </li>
              <li className="nav-item">
                <Link href="/" className="nav-link">Careers</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="lc-footer-bottom">
        <div className="container">
          <div className="lc-footer-container">
            <div className="lc-footer-group">
              <div className="lc-footer-copyright">
                © 2024 Consulting. All rights reserved.
              </div>
            </div>
            <div className="lc-footer-group">
              <div className="lc-socials">
                <Link className="lc-social-ic" href="/" target="_blank">
                  <Image src={require("../assets/img/ic_instagram_black.svg")} alt="instagram" />
                </Link>
                <Link className="lc-social-ic" href="#" target="_blank">
                  <Image src={require("../assets/img/ic_facebook_bl.svg")} alt="facebook" />
                </Link>
                <a className="lc-social-ic" href="#" target="_blank">
                  <Image src={require("../assets/img/ic_telegram_bl.svg")} alt="telegram" />
                </a>
              </div>
            </div>
            <div className="lc-footer-group">
              <div className="lc-footer-developer">
                Сайт разработан в
                <Link href="/" target="_blank"> XXX</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;