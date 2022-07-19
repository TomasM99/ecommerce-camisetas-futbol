import './NavBar.scss';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <div className='navegador'>
            <img src="/assets/logo.png" alt="Logo"/>
            <ul className='navegador-menu'>
                <li><button>Home</button></li>
                <li><button>Productos</button></li>
                <li><button>Nosotros</button></li>
            </ul>
            <CartWidget />
        </div>
    );
}

export default NavBar;