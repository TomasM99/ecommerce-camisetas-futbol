import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.scss';
import ItemDetail from '../ItemDetail/ItemDetail';
import products from '../../utils/products';

function ItemDetailContainer({division}) {

    const [item, setItem] = useState({});
    const {id} = useParams();

    const getItem = new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(filterItem())
        }, 500)
    });

    function filterItem(){
        return products[parseInt(id) - 1];
    }

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
            {Object.keys(item).length > 0 && <ItemDetail data={item}/>}
        </div>
    );
}

export default ItemDetailContainer;