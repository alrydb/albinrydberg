import React from 'react'
import Popup from './Popup'
import { useState } from 'react';


export default function ProjectList() {
  const [buttonPopup, setButtonPopup] = useState(false)
  const [descritpionPopup, setDescriptionPopup] = useState([''])
  return (
    <div className='projectList' id='projects'>
      <h2>Mina Projekt.</h2>
      
      

          <div className='project'> <p>Väderapp - Android</p><img src='images/projectvaderapp.png' alt="" /> </div>
          <div className='project' onClick={() => setButtonPopup(true)}> <p>Games Directory - React</p><img src='images/projectgamessite.png' alt="" /> </div>
          <div className='project'> <img src="https://via.placeholder.com/150" alt="" /> </div>
          <div className='project'> <img src="https://via.placeholder.com/150" alt="" /> </div>
         
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
      <div className='project'> <p>Games Directory - React</p><img src='images/projectgamessite.png' alt="" /> </div>
      </Popup> 

   
      
      </div>
  )
}
