import React from 'react'
import Popup from './Popup'
import { useState } from 'react';


export default function ProjectList() {
  const [buttonPopup, setButtonPopup] = useState(false)
  const [descritpionPopup, setDescriptionPopup] = useState(['hello world'])
  const [imagePopup, setImagePopup] = useState([''])
  const [titlePopup, setTitlePopup] = useState([''])
  const [linkPopup, setLinkPopup] = useState([''])


  const descriptionVaderApp = "En väderapp utvecklad i syfte att lära mig android-utveckling med Kotlin. Använder sig av openweathermap.org API för att hämta väderdata. I appen så kan man söka på platser för att sedan få en detaljerad 24-timmars väderprognos samt en översiktlig 7-dagars väderprognos. Platser kan sedan sparas som favoriter för enkel åtkomst"
  const descriptionGamesDirectory = "Mitt första projekt skapat med React.  The Games Directory är en hemsida där man kan söka på speltitlar, eller spelutvecklare, och se inforamtion om saker som lanseringsdatum, en beskrivning av spelet, metacrtitic poäng m.m, för varje spel."

  const titleVaderApp ="Väderapp - Android"
  const titleGamesDirectory = "The Games Directory - React"

  const imageVaderApp = 'images/projectvaderapp.png'
  const imageGamesDirectory = 'images/projectgamessite.png'

  const linkVaderApp = "https://github.com/alrydb/VaderApp"
  const linkGamesDirectory = "https://github.com/alrydb/TheGamesDirectory"

  return (
    <div className='projectList' id='projects'>
      <h2 style={{paddingRight:"25%", paddingLeft:"25%"}}>Mina Projekt.</h2>
      


          <div className='project' onClick={() =>  {setButtonPopup(true); setTitlePopup(titleVaderApp);setDescriptionPopup(descriptionVaderApp); setImagePopup(imageVaderApp); setLinkPopup(linkVaderApp)}}> <p>{titleVaderApp}</p><img src={imageVaderApp} alt="" /> </div>
          <div className='project' onClick={() => { setButtonPopup(true); setTitlePopup(titleGamesDirectory);setDescriptionPopup(descriptionGamesDirectory); setImagePopup(imageGamesDirectory); setLinkPopup(linkGamesDirectory)}}> <p>{titleGamesDirectory}</p><img src={imageGamesDirectory}alt="" /> </div>
          {/* <div className='project'> <img src="https://via.placeholder.com/150" alt="" /> </div>
          <div className='project'> <img src="https://via.placeholder.com/150" alt="" /> </div> */}
         
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
