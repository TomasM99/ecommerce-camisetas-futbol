import './Desplegable.scss';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';

function DeplegableProductos() {
    return (
        <NavDropdown title="Productos" id="basic-nav-dropdown">
            <NavDropdown.Item><Link to="/productos"><li><button>Productos</button></li></Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/category/seleccion"><li><button>Selecciones</button></li></Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/category/club-argentino"><li><button>Clubs Argentinos</button></li></Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/category/club-europeo"><li><button>Clubs Europeos</button></li></Link></NavDropdown.Item>
        </NavDropdown>
    );
}


export default DeplegableProductos;