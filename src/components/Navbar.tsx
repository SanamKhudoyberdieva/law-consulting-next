import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="lc-cat-nav-wrapper">
      <div className="container">
        <ul className="nav lc-cat-nav">
          <li className="nav-item lc-parent-cat">
            <Link href="/about" className="nav-link"> About us </Link>
          </li>
          <li className="nav-item lc-parent-cat">
            <Link href="/team" className="nav-link"> Team </Link>
          </li>
          <li className="nav-item lc-parent-cat">
            <Link href="/service" className="nav-link"> Services </Link>
          </li>
          <li className="nav-item lc-parent-cat">
            <Link href="/news" className="nav-link"> News </Link>
          </li>
          <li className="nav-item lc-parent-cat">
            <Link href="/" className="nav-link"> Testimonials </Link>
          </li>
          <li className="nav-item lc-parent-cat">
            <Link href="/vacancy" className="nav-link"> Careers </Link>
          </li>
          <li className="nav-item lc-parent-cat">
            <Link href="/contact" className="nav-link"> Contacts </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;