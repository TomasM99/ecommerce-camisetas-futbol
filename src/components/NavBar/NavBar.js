import './NavBar.scss';

function NavBar() {
    return (
        <div className='navegador'>
            <img src="/assets/logo.png" alt="Logo"/>
            <ul className='navegador-menu'>
                <li><button>Home</button></li>
                <li><button>Productos</button></li>
                <li><button>Nosotros</button></li>
            </ul>
        </div>
    );
}

export default NavBar;