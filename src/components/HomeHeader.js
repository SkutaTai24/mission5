import React from 'react';
import './HomeHeader.css';
import TurnersLogo from '../img/TurnersLogo.png';

function HomeHeader() {
  return (
    <div className='HeaderMain'>
        <button className='TurnerLogo'><img  src={TurnersLogo} alt='TurnersLogo'/></button>
        
    </div>
  )
}

export default HomeHeader;