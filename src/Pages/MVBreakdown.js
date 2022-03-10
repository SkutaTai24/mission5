import React from 'react'
import './MVBreakdown.css';

// images
import MVBInfo from '../img/MVBInfo.jpg'

function MVBreakdown () {
  return (
    <div className='MVMain'>
      <div className='mainText'>
        <h4>Mechanical Breakdown Insurance covers your cost if<br /><br/><br/>
          you have mechanical or electrical failures.
        </h4>
      </div>

      <div className='CoverTxt'>
        <h4>Cover includes:</h4>
        <h4>Cover does not include:</h4>
      </div>
     
      <img className='MVBInfo' src={MVBInfo} alt='MVBInfo' />
    </div>
  )
}

export default MVBreakdown
