import Image from 'next/image';
import React from 'react'

const LangDropdown = () => {
  return (
    <div className="dropdown">
        <button className="btn lc-language-dropdown dropdown-toggle" type="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            <Image src={require("../assets/img/ic_global.svg")} className="me-1" alt="global" />
            <span className='sm-hide'>Русский</span>
        </button>
        <ul className="dropdown-menu lc-dropdown-menu">
            <li><a className="dropdown-item" href="#">O'zbekcha</a></li>
            <li><a className="dropdown-item active" href="#">Русский</a></li>
            <li><a className="dropdown-item" href="#">English</a></li>
        </ul>
    </div>
  )
}

export default LangDropdown;