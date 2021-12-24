import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/img/navbar_logo.svg';
import { logout } from '../../reducers/userReducer';
import './navbar.scss';

const Navbar = () => {
  const isAuth = useSelector(state => state.user.isAuth);
  const dispatch = useDispatch();

  return (
    <div className='navbar'>
      <div className='container'>
        <img src={Logo} alt="navbar_logo" className='navbar__logo'/>
        <div className='navbar__header'>MERN CLOUD</div>
        {!isAuth && <div className='navbar__login'><NavLink to="/login">Войти</NavLink></div> }
        {!isAuth && <div className='navbar__registartion'><NavLink to="/registration">Регистрация</NavLink></div> }
        {isAuth && <div className='navbar__login' onClick={() => dispatch(logout())}>Выход</div> }
      </div>
    </div>
  )
}

export default Navbar;