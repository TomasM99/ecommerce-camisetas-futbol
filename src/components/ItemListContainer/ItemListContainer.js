import { useEffect, useState } from 'react';
import './ItemListContainer.scss';
import ItemList from '../ItemList/ItemList';
import products from '../../utils/products';

function ItemListContainer({division}) {

    const [listaProductos, setListaProductos] = useState([]);

    const getProductos = new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(products)
        }, 1000)
    });

    useEffect( () => {
        getProductos.then((res) => {
            setListaProductos(res);
        }).catch((error) => {
            console.log("No se pudieron cargar los productos")
        })
    }, [])

    return (
        <div className='seccion-items'>
            <h2>{division}</h2>
            <div className='lista-items'>
                <ItemList data={listaProductos}/>
            </div>
        </div>
    );
}

export default ItemListContainer;