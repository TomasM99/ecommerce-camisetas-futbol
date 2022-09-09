import './Home.scss';

const Home = () => {
    return(
        <>
            <div className='home-banner'>
                <div className='banner-texto'>
                    <div>
                        <h1>LA PASIÓN POR LA SELECCIÓN</h1>
                        <p>La camiseta suplente pronto estará disponible para la compra. Envío gratis a todo el país!</p>
                    </div>
                    <div>
                        <button className='btn btn-outline-dark banner-boton'>RESERVAR AHORA</button>
                    </div>
                </div>
                <div className='banner-imagenes'>
                    <img src='/assets/banner-1.webp' alt='Banner' className='banner-i-1'/>
                    <img src='/assets/banner-2.webp' alt='Banner' className='banner-i-2'/>
                </div>
            </div>
        </>
    )
}

export default Home