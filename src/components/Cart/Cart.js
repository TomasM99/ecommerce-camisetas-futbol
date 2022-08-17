import './Cart.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import ItemCart from './ItemCart';

function Cart() {
    const {productosCart} = useContext(CartContext);

    let total = productosCart.map(prod => (prod.cantidad * prod.precio)).reduce((prev, curr) => prev + curr, 0);

    return (
        <div className='contenedor-cart'>
            <h2>Productos en el carrito</h2>
            {productosCart.map((producto) => {return <ItemCart key={producto.id} data={producto} />})}
            <div>
                <p><strong>Total: </strong>{total}</p>
            </div>
        </div>
    );
}

export default Cart;