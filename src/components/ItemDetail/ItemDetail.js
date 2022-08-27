import './ItemDetail.scss';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function ItemDetail({data}) {

    const {imagen, nombre, precio, descripcion, stock} = data;

    const [cantidadSeleccionada, setCantidadSeleccionada] = useState(0);

    function aniadirFavoritos(){
        let v = document.getElementById('favorito-v');
        let m = document.getElementById('favorito-m');
        v.style.setProperty('z-index', -1);
        m.style.setProperty('z-index', 5);
    }

    function sacarFavoritos(){
        let v = document.getElementById('favorito-v');
        let m = document.getElementById('favorito-m');
        v.style.setProperty('z-index', 5);
        m.style.setProperty('z-index', -1);
    }

    return (
        <div className='detalle'>
            <div className='detalle-imagen'>
                <img src="/assets/d-favorito-vacio.png" alt="Facebook" id='favorito-v' className='favorito-vacio' onClick={aniadirFavoritos}/>
                <img src="/assets/d-favorito-marcado.png" alt="Facebook" id='favorito-m' className='favorito-marcado' onClick={sacarFavoritos}/>
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
                        <Link to="/productos"><button type="button" className="btn btn-outline-dark detalle-boton-interno">Seguir comprando</button></Link>
                        <Link to="/cart"><button type="button" className="btn btn-outline-dark detalle-boton-interno">Terminar Compra</button></Link>
                    </div>
                    : <ItemCount stock={stock} setCantidadSeleccionada={setCantidadSeleccionada} data={data}/>}
                </div>
            </div>
            
        </div>
    );
}

export default ItemDetail;