import React from 'react';
import './HomeBody.css';
import { useState } from 'react';
import MVBreakdown from '../Pages/MVBreakdown';
import CarInsurance from '../Pages/CarInsurance';
import CompleteCoverage from '../Pages/CompleteCoverage';
import { NavLink } from 'react-router-dom';

import path333 from '../img/path333.png';
import CrossedArms from '../img/CrossedArms.png';

function HomeBody() {

    const [active, setActive] = useState(" ");

  return (
    <div className='BodyMain'>
       <div className='Progression-bar'>
         
       </div>

       <div className="Sub_Body">
         <img className='path333' src= { path333 } alt="path333"/><br/><br/>
         
         <div className="Top-Mid">
           <h4>Click on a type of coverage below to learn more</h4>
           <button className='button-selectors' onClick={() =>setActive("MVBreakdown")}>Motor Vehicle Breakdown</button>
           <button className='button-selectors' onClick={() =>setActive("CarInsurance")}>Car Insurance</button>
           <button className='button-selectors' onClick={() =>setActive("CompleteCoverage")}>Complete Coverage</button>
           <div className="Top-Right">
             <img className='CrossedArms' src={ CrossedArms } alt='CrossedArms'/>
             <NavLink to="/"className='TopBody-buttons'>Back</NavLink>
             <NavLink to="/Quote"className='TopBody-buttons'>Get an Online Quote</NavLink>
           </div>
           </div>
         </div>
       

            <div className="Redbox">
            
            </div>

            
            <div className="Switchable-Headers">
                          <div className='MBI'>
                            <h1>Mechanical Breakdown Insurance</h1><br/>
                            <p>Learn more</p>
                                        <div className='CI'>
                                        <h1>Car Insurance</h1><br/><br/>
                                        <p>Learn more</p>
                                                              <div className='CC'>
                                                              <h1>Complete Coverage</h1><br/>
                                                              <p>Learn more</p>
                                                              </div>
                                        </div>  
                          </div>
            
            </div> 

            <div className='display-content'>
              {active === "MVBreakdown" && <MVBreakdown/>}
              {active === "CarInsurance" && <CarInsurance/>}
              {active === "CompleteCoverage" && <CompleteCoverage/>}
            </div>

    </div>
  )
}

export default HomeBody