import './App.scss';
import NavBar from './components/NavBar/NavBar.js';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ToastContainer, Flip} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Nosotros from './pages/Nosotros';
import Favoritos from './pages/Favoritos';
import Detalle from './pages/Detalle';
import Categoria from './pages/Categoria';
import Checkout from './pages/Checkout';
import Error404 from './pages/Error404';
import CartProvider from './context/CartContext';
import FavProvider from './context/FavContext';

function App() {
  return (
    <CartProvider>
      <FavProvider>
        <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/productos" element={<Productos />}/>
              <Route path="/nosotros" element={<Nosotros />}/>
              <Route path="/favoritos" element={<Favoritos />}/>
              <Route path="/item/:id" element={<Detalle />}/>
              <Route path="/category/:category" element={<Categoria />}/>
              <Route path="/cart" element={<Checkout />}/>
              <Route path="*" element={<Error404 />}/>
            </Routes>
            <Footer />
            <ToastContainer transition={Flip}/>
        </BrowserRouter>
      </FavProvider>
    </CartProvider>
  );
}

export default App;