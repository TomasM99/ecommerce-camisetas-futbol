import './CartWidget.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function CartWidget() {
    const {productosCart} = useContext(CartContext);
    console.log(productosCart);
    let cantProductosCart = productosCart.length;

    return (
        <div className='carrito'>
            <div className='carrito-cant'><p>{cantProductosCart}</p></div>
            <img src="/assets/carrito.png" alt="Carrito"/>
        </div>
    );
}

export default CartWidget;