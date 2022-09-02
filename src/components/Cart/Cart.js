import './Cart.scss';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ItemCart from './ItemCart';
import Modal from '../Modal/Modal';
import db from '../../utils/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore'
import BeatLoader from "react-spinners/BeatLoader";

function Cart() {
    const {productosCart, total, clear} = useContext(CartContext);
    let totalPagar = productosCart.map(prod => (prod.cantidad * prod.precio)).reduce((prev, curr) => prev + curr, 0);

    const [showModal, setShowModal] = useState(false);
    const [spinner, setSpinner] = useState(false)
    const [success, setSuccess] = useState(false);

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

    function avisarCompra(mensaje){
        toast.success(mensaje, {
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
        setSpinner(true);
        setTimeout(() => {
            setSpinner(false);
            avisarCompra("Compra realizada!");
        }, 1500)
    }
    const storeOrder = async (newOrder) => {
        const collectionOrder = collection(db, 'ordenes');
        const orderDoc = await addDoc(collectionOrder, newOrder);
        setSuccess(orderDoc.id);
    }

    return (
        <div>
            <h2 className='detalle-compra'>Detalle de Compra</h2>
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
                        <button className='btn btn-outline-dark' onClick={() => setShowModal(true)}>Pagar</button>
                    </div>
                </div>
            </div>
            {showModal &&
                <Modal close={() => setShowModal()}>
                    {success ? (
                        <>
                            <h2 className='titulo-modal'>Compra exitosa!</h2>
                            <p>Orden con ID: {success}</p>
                        </>
                    ) : (
                        <>
                            <h2 className='titulo-modal'>Datos de Contacto</h2>
                            <form className='formulario-compra' onSubmit={handleSubmit}>
                                <div className='formulario-datos'>
                                    <div className='formulario-datos-contacto'>
                                        <label>Nombre completo</label>
                                        <input for='nombre'
                                            id='nombre'
                                            type='text' 
                                            name='name' 
                                            placeholder='Tu nombre'
                                            onChange={handleChange}
                                            value={dataForm.name}
                                        />
                                        <label for='telefono'>Telefono</label>
                                        <input 
                                            id='telefono'
                                            type='number'
                                            name='phone'
                                            placeholder='Tu celular'
                                            onChange={handleChange}
                                            value={dataForm.phone}
                                        />
                                        <label for='mail'>Mail de contacto</label>
                                        <input 
                                            id='mail'
                                            type='email'
                                            name='email'
                                            placeholder='Tu mail'
                                            onChange={handleChange}
                                            value={dataForm.email}
                                        />
                                    </div>
                                    <div className='formulario-datos-pago'>
                                        <div className='formulario-radio'>
                                            <h4>Metodo de pago</h4>
                                            <div>
                                                <input id='efectivo' type='radio' name='pago'></input>
                                                <label for='efectivo'>Efectivo</label>
                                            </div>
                                            <div>
                                                <input id='mp' type='radio' name='pago'></input>
                                                <label for='mp'>Mercado Pago</label>
                                            </div>
                                            <div>
                                                <input id='tarjeta' type='radio' name='pago'></input>
                                                <label for='tarjeta'>Tarjeta</label>
                                            </div>
                                        </div>
                                        <div className='formulario-entrega'>
                                            <div><strong>ENVIO GRATIS</strong></div>
                                            <img src={`/assets/entrega.png`} alt="Envio"/>
                                        </div>
                                        <div className='formulario-entrega'>
                                            <div><strong>RETIRO EN TIENDA</strong></div>
                                            <img src={`/assets/tienda.png`} alt="Tienda"/>
                                        </div>
                                    </div>
                                </div>
                                <div className='formulario-final'>
                                    <img src={`/assets/diamante-compra.png`} alt="Diamante compra"/>
                                    <button className='btn btn-outline-dark' type="submit">Realizar compra</button>
                                </div>
                            </form>
                        </>
                    )}
                </Modal>
            }
            {spinner &&
                <div className='spinner-cart'>
                    <BeatLoader color="#000000" loading margin={5} size={10} />
                </div>
            }
        </div>
    );
}

export default Cart;