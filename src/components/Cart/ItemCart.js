import './ItemCart.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ItemCart({data}) {
    const {removeItem} = useContext(CartContext);
    const {id, imagen, nombre, precio, cantidad} = data;

    function sacarItem(){
        removeItem(id, parseInt(cantidad));
        avisarConfirmacion("Producto retirado!");
    }

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
        <div className="tarjeta-cart">
            <img src={`/assets/${imagen}`} alt="Producto" className='imagen-cart'/>
            <p><strong>Producto: </strong>{nombre}</p>
            <p><strong>Precio: </strong>${precio}</p>
            <p><strong>Cantidad: </strong>{cantidad}</p>
            <p><strong>Total: </strong>${cantidad*precio}</p>
            <img src={`/assets/trash.png`} alt="Tachito" className='basura-cart' onClick={sacarItem}/>
        </div>
    );
}

export default ItemCart;