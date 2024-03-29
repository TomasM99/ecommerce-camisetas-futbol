import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemListContainer.scss';
import ItemList from '../ItemList/ItemList';
import { collection, getDocs} from "firebase/firestore"
import db from '../../utils/firebaseConfig';

function ItemListContainer({division}) {

    const [listaProductos, setListaProductos] = useState([]);
    const {category} = useParams();

    const getProductos = async() => {
        const productCollection = collection(db, 'productos');
        const productSnapshot = await getDocs(productCollection);
        const productList = productSnapshot.docs.map( (doc) => {
            let product = doc.data();
            product.id = doc.id;
            return product;
        });
        if(category){
            return productList.filter((product) => product.categoria === category);
        }else{
            return productList;
        }
    }

    useEffect( () => {
        getProductos().then((res) => {
            setListaProductos(res);
        }).catch((error) => {
            console.log("No se pudieron cargar los productos");
        })
    }, [category])

    return (
        <div className='seccion-items'>
            {category === 'seleccion' && (
                <h2 className='titulo-items'>Selecciones</h2>
            )}
            {category === 'club-europeo' && (
                <h2 className='titulo-items'>Clubes Europeos</h2>
            )}
            {category === 'club-argentino' && (
                <h2 className='titulo-items'>Clubes Argentinos</h2>
            )}
            <h2 className='titulo-items'>{division}</h2>
            <div className='lista-items'>
                <ItemList data={listaProductos}/>
            </div>
        </div>
    );
}

export default ItemListContainer;