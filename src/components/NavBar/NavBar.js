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
                <CartWidget />
            </div>
            <div className='categorias'>
                <ul className='categorias-lista'>
                    <Link to="/category/1" className='categoria-item'><li><button>Selecciones</button></li></Link>
                    <Link to="/category/2" className='categoria-item'><li><button>Clubs Argentinos</button></li></Link>
                    <Link to="/category/3" className='categoria-item'><li><button>Clubs Europeos</button></li></Link>
                </ul>
            </div>
        </>
    );
}

export default NavBar;