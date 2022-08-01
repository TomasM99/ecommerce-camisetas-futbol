import './ItemDetail.scss';
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail({data}) {

    const {imagen, nombre, precio, descripcion, stock} = data;

    return (
        <div className='tarjeta'>
            <img src={`/assets/${imagen}`} alt="Producto"/>
            <p>{nombre}</p>
            <p>{descripcion}</p>
            <p><strong>${precio}</strong></p>
            <ItemCount stock={stock}/>
        </div>
    );
}

export default ItemDetail;