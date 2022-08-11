import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './ItemCount.scss';

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
        addItem(data);
        setCantidadSeleccionada(counter);
    }
    

    return (
        <div className='card-buttons'>
            <div className='controler'>
                <button className="btn btn-outline-dark cart-button" onClick={susCounter}>-</button>
                <p>{counter}</p>
                <button className="btn btn-outline-dark cart-button" onClick={addCounter}>+</button>
            </div>
            <div>
                <button type="button" className="btn btn-outline-dark cart-button" onClick={onAdd}>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;