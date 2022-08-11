import './App.scss';
import NavBar from './components/NavBar/NavBar.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Nosotros from './pages/Nosotros';
import Detalle from './pages/Detalle';
import Categoria from './pages/Categoria';
import Checkout from './pages/Checkout';
import CartProvider from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/productos" element={<Productos />}/>
            <Route path="/nosotros" element={<Nosotros />}/>
            <Route path="/item/:id" element={<Detalle />}/>
            <Route path="/category/:category" element={<Categoria />}/>
            <Route path="/cart" element={<Checkout />}/>
            <Route path="*" element={<h1>ERROR 404</h1>}/>
          </Routes>
          <footer>Footer a desarrollar</footer>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;