import './Favoritos.scss';
import Favs from '../components/Favs/Favs';
import { useContext } from 'react';
import { FavContext } from '../context/FavContext';
import { Link } from 'react-router-dom';

const Favoritos = () => {
    const {totalFavs} = useContext(FavContext);

    return(
        <section>
            {totalFavs === 0 && (
                <section className='contenedor-favoritos'>
                    <div className='texto-favoritos'>
                        <h1 className='titulo-favoritos'>Sin favoritos!</h1>
                        <p>Añadí los productos que mas te gusten así no te olvidas de comprarlos.</p>
                    </div>
                    <div className='imagen-favoritos'>
                        <img src="/assets/favorito-b.png" alt="Error 404"/>
                    </div>
                    <div>
                        <Link to="/productos"><button className="btn btn-outline-dark boton-favoritos">Elegir Favoritos</button></Link>
                    </div>
                </section>
            )}
            {totalFavs !== 0 && (
                <Favs />
            )}
        </section>
    )
}

export default Favoritos

/*
{totalFavs === 0 && (
                <section className='contenedor-favoritos'>
                    <div className='texto-favoritos'>
                        <h1 className='titulo-favoritos'>Sin favoritos!</h1>
                        <p>Añadí los productos que mas te gusten así no te olvidas de comprarlos.</p>
                    </div>
                    <div className='imagen-favoritos'>
                        <img src="/assets/favorito-b.png" alt="Error 404"/>
                    </div>
                    <div>
                        <Link to="/productos"><button className="btn btn-outline-dark boton-favoritos">Elegir Favoritos</button></Link>
                    </div>
                </section>
            )}
            {totalFavs !== 0 && (
                <Favs />
            )}
*/