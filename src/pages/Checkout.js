import Cart from "../components/Cart/Cart"
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
    const {total} = useContext(CartContext);

    return(
        <section>
            {total === 0 && (
                <h2>El carrito esta vacio</h2>
            )}
            {total !== 0 && (
                <Cart />
            )}
        </section>
    )
}

export default Checkout