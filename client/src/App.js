import './App.css';
import { Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {

  return (
    <div>
      <NavBar/>
          <Home/>
        
      
    </div>
  );
}

export default App;
