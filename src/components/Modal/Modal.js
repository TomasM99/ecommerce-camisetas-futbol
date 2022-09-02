import './Modal.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import {Link} from 'react-router-dom';

const Modal = ({close, children}) => {
    const {clear} = useContext(CartContext);

    return(
        <div className='modal-container'>
            <Link to="/">
                <img src={`/assets/cancel.png`} alt="Tachito" className='cruz' onClick={() => {
                    close(false);
                    clear();
                }}/>
            </Link>
            {children}
        </div>
    )
}

export default Modal;