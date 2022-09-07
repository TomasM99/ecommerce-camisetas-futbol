import './Nosotros.scss';
import Acordion from '../components/Bootstrap/Acordion';

const Nosotros = () => {
    return(
        <>
            <div className='titulo-nosotros'>
                <h1>¡BIENVENIDOS!</h1>
            </div>
            <div className='parrafo-nosotros'>
                <p>
                    Diamond - Shop es una marca nacional de distribución de camisetas que trabaja con marcas líder
                    y busca brindar la mayor de las calidades en sus productos.
                </p>
            </div>
            <div className='cards-info-nosotros'>
                <div className='card-info-nosotros'>
                    <img src="/assets/marca-lider-b.png" alt="Marca"/>
                    <p>Marca líder en distribución e importación.</p>
                </div>
                <div className='card-info-nosotros'>
                    <img src="/assets/tierra-b.png" alt="Tierra"/>
                    <p>Producción 100% amigable con el ambiente.</p>
                </div>
                <div className='card-info-nosotros'>
                    <img src="/assets/industria-b.png" alt="Industria"/>
                    <p>Industria nacional en la totalidad de la producción.</p>
                </div>
            </div>
            <div className='marcas-nosotros'>
                <img src="/assets/nike.png" alt="Nike"/>
                <img src="/assets/adidas.png" alt="Adidas"/>
                <img src="/assets/puma.png" alt="Puma"/>
                <img src="/assets/reebok.png" alt="Reebok"/>
                <img src="/assets/topper.png" alt="Topper"/>
            </div>
            <div className='cards-tipos-nosotros'>
                <div className='card-tipo'>
                    <img src="/assets/tipo-1.jpg" alt="Señor"/>
                    <h3>Matías Martín</h3>
                    <p>President and CEO</p>
                </div>
                <div className='card-tipo'>
                    <img src="/assets/tipo-2.jpg" alt="Señor"/>
                    <h3>Alberto Puentes</h3>
                    <p>Co-Founder</p>
                </div>
                <div className='card-tipo'>
                    <img src="/assets/tipo-3.jpg" alt="Señor"/>
                    <h3>Sabrina Reina</h3>
                    <p>Chief Operating Officer</p>
                </div>
            </div>
            <div className='oficina-nosotros'>
                <div className='oficina-foto'>
                    <img src="/assets/oficinas.jpg" alt="Señor"/>
                    <div className='oficina-icono'><img src="/assets/informacion.png" alt="Info"/></div>
                </div>
                <div className='oficina-info'>
                    <h3>Diamond - Shop Headquarters</h3>
                    <p>Av. Libertador 15120</p>
                    <p>CABA, Buenos Aires</p>
                    <p>Argentina</p>
                </div>
            </div>
            <div className='contacto-nosotros'>
                <h3 className='contacto-nosotros-titulo'>¡Contactanos!</h3>
                <Acordion />
            </div>
        </>
    )
}

export default Nosotros