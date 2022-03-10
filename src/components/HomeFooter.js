import React from 'react'
import './HomeFooter.css';

import Socials from '../img/Socials.png';

function HomeFooter () {
  return (
    <div className='FooterMain'>
      <div className='FooterTop'>
      <h1>TURNERS</h1>
      <h5>First link</h5>
      <h5>Second link</h5>
      <h5>Third link</h5>
      <h5>Fourth link</h5>
      <h5>Fifth link</h5>
      <div className='FootMid'>
      <img className='Socials' src={ Socials } alt='Socials'/>
      <div className='social-icons'>
      </div>   
      </div>
    </div>
    </div>
  )
}

export default HomeFooter
