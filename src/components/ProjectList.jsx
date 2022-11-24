import React from 'react'
import Popup from './Popup'
import { useState } from 'react';


export default function ProjectList() {
  const [buttonPopup, setButtonPopup] = useState(false)
  const [descritpionPopup, setDescriptionPopup] = useState(['hello world'])
  const [imagePopup, setImagePopup] = useState([''])
  const [linkPopup, setLinkPopup] = useState([''])


  const descriptionVaderApp = "En väderapp skapad för android...";

  return (
    <div className='projectList' id='projects'>
      <h2>Mina Projekt.</h2>
      


      
      

          <div className='project' onClick={() =>  {setButtonPopup(true); setDescriptionPopup(descriptionVaderApp)}}> <p>Väderapp - Android</p><img src='images/projectvaderapp.png' alt="" /> </div>
          <div className='project' onClick={() => { setButtonPopup(true); setDescriptionPopup("Games Directory - React"); setImagePopup('images/projectgamessite.png')}}> <p>Games Directory - React</p><img src='images/projectgamessite.png' alt="" /> </div>
          <div className='project'> <img src="https://via.placeholder.com/150" alt="" /> </div>
          <div className='project'> <img src="https://via.placeholder.com/150" alt="" /> </div>
         
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
        
      <div className='project'> 
      <p> {descritpionPopup}</p>
      <img src={imagePopup} alt="" />
      
      </div>
      </Popup> 

   
      
      </div>
  )
}
