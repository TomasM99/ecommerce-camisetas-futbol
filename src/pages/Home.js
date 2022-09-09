import './Home.scss';
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemList from '../components/ItemList/ItemList';
import { collection, getDocs} from "firebase/firestore"
import db from '../utils/firebaseConfig';

const Home = () => {
    const [listaProductos, setListaProductos] = useState([]);

    const getProductos = async() => {
        const productCollection = collection(db, 'productos');
        const productSnapshot = await getDocs(productCollection);
        const productList = productSnapshot.docs.map( (doc) => {
            let product = doc.data();
            product.id = doc.id;
            return product;
        });
        return productList.splice(0, 4);
    }

    useEffect( () => {
        getProductos().then((res) => {
            setListaProductos(res);
        }).catch((error) => {
            console.log("No se pudieron cargar los productos");
        })
    }, [])

    return(
        <>
            <div className='home-banner'>
                <div className='banner-texto'>
                    <div>
                        <h1>LA PASIÓN POR LA SELECCIÓN</h1>
                        <p>La camiseta suplente pronto estará disponible para la compra. Envío gratis a todo el país!</p>
                    </div>
                    <div>
                        <button className='btn btn-outline-dark banner-boton'>RESERVAR AHORA</button>
                    </div>
                </div>
                <div className='banner-imagenes'>
                    <img src='/assets/banner-1.webp' alt='Banner' className='banner-i-1'/>
                    <img src='/assets/banner-2.webp' alt='Banner' className='banner-i-2'/>
                </div>
            </div>
            <div className='home-botones-categorias'>
                <Link to="/category/seleccion" className='boton-link'><button className='btn btn-outline-dark boton-categoria'>SELECCIONES</button></Link>
                <Link to="/category/club-argentino" className='boton-link'><button className='btn btn-outline-dark boton-categoria'>CLUBES ARGENTINOS</button></Link>
                <Link to="/category/club-europeo" className='boton-link'><button className='btn btn-outline-dark boton-categoria'>CLUBES EUROPEOS</button></Link>
            </div>
            <div>
                <h1 className='home-titulo'>Productos populares</h1>
                <div className='home-lista-items'>
                    <ItemList data={listaProductos}/>
                </div>
            </div>
        </>
    )
}

export default Home