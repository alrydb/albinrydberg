import React from 'react'
import Popup from './Popup'
import { useState } from 'react';


export default function ProjectList() {
  const [buttonPopup, setButtonPopup] = useState(false)
  const [descritpionPopup, setDescriptionPopup] = useState(['hello world'])
  const [imagePopup, setImagePopup] = useState([''])
  const [titlePopup, setTitlePopup] = useState([''])
  const [linkPopup, setLinkPopup] = useState([''])


  const descriptionVaderApp = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero alias ipsam quaerat nihil natus pariatur consequuntur ea a aspernatur repudiandae Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero alias ipsam quaerat nihil natus pariatur consequuntur ea a aspernatur repudiandae";
  const descriptionGamesDirectory = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero alias ipsam quaerat nihil natus pariatur consequuntur ea a aspernatur repudiandae Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero alias ipsam quaerat nihil natus pariatur consequuntur ea a aspernatur repudiandae  "

  const titleVaderApp ="Väderapp - Android"
  const titleGamesDirectory = "The Games Directory - React"

  const imageVaderApp = 'images/projectvaderapp.png'
  const imageGamesDirectory = 'images/projectgamessite.png'

  const linkVaderApp = "https://github.com/alrydb/VaderApp"
  const linkGamesDirectory = "https://github.com/alrydb/TheGamesDirectory"

  return (
    <div className='projectList' id='projects'>
      <h2>Mina Projekt.</h2>
      


          <div className='project' onClick={() =>  {setButtonPopup(true); setTitlePopup(titleVaderApp);setDescriptionPopup(descriptionVaderApp); setImagePopup(imageVaderApp); setLinkPopup(linkVaderApp)}}> <p>{titleVaderApp}</p><img src={imageVaderApp} alt="" /> </div>
          <div className='project' onClick={() => { setButtonPopup(true); setTitlePopup(titleGamesDirectory);setDescriptionPopup(descriptionGamesDirectory); setImagePopup(imageGamesDirectory); setLinkPopup(linkGamesDirectory)}}> <p>{titleGamesDirectory}</p><img src={imageGamesDirectory}alt="" /> </div>
          <div className='project'> <img src="https://via.placeholder.com/150" alt="" /> </div>
          <div className='project'> <img src="https://via.placeholder.com/150" alt="" /> </div>
         
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
        
     <div className='popup-top'>
     <img src={imagePopup} alt="" />
     </div>
      
      <div className='popup-bottom'>
      <p> {titlePopup}</p>
      <p>{descritpionPopup}</p>
      <p><a href={linkPopup} target="_blank">Länk till Github repo</a></p>
      </div>
      
      
      
      
      </Popup> 

   
      
      </div>
  )
}
