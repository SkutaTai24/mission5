import React from 'react';
import { Link } from 'react-router-dom';
import './HomeHeader.css';
import TurnersLogo from '../img/TurnersLogo.png';

function HomeHeader() {
  return (
    <div className='HeaderMain'>
        <button><img  className='TurnersLogo' src={TurnersLogo} alt='TurnersLogo'/></button>
        <Link to="/">Buy a car</Link>
        <Link to="/">Sell a car</Link>
        <Link to="/Insurance">Insurance</Link>
        <Link to="/">Finance</Link>
    </div>
  )
}

export default HomeHeader;