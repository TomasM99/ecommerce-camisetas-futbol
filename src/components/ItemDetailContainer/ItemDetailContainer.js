import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import db from '../../utils/firebaseConfig';
import { doc, getDoc } from "firebase/firestore"

function ItemDetailContainer() {

    const [item, setItem] = useState({});
    const {id} = useParams();

    const getItem = async() => {
        const docRef = doc(db, 'productos', id);
        const docSnapshot = await getDoc(docRef);
        let product = docSnapshot.data();
        product.id = docSnapshot.id;
        return product;
    }

    useEffect( () => {
        getItem().then((res) => {
            setItem(res);
        }).catch((error) => {
            console.log("No se pudieron cargar los productos");
        })
    }, [id])

    return (
        <div>
            {Object.keys(item).length > 0 && <ItemDetail data={item}/>}
        </div>
    );
}

export default ItemDetailContainer;