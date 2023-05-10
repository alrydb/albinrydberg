import React from 'react'
import Popup from './Popup'
import { useState } from 'react';


export default function ProjectList() {
  const [buttonPopup, setButtonPopup] = useState(false)
  const [descritpionPopup, setDescriptionPopup] = useState(['hello world'])
  const [imagePopup, setImagePopup] = useState([''])
  const [titlePopup, setTitlePopup] = useState([''])
  const [linkPopup, setLinkPopup] = useState([''])
  const [videoPopup, setVideoPopup] = useState([''])
  const [isGame, setIsGame] = useState(true)

  

  const vampireSurvivorsLink = <a style={{fontStyle:'italic'}} href="https://store.steampowered.com/app/1794680/Vampire_Survivors/" target="_blank"> Vampire Survivors</a>

  const descriptionVaderApp = "En väderapp utvecklad i syfte att lära mig android-utveckling med Kotlin. Använder sig av openweathermap.org API för att hämta väderdata. I appen så kan man söka på platser för att sedan få en detaljerad 24-timmars väderprognos samt en översiktlig 7-dagars väderprognos. Platser kan sedan sparas som favoriter för enkel åtkomst"
  const descriptionGamesDirectory = "Mitt första projekt skapat med React. The Games Directory är en hemsida där man kan söka på speltitlar, eller spelutvecklare, och se information om saker som lanseringsdatum, en beskrivning av spelet, metacritic poäng m.m., för varje spel."
  const descriptionHeroSurvivor = <>Mitt första fullbordade spelprojekt i Unity. Inspirerat av det välkända spelet {vampireSurvivorsLink} Spelet går ut på att överleva samtidigt som man omringas av vågor av monster. Spelaren blir starkare genom att döda monster och plocka upp experience för att levla upp där spelaren får välja mellan 1 av 3 uppgraderingar. </>

  const titleVaderApp ="Väderapp - Android, Kotlin"
  const titleGamesDirectory = "The Games Directory - React"
  const titleHeroSurvivor = "Hero Survivor - Unity, C#"

  const imageVaderApp = 'images/projectvaderapp.png'
  const imageGamesDirectory = 'images/projectgamessite.png'

  const videoVaderapp = <iframe src="https://www.youtube.com/embed/-33V_B4zhz8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  const videoGamesDirectory = <iframe src="https://www.youtube.com/embed/-H1CeSBgx58" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  const videoHeroSurvvior = <iframe src="https://www.youtube.com/embed/bOfusYHbpoo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

  const linkVaderApp = "https://github.com/alrydb/VaderApp"
  const linkGamesDirectory = "https://github.com/alrydb/TheGamesDirectory"
  const linkHeroSurvivor = "https://alrydb.github.io/Hero-Survivor/"

  return (
    <div className='projectList' id='projects'>
      <h2 style={{paddingRight:"25%", paddingLeft:"25%"}}>Mina Projekt.</h2>
      


          <div className='project' onClick={() =>  {setButtonPopup(true); setIsGame(false); setTitlePopup(titleVaderApp);setDescriptionPopup(descriptionVaderApp); setImagePopup(imageVaderApp); setVideoPopup(videoVaderapp); setLinkPopup(linkVaderApp)}}> <p>{titleVaderApp}</p><img src={imageVaderApp} alt="" />  </div>
          <div className='project' onClick={() => { setButtonPopup(true); setIsGame(false); setTitlePopup(titleGamesDirectory);setDescriptionPopup(descriptionGamesDirectory); setImagePopup(imageGamesDirectory); setVideoPopup(videoGamesDirectory); setLinkPopup(linkGamesDirectory)}}> <p>{titleGamesDirectory}</p><img src={imageGamesDirectory}alt="" /> </div>
          <div className='project' onClick={() =>  {setButtonPopup(true); setIsGame(true); setTitlePopup(titleHeroSurvivor);setDescriptionPopup(descriptionHeroSurvivor); setImagePopup(imageVaderApp); setVideoPopup(videoHeroSurvvior); setLinkPopup(linkHeroSurvivor); }}> <p>{titleHeroSurvivor}</p><img src={imageVaderApp} alt="" />  </div>
          {/* <div className='project'> <img src="https://via.placeholder.com/150" alt="" /> </div>
          <div className='project'> <img src="https://via.placeholder.com/150" alt="" /> </div> */}
         
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        
     <div className='popup-top'>
    <div className='popup-video'>{videoPopup}</div>
     {/* <img src={imagePopup} alt="" /> */}
     </div>
      
      <div className='popup-bottom'>
      <p> {titlePopup}</p>
      <p>{descritpionPopup}</p>
      <p><a href={linkPopup} target="_blank"> {isGame ? ("Länk till spelet") : ("Länk till github repo")}</a></p>
      </div>
      
      
      
      
      </Popup> 

   
      
      </div>
  )
}
