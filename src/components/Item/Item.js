import './Item.scss';
import {Link} from 'react-router-dom';

function Item({data}) {

    const {id, imagen, nombre, precio} = data;

    return (
        <div className='tarjeta grow'>
            <Link to={`/item/${id}`} className="items-tarjeta">
                <img src={`/assets/${imagen}`} alt="Producto"/>
                <p className='nombre-tarjeta'>{nombre}</p>
                <p className='precio-tarjeta'><strong>${precio}</strong></p>
            </Link>
        </div>
    );
}

export default Item;