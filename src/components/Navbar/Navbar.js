import React from 'react';
import { NavLink } from 'react-router-dom';  // Importa NavLink para los enlaces de navegación.
import './Navbar.css';  // Importa el CSS.
import logo from '../../images/logo.png';
import { useTranslation } from 'react-i18next';

function Navbar() {

  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <NavLink to="/home" className="link">{t('home')}</NavLink>
      <NavLink to="/home" className="link">{t('about')}</NavLink>
      <img className="logo" src={logo} alt="logo" />
      <NavLink to="/home" className="link">{t('experience')}</NavLink>
      <NavLink to="/home" className="link">{t('contact')}</NavLink>
    </nav>
  );
}

export default Navbar;
