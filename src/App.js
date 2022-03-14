import React, {useState} from 'react';
import './App.css';
import Main from './components/Main';

import Navbar from './components/Navbar';

function App() {


  
  return (
    <div className="container-principal">
        <Navbar/>
        <Main/>
      </div>
  );
}

export default App;
