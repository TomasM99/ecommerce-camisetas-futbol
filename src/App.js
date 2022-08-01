import './App.scss';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer division="Productos disponibles"/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;