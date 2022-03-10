import React from 'react'
import './CarInsurance.css'
import MVImg from '../img/MVImg.jpg'
import Car1 from '../img/Car1.png'

function CarInsurance () {
  return (
    <div className='CarInsurance'>
      <img className='Car1' src={Car1} alt='Car1' />
      <h2>We have two types of Insurance Cover. See details below!</h2>
      <img className='MVImg' src={MVImg} alt='MVImg' />
      <h1>Test1</h1>

    </div>
  )
}

export default CarInsurance
