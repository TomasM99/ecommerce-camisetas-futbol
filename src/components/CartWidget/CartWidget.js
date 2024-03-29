import './CartWidget.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import {Link} from 'react-router-dom';

function CartWidget() {
    const {total} = useContext(CartContext);

    return (
        <div className='carrito'>
            <span className='carrito-cant-container'><p className='carrito-cant'>{total}</p></span>
            <Link to="/cart"><img src="/assets/carrito.png" alt="Carrito"/></Link>
        </div>
    );
}

export default CartWidget;