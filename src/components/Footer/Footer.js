import './Footer.scss';

const Footer = () => {

    return(
        <footer className="contenedor-footer">
            <div>
                <p>© Diamond - Shop</p>
            </div>
            <div className='redes-footer'>
                <img src="/assets/facebook.png" alt="Facebook"/>
                <img src="/assets/instagram.png" alt="Instagram"/>
                <img src="/assets/twitter.png" alt="Twitter"/>
                <img src="/assets/pinterest.png" alt="Pinterest"/>
                <img src="/assets/whatsapp.png" alt="Whatsapp"/>
            </div>
        </footer>
    )
}

export default Footer;