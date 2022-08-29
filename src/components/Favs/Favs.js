import './Favs.scss';
import { useContext } from 'react';
import { FavContext } from '../../context/FavContext';
import Item from '../Item/Item';

const Favs = () => {
    const {productosFav, clear} = useContext(FavContext);

    function avisarConfirmacion(mensaje){
        console.log(mensaje);
    }

    return(
        <section className='seccion-favs'>
            <div className='titulo-favs'>
                <h1>Favoritos</h1>
                <img src={`/assets/trash.png`} alt="Tachito" className='tachito-fav' onClick={() => {
                    clear();
                    avisarConfirmacion("Carrito vaciado!");
                }}/>
            </div>
            <div className='lista-favs'>
                {productosFav.map((producto) => {return <Item key={producto.id} data={producto} />})}
            </div>
        </section>
    )
}

export default Favs