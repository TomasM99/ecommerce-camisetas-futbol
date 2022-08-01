import { useEffect, useState } from 'react';
import './ItemDetailContainer.scss';
import ItemDetail from '../ItemDetail/ItemDetail';
import product from '../../utils/product-mock';

function ItemDetailContainer() {

    const [item, setItem] = useState([]);

    const getItem = new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(product[0])
        }, 2000)
    });

    useEffect( () => {
        getItem.then((res) => {
            setItem(res);
        }).catch((error) => {
            console.log("No se pudieron cargar los productos")
        })
    }, [])

    return (
        <div>
            <h2>Detalle a terminar</h2>
            <ItemDetail data={item}/>
        </div>
    );
}

export default ItemDetailContainer;