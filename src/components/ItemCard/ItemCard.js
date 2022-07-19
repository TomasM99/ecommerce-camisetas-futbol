import './ItemCard.scss';

function ItemCard({imagen, nombre, precio}) {
    return (
        <div className='tarjeta'>
            <img src={`/assets/${imagen}`} alt="Producto"/>
            <p>{nombre}</p>
            <p>${precio}</p>
            <button>COMPRAR</button>
        </div>
    );
}

export default ItemCard;