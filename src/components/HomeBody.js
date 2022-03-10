import React, { useState } from 'react'
import './HomeBody.css'

import MVBreakdown from '../Pages/MVBreakdown'
import CarInsurance from '../Pages/CarInsurance'
import CompleteCoverage from '../Pages/CompleteCoverage'
import { NavLink } from 'react-router-dom'

// imported images
import path333 from '../img/path333.png'
import CrossedArms from '../img/CrossedArms.png'
import arrow from '../img/arrow.png'
import RunningMan from '../img/RunningMan.png'
import whanau from '../img/whanau.png'
import Chur from '../img/Chur.png'
import Pakipaki from '../img/Pakipaki.png'
import FAQs from '../img/FAQs.png'

function HomeBody () {
  const [active, setActive] = useState(' ')

  return (
    <div className='BodyMain'>
      <div className='Progression-bar'>
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
      
      <div className='Sub_Body'>
        <img className='path333' src={path333} alt='path333' />

        <div className='Top-Mid'>
          <h4>Click on a type of coverage below to learn more</h4>
          <button className='button-selectors' onClick={() => setActive('MVBreakdown')}>Motor Vehicle Breakdown</button>
          <button className='button-selectors' onClick={() => setActive('CarInsurance')}>Car Insurance</button>
          <button className='button-selectors' onClick={() => setActive('CompleteCoverage')}>Complete Coverage</button>
        </div>
        <div className='Top-Right'>
          <img className='CrossedArms' src={CrossedArms} alt='CrossedArms' />
          <NavLink to='/' className='TopBody-buttons'>Back</NavLink>
          <NavLink to='/Quotes' className='TopBody-buttons1'>Get an Online Quote</NavLink>
        </div>
            </div>

      <div className='Redbox'>
        <img className='imgs' src={RunningMan} alt='RunningMan' />
        <p className=''>Quick competitive online quotes</p>
        <img className='imgs' src={whanau} alt='whanau' />
        <p>Insurance provider comparisons</p>
        <img className='imgs' src={Chur} alt='Chur' />
        <p>Discounts with new and recent Turners purchases</p>
        <img className='imgs' src={Pakipaki} alt='Pakipaki' />
        <p>Easy switch over from other providers</p>
      </div>

      <div className='Switchable-Headers'>
        <div className='MBI'>
          <h3>Mechanical Breakdown Insurance</h3><br />
          <p>Learn more</p><br />
          <h3>Car Insurance</h3><br /><br />
          <p>Learn more</p>
          <h3>Complete Coverage</h3><br />
          <p>Learn more</p>
        </div>

      </div>

      <div className='display-content'>
        {active === 'MVBreakdown' && <MVBreakdown />}
        {active === 'CarInsurance' && <CarInsurance />}
        {active === 'CompleteCoverage' && <CompleteCoverage />}
      </div>

      <div className='BodyLast'>
        <NavLink to='/Quotes' className='midButtons'>Get an online Quote</NavLink>
        <NavLink to='/' className='midButtons1'>View our Policy</NavLink>
      </div>
        <img className='FAQs' src={FAQs} alt='FAQs' />
      

    </div>
  )
}

export default HomeBody
