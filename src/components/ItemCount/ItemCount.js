import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './ItemCount.scss';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ItemCount({stock, setCantidadSeleccionada, data}) {
    const {addItem} = useContext(CartContext);
    const [counter, setCounter] = useState(1);
    
    function addCounter(){
        if(!(counter === stock)){
            setCounter(counter + 1);
        }
    }

    function susCounter(){
        if(!(counter === 1)){
            setCounter(counter - 1);
        }
    }

    function onAdd(){
        addItem(data, counter);
        setCantidadSeleccionada(counter);
        avisarConfirmacion("Producto agregado!");
    }

    function avisarConfirmacion(mensaje){
        toast.info(mensaje, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
            });
    }

    return (
        <div className='card-buttons'>
            <div className='controler'>
                <button className="btn btn-outline-dark" onClick={susCounter}>-</button>
                <p>{counter}</p>
                <button className="btn btn-outline-dark" onClick={addCounter}>+</button>
            </div>
            <div>
                <button type="button" className="btn btn-outline-dark carrito-button" onClick={onAdd}>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;