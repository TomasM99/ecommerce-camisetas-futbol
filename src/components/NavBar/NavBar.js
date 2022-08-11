import './NavBar.scss';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <>
            <div className='navegador'>
                <Link to="/" className='logo'><img src="/assets/logo.png" alt="Logo"/></Link>
                <ul className='navegador-menu'>
                    <Link to="/" className='navegador-item'><li><button>Home</button></li></Link>
                    <Link to="/productos" className='navegador-item'><li><button>Productos</button></li></Link>
                    <Link to="/nosotros" className='navegador-item'><li><button>Nosotros</button></li></Link>
                </ul>
                <CartWidget className='carrito'/>
            </div>
            <div className='categorias'>
                <ul className='categorias-lista'>
                    <Link to="/category/seleccion" className='categoria-item'><li><button>Selecciones</button></li></Link>
                    <Link to="/category/club-argentino" className='categoria-item'><li><button>Clubs Argentinos</button></li></Link>
                    <Link to="/category/club-europeo" className='categoria-item'><li><button>Clubs Europeos</button></li></Link>
                </ul>
            </div>
        </>
    );
}

export default NavBar;