import './CartWidget.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import {Link} from 'react-router-dom';

function CartWidget() {
    const {total} = useContext(CartContext);

    return (
        <div className='carrito'>
            <div className='carrito-cant'><p>{total}</p></div>
            <Link to="/cart"><img src="/assets/carrito.png" alt="Carrito"/></Link>
        </div>
    );
}

export default CartWidget;