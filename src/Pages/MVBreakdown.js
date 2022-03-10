import React from 'react'

// images
import MVBInfo from '../img/MVBInfo.jpg'
import Tyres from '../img/Tyres.png'

function MVBreakdown () {
  return (
    <div className='MVMain'>
      <img className='Tyres' src={Tyres} alt='Tyres' />
      <h4>Mechanical Breakdown Insurance covers your cost if<br />
        you have mechanical or electrical failures
      </h4>
      <img className='MVBInfo' src={MVBInfo} alt='MVBInfo' />
    </div>
  )
}

export default MVBreakdown
