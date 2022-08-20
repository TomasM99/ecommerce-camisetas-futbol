import './Cart.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ItemCart from './ItemCart';

function Cart() {
    const {productosCart, total, clear} = useContext(CartContext);

    let totalPagar = productosCart.map(prod => (prod.cantidad * prod.precio)).reduce((prev, curr) => prev + curr, 0);

    function avisarConfirmacion(mensaje){
        toast.warn(mensaje, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
            });
    }

    return (
        <div className='contenedor-cart'>
            <h2>Productos en el carrito</h2>
            {productosCart.map((producto) => {return <ItemCart key={producto.id} data={producto} />})}
            <div className='contenedor-total-cart'>
                <div className='total-cart'>
                    <p><strong>Total a pagar: </strong>${totalPagar}</p>
                    <p><strong>Cantidad: </strong>{total}</p>
                </div>
                <img src={`/assets/trash.png`} alt="Tachito" className='basura-cart' onClick={() => {
                    clear();
                    avisarConfirmacion("Carrito vaciado!");
                }}/>
            </div>
        </div>
    );
}

export default Cart;