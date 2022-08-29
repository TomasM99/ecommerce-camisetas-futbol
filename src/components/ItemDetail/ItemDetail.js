import './ItemDetail.scss';
import ItemCount from '../ItemCount/ItemCount';
import { useContext, useState } from 'react';
import { FavContext } from '../../context/FavContext';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ItemDetail({data}) {

    const {id, imagen, nombre, precio, descripcion, stock} = data;

    const {agregarFav, sacarFav, estaEnFav} = useContext(FavContext);

    const [cantidadSeleccionada, setCantidadSeleccionada] = useState(0);

    function aniadirFavoritos(){
        let v = document.getElementById('favorito-v');
        let m = document.getElementById('favorito-m');
        v.classList.add('favorito-marcado');
        v.classList.remove('favorito-vacio');
        m.classList.add('favorito-vacio');
        m.classList.remove('favorito-marcado');
        agregarFav(data);
        avisarConfirmacion("Producto agregado a Favoritos!");
    }

    function sacarFavoritos(){
        let v = document.getElementById('favorito-v');
        let m = document.getElementById('favorito-m');
        v.classList.add('favorito-vacio');
        v.classList.remove('favorito-marcado');
        m.classList.add('favorito-marcado');
        m.classList.remove('favorito-vacio');
        sacarFav(id);
        avisarConfirmacion("Producto sacado de Favoritos!");
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
        <div className='detalle'>
            <div className='detalle-imagen'>
                {estaEnFav(id) ?
                <div>
                    <img src="/assets/d-favorito-marcado.png" alt="Facebook" id='favorito-m' className='favorito-vacio' onClick={sacarFavoritos}/>
                    <img src="/assets/d-favorito-vacio.png" alt="Facebook" id='favorito-v' className='favorito-marcado' onClick={aniadirFavoritos}/>
                </div>
                :
                <div>
                    <img src="/assets/d-favorito-marcado.png" alt="Facebook" id='favorito-m' className='favorito-marcado' onClick={sacarFavoritos}/>
                    <img src="/assets/d-favorito-vacio.png" alt="Facebook" id='favorito-v' className='favorito-vacio' onClick={aniadirFavoritos}/>
                </div>}
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