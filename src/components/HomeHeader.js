import React from 'react';
import { NavLink } from 'react-router-dom';
import './HomeHeader.css';
import TurnersLogo from '../img/TurnersLogo.png';
import person from '../img/person.png';
import settings from '../img/settings.png'

function HomeHeader() {
  return (
    <div className='HeaderMain'>
        <NavLink to="/" className='home-button' ><a href={ TurnersLogo } className='logo'>
        <img className='TurnersLogo' src={ TurnersLogo} alt=""/></a></NavLink>
        <NavLink to="/"className='header-buttons'> Buy a car</NavLink>
        <NavLink to="/"className='header-buttons'> Sell a car</NavLink>
        <NavLink to="/Insurance" className='header-buttons' >Insurance</NavLink>
        <NavLink  to="/"className='header-buttons'>Finance</NavLink>
        <NavLink  to="/"className='header-login-buttons'>Login</NavLink>
        <NavLink  to="/"className='header-signup-buttons'>Sign up</NavLink>
        <img className='person' src= { person } alt='person'/>
        <img className='settings' src= {settings } alt='settings'/>
        
    </div>
    
  )
}

export default HomeHeader;