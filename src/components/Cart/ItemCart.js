import './ItemCart.scss';

function ItemCart({data}) {

    const {imagen, nombre, precio, cantidad} = data;

    return (
        <div className="tarjeta-cart">
            <img src={`/assets/${imagen}`} alt="Producto"/>
            <p><strong>Producto: </strong>{nombre}</p>
            <p><strong>Precio: </strong>${precio}</p>
            <p><strong>Cantidad: </strong>{cantidad}</p>
            <p><strong>Total: </strong>{cantidad*precio}</p>
        </div>
    );
}

export default ItemCart;