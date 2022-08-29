import './Cart.scss';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ItemCart from './ItemCart';
import Modal from '../Modal/Modal';
import db from '../../utils/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore'

function Cart() {
    const {productosCart, total, clear} = useContext(CartContext);
    let totalPagar = productosCart.map(prod => (prod.cantidad * prod.precio)).reduce((prev, curr) => prev + curr, 0);

    const [showModal, setShowModal] = useState(false);
    const [success, setSuccess] = useState();

    const [dataForm, setDataForm] = useState({
        name: "",
        phone: "",
        email: ""
    })
    const [orden, setOrden] = useState({
        items: productosCart.map((pro) => {
            return {
                id: pro.id,
                tittle: pro.nombre,
                price: pro.precio,
                quantity: pro.cantidad
            }
        }),
        buyer: {},
        total: totalPagar,
        date: new Date()
    })

    function avisarConfirmacion(mensaje){
        toast.warn(mensaje, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
            });
    }

    function handleChange(e){
        setDataForm({...dataForm, [e.target.name] : e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault();
        storeOrder({...orden, buyer: dataForm});
    }
    const storeOrder = async (newOrder) => {
        const collectionOrder = collection(db, 'ordenes');
        const orderDoc = await addDoc(collectionOrder, newOrder);
        setSuccess(orderDoc.id);
    }

    return (
        <div>
            <h2>Detalle de Compra</h2>
            <div className='contenedor-cart'>
                <div className='contenedor-items-cart'>
                    <h2>Productos</h2>
                    {productosCart.map((producto) => {return <ItemCart key={producto.id} data={producto} />})}
                </div>
                <div className='contenedor-total-cart'>
                    <div className='total-cart'>
                        <h2>Total</h2>
                        <p><strong>Total a pagar: </strong>${totalPagar}</p>
                        <p><strong>Cantidad: </strong>{total}</p>
                    </div>
                    <div className='botones-cart'>
                        <button className='btn btn-outline-dark' onClick={() => {
                            clear();
                            avisarConfirmacion("Carrito vaciado!");
                        }}>Vaciar carrito</button>
                        <button className='btn btn-outline-dark' onClick={() => setShowModal(true)}>Terminar compra</button>
                    </div>
                </div>
            </div>
            {showModal &&
                <Modal title={"Datos de contacto"} close={() => setShowModal()}>
                    {success ? (
                        <>
                            <h2>Orden generada</h2>
                            <p>Orden con ID: {success}</p>
                        </>
                    ) : (
                        <form onSubmit={handleSubmit}>
                        <input 
                            type='text' 
                            name='name' 
                            placeholder='Tu nombre'
                            onChange={handleChange}
                            value={dataForm.name}
                        />
                        <input 
                            type='number'
                            name='phone'
                            placeholder='Tu celular'
                            onChange={handleChange}
                            value={dataForm.phone}
                        />
                        <input 
                            type='email'
                            name='email'
                            placeholder='Tu mail'
                            onChange={handleChange}
                            value={dataForm.email}
                        />
                        <button type="submit">Realizar compra</button>
                    </form>
                    )}
                </Modal>
            }
        </div>
    );
}

export default Cart;