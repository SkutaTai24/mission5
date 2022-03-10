import React from 'react'
import './CarInsurance.css'
import MVImg from '../img/MVImg.jpg'


function CarInsurance () {
  return (
    <div className='CarInsurance'>
      <div className='CIText'>
      
      <h2>We have two types of Insurance Cover. See details below!</h2>
      </div>
      <img className='MVImg' src={MVImg} alt='MVImg' />

    </div>
  )
}

export default CarInsurance
