import './App.scss';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemDetailContainer division="Detalle a terminar"/>
      <ItemListContainer division="Productos disponibles"/>
    </div>
  );
}

export default App;