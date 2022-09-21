import React from 'react'

export default function Cv() {
  return (
    <>
    <br id='cv'></br>
    <div className='cv' >

      <h2 style={{marginLeft:"10%"}}>CV</h2>

    <ul>

      <ul >
        <h3>Utbildning</h3>
          <li>Kandidatexamen systemvetenskapliga programmet Örebro universitet</li>
          <li>2020 - 2023</li>
      </ul>

      <ul >
        <h3>Övriga kurser</h3>
          <li>Apputveckling för Android</li>
          <br></br>
          <li>Programming in C#</li>
          <br></br>
          <li>Introduktion till cybersäkerhet </li>
          <br></br>
          <li>Grundläggande datasäkerhet</li>
          <br></br>
          <li>Filosofi A</li>
      </ul>

      <ul >
        <h3>Certifikat</h3>
        <a href='https://www.credly.com/badges/06a98900-f638-4276-a483-77e3b10498c9/public_url' target="_blank" style={{color:"lightblue"}}>CyberOps Associate</a>
          
      </ul>
      
     
    </ul>

    </div>
    </>
  )
}
