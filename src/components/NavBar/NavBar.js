import './NavBar.scss';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';
import DeplegableProductos from '../Bootstrap/Desplegable';

function NavBar() {
    return (
        <div className='navegador'>
            <Link to="/" className='logo'><img src="/assets/logo.png" alt="Logo"/></Link>
            <ul className='navegador-menu'>
                <Link to="/" className='navegador-item'><li><button className='boton-normal'>HOME</button></li></Link>
                <Link to="/productos" className='navegador-item'><li><button className='boton-desplegable'><DeplegableProductos /></button></li></Link>
                <Link to="/nosotros" className='navegador-item'><li><button className='boton-normal'>NOSOTROS</button></li></Link>
                <Link to="/favoritos" className='navegador-item'><li><button className='boton-normal'>FAVORITOS</button></li></Link>
            </ul>
            <CartWidget className='carrito'/>
        </div>
    );
}

export default NavBar;