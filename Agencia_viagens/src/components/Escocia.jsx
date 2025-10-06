import Style from '../components/css/Escocia.module.css'
import ComponentesProps from './ComponentesProps'
import Bandeira_escocia from '../assets/Img/Bandeira_escocia.png'

function Escocia(){
    return(


        <section className={Style.fundo_escocia}>
            <h1>Venha conhecer a Escócia!</h1>

            <ComponentesProps
                lugar="Escócia"
                
                texto="A beleza da Escócia reside nas Highlands selvagens, nos lagos misteriosos e nos castelos cheios de história. As montanhas e a costa dramática, junto ao charme de Edimburgo, criam um cenário inesquecível de natureza e lendas."

                bandeira={Bandeira_escocia}
            />

        </section>
    )
}

export default Escocia