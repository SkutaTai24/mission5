import React, {useState} from 'react'
import './Quotes.css'

import HomeHeader from '../components/HomeHeader';
import HomeFooter from '../components/HomeFooter';
import arrow from '../img/arrow.png';
import sun from '../img/sun.png';
import NewQuotes from './NewQuotes';

import { NavLink } from 'react-router-dom'

function Quotes () {
  const [active, setActive] = useState(' ')
  return (
    <div>
      <HomeHeader />
      <div className="DriverCont">
      <div className='Progression-bar1'>
        <h3>Coverage</h3>
        <img className='arrow' src={arrow} alt='arrow' />
        <h3>Information</h3>
        <img className='arrow' src={arrow} alt='arrow' />
        <h3>Quote</h3>
        <img className='arrow' src={arrow} alt='arrow' />
        <h3>Change/New Contract</h3>
        <img className='arrow' src={arrow} alt='arrow' />
        <h3>Signup/Login</h3>
        <img className='arrow' src={arrow} alt='arrow' />
        <h3>Payments</h3>
      </div>
      <div className='Driver Content'><br/>
        <h1>Driver Information</h1><br/><br/>
        <h4>Date of birth</h4><br/>
        <input type="date"></input><br/>
        <h1>How do you define yourself</h1>
        <div className='Gender-buttons'><br/>
        
        <button>Female</button>
        <button>Male</button>
        <button>Non Binary</button>
        </div>
        <h1>What license do you hold?</h1>
          <input type='text' placeholder="eg, Hammer"></input>
          <h1>Have you had any accidents in the last 5 years?</h1>
          <div className='Yes'>
          <button>Yes</button>
          <button>No</button>
          </div>
      </div>

      <div className='QuotesImg'>
      <NavLink to='/Quotes' className='TopBody-buttons1'>Get an Online Quote</NavLink>
          <img className='sun' src={ sun } alt='sun'/>
          </div>
      <div className="display">
      {active === 'NewQuotes' && <NewQuotes />}
      </div>
      </div>
      <HomeFooter />
    </div>
  )
}

export default Quotes
