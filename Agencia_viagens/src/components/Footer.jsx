import Style from './css/Footer.module.css'
import facebook from '../assets/img/face.jfif'
import instagram from '../assets/img/insta.jfif'
import TikTok from '../assets/img/tiktok.png'
import whatsapp from '../assets/img/whtas.png'

function Footer () {
    return (
        <footer className={Style.fundo_footer}>

            <p>Siga-nos em nossas redes sociais</p>

            <div className={Style.redes_sociais}>
                <img src={facebook} alt="Face" />
                <img src={instagram} alt="Insta" />
                <img src={TikTok} alt="Tiktok" />
                <img src={whatsapp} alt="whatsapp" />
            </div>

            <p>Telefone : 11 00000-0000</p>
            <br />
        </footer>
    )
}

export default Footer   