import Navbar from './components/Navbar';
import './App.css';
import ProjectList from './components/ProjectList';
import Cv from './components/Cv';
import Biography from './components/Biography';
import Project from './components/Project';
import { useState } from 'react';
import Popup from './components/Popup';



function App() {
  const [buttonPopup, setButtonPopup] = useState(false)
 
  return (
    
    <div className="App">
      <Navbar></Navbar>
      <Biography></Biography>
      <ProjectList></ProjectList>
       {/* <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>my popup</h3>
      </Popup>  */}
      <Cv></Cv>
      
    
      {/* list.map((Comp) => <Project />) */}
      
      <header className="App-header">
        
        
      
      </header>
      
    </div>
  );
}

export default App;
