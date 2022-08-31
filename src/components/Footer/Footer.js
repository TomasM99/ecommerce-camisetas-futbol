import './Footer.scss';

const Footer = () => {

    return(
        <footer className="contenedor-footer">
            <div>
                <p>© DIAMOND - SHOP</p>
            </div>
            <div className='redes-footer'>
                <img src="/assets/facebook-b.png" alt="Facebook"/>
                <img src="/assets/instagram-b.png" alt="Instagram"/>
                <img src="/assets/twitter-b.png" alt="Twitter"/>
                <img src="/assets/pinterest-b.png" alt="Pinterest"/>
                <img src="/assets/whatsapp-b.png" alt="Whatsapp"/>
            </div>
        </footer>
    )
}

export default Footer;