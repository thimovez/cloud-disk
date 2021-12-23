import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/img/navbar_logo.svg';
import './navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <img src={Logo} alt="navbar_logo" className='navbar__logo'/>
        <div className='navbar__header'>MERN CLOUD</div>
        <div className='navbar__login'><NavLink to="/login">Войти</NavLink></div>
        <div className='navbar__registartion'><NavLink to="/registration">Регистрация</NavLink></div>
      </div>
    </div>
  )
}

export default Navbar;