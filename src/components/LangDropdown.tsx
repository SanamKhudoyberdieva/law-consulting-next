import React from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { setLanguage } from '../store/slices/languageSlice';

export const languages = [
  { code: 'ru', name: 'Русский' },
  { code: 'uz', name: "O'zbek" },
  { code: 'en', name: 'English' },
];

const LangDropdown = () => {
  const dispatch = useDispatch()
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    dispatch(setLanguage(lng))
  };
  
  return (
    <Dropdown className="dropdown">
      <Dropdown.Toggle className="btn lc-language-dropdown dropdown-toggle">
        <Image src={require("../assets/img/ic_global.svg")} className="me-1" alt="global" />
        <span className='sm-hide'>
          {i18n.language === 'ru' ? 'Русский' : i18n.language === 'uz' ? "O'zbek" : 'English'}
        </span>
      </Dropdown.Toggle>
      <Dropdown.Menu 
        className="dropdown-menu lc-dropdown-menu"
      >
        {languages.map((lang) => (
          <Dropdown.Item 
            key={lang.code}
            className={i18n.language === lang.code ? "active" : ''} 
            onClick={() => changeLanguage(lang.code)}
          >
            {lang.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default LangDropdown;