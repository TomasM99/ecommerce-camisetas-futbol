import { useState } from 'react';
import './ItemCount.scss';

function ItemCount({stock}) {
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
    

    return (
        <div className='card-buttons'>
            <div className='controler'>
                <button className="btn btn-outline-dark cart-button" onClick={susCounter}>-</button>
                <p>{counter}</p>
                <button className="btn btn-outline-dark cart-button" onClick={addCounter}>+</button>
            </div>
            <div>
                <button type="button" className="btn btn-outline-dark cart-button">Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;