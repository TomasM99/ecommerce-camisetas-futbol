import './ItemDetail.scss';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function ItemDetail({data}) {

    const {imagen, nombre, precio, descripcion, stock} = data;

    const [cantidadSeleccionada, setCantidadSeleccionada] = useState(0);

    return (
        <div className='detalle'>
            <img src={`/assets/${imagen}`} alt="Producto"/>
            <p>{nombre}</p>
            <p>{descripcion}</p>
            <p><strong>${precio}</strong></p>
            {cantidadSeleccionada > 0 ? 
            <button type="button" className="btn btn-outline-dark"><Link to="/cart">Terminar Compra</Link></button>
            : <ItemCount stock={stock} setCantidadSeleccionada={setCantidadSeleccionada}/>}
        </div>
    );
}

export default ItemDetail;