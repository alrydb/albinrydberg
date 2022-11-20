import Navbar from './components/Navbar';
import './App.css';
import ProjectList from './components/ProjectList';
import Cv from './components/Cv';
import Biography from './components/Biography';
import Popup from './components/Popup';
import { useState } from 'react';


function App() {
  const [buttonPopup, setButtonPopup] = useState(false)
  return (
    <div className="App">
      <Navbar></Navbar>
      <Biography></Biography>
      <ProjectList></ProjectList>
      {/* <Popup trigger={buttonPopup}>
        <h3>my popup</h3>
      </Popup> */}
      <Cv></Cv>
      
      <header className="App-header">
        
        
      
      </header>
      
    </div>
  );
}

export default App;
