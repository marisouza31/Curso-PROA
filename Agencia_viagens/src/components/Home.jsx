import Style from './css/Home.module.css'
import mala from '../assets/Img/mala.jpg'
import mala2 from '../assets/Img/mala.png'

function Home () {
    return (
        <section className={Style.fundo_home}>
            <img src={mala} className={Style.mala} alt="Mala_viagem" />
            <div className={Style.texto_home}>
                <h1>Encontre aqui a viagem dos seus sonhos!!</h1>
                <p>Transforme seus sonhos em realidade! Explore destinos paradisíacos, 
                conheça novas culturas e crie memórias inesquecíveis. Nossa plataforma
                oferece as melhores opções de pacotes turísticos, com preços acessíveis 
                e atendimento personalizado para tornar sua viagem perfeita do início 
                ao fim.
                </p>
            </div>
        </section>
    )
}

export default Home