import './ItemDetail.scss';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function ItemDetail({data}) {

    const {imagen, nombre, precio, descripcion, stock} = data;

    const [cantidadSeleccionada, setCantidadSeleccionada] = useState(0);

    return (
        <div className='detalle'>
            <div className='detalle-imagen'>
                <img src="/assets/d-favorito-vacio.png" alt="Facebook" className='favorito'/>
                <img src={`/assets/${imagen}`} alt="Producto" className='detalle-foto'/>
            </div>
            <div className='detalle-info'>
                <h1>{nombre}</h1>
                <h2>Sobre el producto:</h2>
                <p className='detalle-descripcion'>{descripcion}</p>
                <p className='detalle-precio'>${precio}</p>
                <div className='detalle-boton'>
                    {cantidadSeleccionada > 0 ? 
                    <div className='detalle-terminado'>
                        <button type="button" className="btn btn-outline-dark detalle-boton-interno"><Link to="/productos" className='boton-texto'>Seguir comprando</Link></button>
                        <button type="button" className="btn btn-outline-dark detalle-boton-interno"><Link to="/cart" className='boton-texto'>Terminar Compra</Link></button>
                    </div>
                    : <ItemCount stock={stock} setCantidadSeleccionada={setCantidadSeleccionada} data={data}/>}
                </div>
            </div>
            
        </div>
    );
}

export default ItemDetail;