import React from 'react';
import { NavLink } from 'react-router-dom';
import './HomeHeader.css';
import TurnersLogo from '../img/TurnersLogo.png';

function HomeHeader() {
  return (
    < >
    <div className='HeaderMain'>
        <NavLink to="/" className='home-button' ><a href={ TurnersLogo } className='logo'>
        <img className='TurnersLogo' src={ TurnersLogo} alt=""/></a></NavLink>
        <NavLink to="/">Buy a car</NavLink>
        <NavLink to="/">Sell a car</NavLink>
        <NavLink to="/Insurance">Insurance</NavLink>
        <NavLink to="/">Finance</NavLink>
    </div>
    </>
  )
}

export default HomeHeader;