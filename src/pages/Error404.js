import './Error404.scss';
import {Link} from 'react-router-dom';

const Error404 = () => {
    return(
        <section className='contenedor-404'>
            <div className='texto-404'>
                <h1 className='titulo-404'>Oops!</h1>
                <p>Tantas compras te llevaron al diamante oculto <strong>404</strong>.</p>
            </div>
            <div className='imagen-404'>
                <img src="/assets/error-404.png" alt="Error 404"/>
            </div>
            <div>
                <Link to="/"><button className="btn btn-outline-dark boton-404">Home</button></Link>
            </div>
        </section>
    )
}

export default Error404