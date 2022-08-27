import './Favoritos.scss';
import { Link } from 'react-router-dom'

const Favoritos = () => {
    return(
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
    )
}

export default Favoritos