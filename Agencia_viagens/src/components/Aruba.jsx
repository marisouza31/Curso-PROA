import Style from './css/Aruba.module.css'
import ComponentesProps from './ComponentesProps'
import Bandeira_aruba from '../assets/Img/Bandeira_aruba.png'


function Aruba(){
    return(


        <section className={Style.fundo_aruba}>
            <h1>Venha conhecer a Aruba!</h1>

            <ComponentesProps
                lugar="Aruba"
                
                texto="A beleza da Escócia reside nas Highlands selvagens, nos lagos misteriosos e nos castelos cheios de história. As montanhas e a costa dramática, junto ao charme de Edimburgo, criam um cenário inesquecível de natureza e lendas."

                bandeira={Bandeira_aruba}
            />

        </section>
    )
}

export default Aruba