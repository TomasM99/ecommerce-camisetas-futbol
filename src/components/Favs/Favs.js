import './Favs.scss';
import { useContext } from 'react';
import { FavContext } from '../../context/FavContext';
import Item from '../Item/Item';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Favs = () => {
    const {productosFav, clear} = useContext(FavContext);

    function avisarConfirmacion(mensaje){
        toast.warn(mensaje, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
            });
    }

    return(
        <section className='seccion-favs'>
            <div className='titulo-favs'>
                <h1>Favoritos</h1>
                <img src={`/assets/trash.png`} alt="Tachito" className='tachito-fav' onClick={() => {
                    clear();
                    avisarConfirmacion("Favoritos vaciado!");
                }}/>
            </div>
            <div className='lista-favs'>
                {productosFav.map((producto) => {return <Item key={producto.id} data={producto} />})}
            </div>
        </section>
    )
}

export default Favs