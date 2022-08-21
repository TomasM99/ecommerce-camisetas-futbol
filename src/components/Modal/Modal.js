import './Modal.scss';

const Modal = ({title, close, children}) => {
    return(
        <div className='modal-container'>
            <h2>{title}</h2>
            <img src={`/assets/cancel.png`} alt="Tachito" onClick={() => close(false)}/>
            {children}
        </div>
    )
}

export default Modal;