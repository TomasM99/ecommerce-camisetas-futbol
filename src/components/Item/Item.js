import ItemCount from '../ItemCount/ItemCount';
import './Item.scss';

function Item({data}) {

    const {imagen, nombre, precio, stock} = data;

    return (
        <div className='tarjeta'>
            <img src={`/assets/${imagen}`} alt="Producto"/>
            <p>{nombre}</p>
            <p><strong>${precio}</strong></p>
            <ItemCount stock={stock}/>
        </div>
    );
}

export default Item;