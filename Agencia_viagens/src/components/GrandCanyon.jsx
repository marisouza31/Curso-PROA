import Style from './css/GrandCanyon.module.css'
import ComponentesProps from './ComponentesProps'
import Bandeira_grandcan from '../assets/Img/grandcan.svg'

function GrandCanyon(){
    return(


        <section className={Style.fundo_grandcanyon}>
            <h1>Venha conhecer a GrandCanyon!</h1>

               <ComponentesProps
                lugar="GrandCanyon"
                
                texto="A beleza da Escócia reside nas Highlands selvagens, nos lagos misteriosos e nos castelos cheios de história. As montanhas e a costa dramática, junto ao charme de Edimburgo, criam um cenário inesquecível de natureza e lendas."

                bandeira={Bandeira_grandcan}
            />

        </section>
    )
}

export default GrandCanyon