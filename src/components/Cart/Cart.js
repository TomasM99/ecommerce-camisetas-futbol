import './Cart.scss';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ItemCart from './ItemCart';
import Modal from '../Modal/Modal';

function Cart() {
    const [showModal, setShowModal] = useState(false);
    const [orden, setOrden] = useState({
        items: [],
        buyer: {

        },
        total: 0,
        date: new Date()
    })
    const [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        email: ''
    })

    const {productosCart, total, clear} = useContext(CartContext);

    let totalPagar = productosCart.map(prod => (prod.cantidad * prod.precio)).reduce((prev, curr) => prev + curr, 0);

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
        console.log(e.target.value);
    }

    return (
        <div className='contenedor-cart'>
            <h2>Productos en el carrito</h2>
            {productosCart.map((producto) => {return <ItemCart key={producto.id} data={producto} />})}
            <div className='contenedor-total-cart'>
                <div className='total-cart'>
                    <p><strong>Total a pagar: </strong>${totalPagar}</p>
                    <p><strong>Cantidad: </strong>{total}</p>
                </div>
                <img src={`/assets/trash.png`} alt="Tachito" className='basura-cart' onClick={() => {
                    clear();
                    avisarConfirmacion("Carrito vaciado!");
                }}/>
            </div>
            <button onClick={() => setShowModal(true)}>Terminar compra</button>
            {showModal &&
                <Modal title={"Datos de contacto"} close={() => setShowModal()}>
                    <form>
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
                        <button type='submit'>Realizar compra</button>
                    </form>
                </Modal>
            }
        </div>
    );
}

export default Cart;