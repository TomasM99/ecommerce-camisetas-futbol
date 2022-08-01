import './NavBar.scss';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <div className='navegador'>
            <img src="/assets/logo.png" alt="Logo"/>
            <ul className='navegador-menu'>
                <Link to="/" className='navegador-item'><li><button>Home</button></li></Link>
                <Link to="/productos" className='navegador-item'><li><button>Productos</button></li></Link>
                <Link to="nosotros" className='navegador-item'><li><button>Nosotros</button></li></Link>
            </ul>
            <CartWidget />
        </div>
    );
}

export default NavBar;