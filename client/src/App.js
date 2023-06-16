import './App.css';
import { Routes, Route, useLocation} from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Product from './components/Product';
import { AnimatePresence } from 'framer-motion';
import ProductInfo from './components/ProductInfo';

function App() {
  const location = useLocation();
  return (
    <div>
      <NavBar/>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/productinfo'} element={<ProductInfo/>}/>
        </Routes>
        </AnimatePresence>
    </div>
  );
}

export default App;
