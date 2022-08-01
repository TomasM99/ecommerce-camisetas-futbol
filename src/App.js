import './App.scss';
import NavBar from './components/NavBar/NavBar.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Nosotros from './pages/Nosotros';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/productos" element={<Productos />}/>
          <Route path="/nosotros" element={<Nosotros />}/>
          <Route/>
        </Routes>

        <ItemDetailContainer division="Detalle a terminar"/>
        <footer>Footer a desarrollar</footer>
    </BrowserRouter>
  );
}

export default App;