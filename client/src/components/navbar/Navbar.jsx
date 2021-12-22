import React from 'react';
import Logo from '../../assets/img/navbar_logo.svg';
import './navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <img src={Logo} alt="navbar_logo" className='navbar__logo'/>
        <div className='navbar__header'>MERN CLOUD</div>
        <div className='navbar__login'>Войти</div>
        <div className='navbar__registartion'>Регистрация</div>
      </div>
    </div>
  )
}

export default Navbar;