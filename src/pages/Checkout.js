import './Checkout.scss';
import Cart from "../components/Cart/Cart"
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom'

const Checkout = () => {
    const {total} = useContext(CartContext);

    return(
        <section>
            {total === 0 && (
                <section className='contenedor-vacio'>
                    <div className='texto-vacio'>
                        <h1 className='titulo-vacio'>Carrito vacío!</h1>
                        <p>Momento de empezar a hacer el pedido.</p>
                    </div>
                    <div className='imagen-vacio'>
                        <img src="/assets/carrito-vacio.png" alt="Error 404"/>
                    </div>
                    <div>
                        <Link to="/productos"><button className="btn btn-outline-dark boton-vacio">Ir a Comprar</button></Link>
                    </div>
                </section>
            )}
            {total !== 0 && (
                <Cart />
            )}
        </section>
    )
}

export default Checkout