import './Item.scss';
import {Link} from 'react-router-dom';

function Item({data}) {

    const {id, imagen, nombre, precio} = data;

    return (
        <div className='tarjeta'>
            <Link to={`/productos/${id}`} className="items-tarjeta">
                <img src={`/assets/${imagen}`} alt="Producto"/>
                <p>{nombre}</p>
                <p><strong>${precio}</strong></p>
            </Link>
        </div>
    );
}

export default Item;