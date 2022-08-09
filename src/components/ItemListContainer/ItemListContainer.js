import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemListContainer.scss';
import ItemList from '../ItemList/ItemList';
import products from '../../utils/products';

function ItemListContainer({division}) {

    const [listaProductos, setListaProductos] = useState([]);
    const {category} = useParams();

    const filterProducts = products.filter((product) => product.categoria === category);

    const getProductos = new Promise((resolve, reject) => {
        setTimeout( () => {
            if(category){
                resolve(filterProducts);
            }else{
                resolve(products)
            }
        }, 500)
    });

    useEffect( () => {
        getProductos.then((res) => {
            setListaProductos(res);
        }).catch((error) => {
            console.log("No se pudieron cargar los productos")
        })
    }, [category])

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