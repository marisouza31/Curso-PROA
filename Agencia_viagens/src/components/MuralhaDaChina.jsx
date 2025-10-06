import Style from '../components/css/MuralhaDaChina.module.css'
import ComponentesProps from './ComponentesProps'
import Bandeira_muralha from '../assets/Img/Bandeira_china.png'


function MuralhaDaChina(){
    return(


        <section className={Style.fundo_muralha}>
            <h1>Venha conhecer as Muralhas da China!</h1>

            <ComponentesProps
                lugar="Muralha da China"
                
                texto="A beleza da Escócia reside nas Highlands selvagens, nos lagos misteriosos e nos castelos cheios de história. As montanhas e a costa dramática, junto ao charme de Edimburgo, criam um cenário inesquecível de natureza e lendas."

                bandeira={Bandeira_muralha}
            />

        </section>
    )
}

export default MuralhaDaChina