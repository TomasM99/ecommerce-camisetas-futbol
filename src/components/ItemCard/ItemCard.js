import ItemCount from '../ItemCount/ItemCount';
import './ItemCard.scss';

function ItemCard({imagen, nombre, precio, stock}) {
    return (
        <div className='tarjeta'>
            <img src={`/assets/${imagen}`} alt="Producto"/>
            <p>{nombre}</p>
            <p><strong>${precio}</strong></p>
            <ItemCount stock={stock}/>
        </div>
    );
}

export default ItemCard;