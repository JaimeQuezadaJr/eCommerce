import './App.css';
import { Routes, Route, useLocation} from 'react-router-dom';

import Home from './components/Home';
import NavBar from './components/NavBar';

import { AnimatePresence } from 'framer-motion';
import ProductInfo from './components/ProductInfo';
import BuyProduct from './components/BuyProduct';
import Cart from './components/Cart';

function App() {
  const location = useLocation();
  return (
    <div>
      <NavBar/>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/productinfo'} element={<ProductInfo/>}/>
          <Route path={'/buyproduct'} element={<BuyProduct/>}/>
          <Route path={'/cart'} element={<Cart/>}/>
        </Routes>
        </AnimatePresence>
    </div>
  );
}

export default App;
