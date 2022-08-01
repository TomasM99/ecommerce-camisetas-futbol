import { useEffect, useState } from 'react';
import './ItemDetailContainer.scss';
import ItemDetail from '../ItemDetail/ItemDetail';
import products from '../../utils/products';

function ItemDetailContainer({division}) {

    const [item, setItem] = useState([]);

    const getItem = new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(products[0])
        }, 500)
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
            <h2>{division}</h2>
            <ItemDetail data={item}/>
        </div>
    );
}

export default ItemDetailContainer;