import './CartWidget.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function CartWidget() {
    const {total} = useContext(CartContext);

    return (
        <div className='carrito'>
            <div className='carrito-cant'><p>{total}</p></div>
            <img src="/assets/carrito.png" alt="Carrito"/>
        </div>
    );
}

export default CartWidget;