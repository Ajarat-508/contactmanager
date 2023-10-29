import React from 'react';
import Contact from './Component/Contact';
import Header from './Component/header';

import './App.css';


function App() {
  return (
    <div className="App">  
      <Header branding="Contact Manager"/>
      <div className='container'> 
        <Contact name="Ajarat Azeez" 
        email="ajarat@example.com" 
        phone="+234812345678" />

        <Contact name="Uloka Ngozi" 
        email="gift@example.com" 
        phone="+234812345678" />

      </div>
    </div>
  );
}

export default App;
