import '../../pages/Nosotros.scss';
import Accordion from 'react-bootstrap/Accordion';

function Acordion() {
    return (
        <Accordion flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header><div>Headquarters</div></Accordion.Header>
                <Accordion.Body>
                    <div>
                        <h3>Diamond - Shop Headquarters</h3>
                        <p>Av. Libertador 15120</p>
                        <p>CABA, Buenos Aires</p>
                        <p>Argentina</p>
                    </div>
                    <div>
                        <h3>Contacto</h3>
                        <p>Telefono: +54 9 1135698415</p>
                        <p>Mail: DiamondSHOP@gmail.com</p>
                        <p>Lunes - Viernes de 10hs - 17hs</p>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header><div>Atención al Cliente</div></Accordion.Header>
                <Accordion.Body>
                    <div>
                        <h3>General</h3>
                        <p>En la seccion "FAQ" va a encontrar toda la información necesaria.</p>
                    </div>
                    <div>
                        <h3>Quejas</h3>
                        <p>Telefono: +54 9 1193684725</p>
                        <p>Mail: DiamondSHOPquejas@gmail.com</p>
                        <p>Lunes - Viernes de 12hs - 15hs</p>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Acordion;