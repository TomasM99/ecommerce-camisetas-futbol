import './Item.scss';

function Item({data}) {

    const {imagen, nombre, precio} = data;

    return (
        <div className='tarjeta'>
            <img src={`/assets/${imagen}`} alt="Producto"/>
            <p>{nombre}</p>
            <p><strong>${precio}</strong></p>
        </div>
    );
}

export default Item;