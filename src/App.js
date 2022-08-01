import './App.scss';
import NavBar from './components/NavBar/NavBar.js';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Nosotros from './pages/Nosotros';
import Detalle from './pages/Detalle';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/productos" element={<Productos />}/>
          <Route path="/nosotros" element={<Nosotros />}/>
          <Route path="/productos/:id" element={<Detalle />}/>
          <Route path="*" element={<h1>ERROR 404</h1>}/>
        </Routes>
        <footer>Footer a desarrollar</footer>
    </BrowserRouter>
  );
}

export default App;