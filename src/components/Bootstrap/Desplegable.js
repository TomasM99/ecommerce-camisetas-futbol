import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';

function DeplegableProductos() {
    return (
        <NavDropdown title="PRODUCTOS" id="basic-nav-dropdown">
            <NavDropdown.Item><Link to="/productos"><li><button>PRODUCTOS</button></li></Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/category/seleccion"><li><button>SELECCIONES</button></li></Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/category/club-argentino"><li><button>CLUBS ARGENTINOS</button></li></Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/category/club-europeo"><li><button>CLUBS EUROPEOS</button></li></Link></NavDropdown.Item>
        </NavDropdown>
    );
}


export default DeplegableProductos;