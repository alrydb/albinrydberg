import React from 'react'
import { useState } from 'react'


export default function Navbar() {
  const [hamburgerMenu, setHamburgerMenu] = useState(false)

  return (

    <>
  
<div className= 'navbar'>

  {/* <p className='name'>Albin Rydberg</p> */}

<ul>


<li className='nav-link'> <a href="https://github.com/alrydb" target="_blank"> Github</a> </li>
<li className='nav-link'><a href="https://www.linkedin.com/in/albin-rydberg-a130181a7/" target="_blank"> LinkedIn</a></li>
<li className='nav-link'><a href='#cv'>CV</a></li>
<li className='nav-link'><a href='#projects'>Projekt</a></li>
<li className='nav-link' style={{paddingRight:"40%", paddingLeft:"5%"}}><a href="#albinRydberg">Albin Rydberg</a></li>


</ul>


</div>


<div className= 'navbar-mobile'>

  {/* <p className='name'>Albin Rydberg</p> */}

{/* <ul>

<li className='nav-link' ><a href="#albinRydberg">Albin Rydberg</a></li>
<li className='hamburger-menu'>  </li>



</ul> */}

<div className='nav-link'> <a href="#albinRydberg">Albin Rydberg</a></div>
<div className='hamburger-menu-icon' onClick={() => {hamburgerMenu ? setHamburgerMenu(false) : setHamburgerMenu(true)}}></div>




</div>
<div className={hamburgerMenu ? 'hamburger-menu-visible' : 'hamburger-menu-hidden'}> adasd </div>


</>
    
  
  )
}
