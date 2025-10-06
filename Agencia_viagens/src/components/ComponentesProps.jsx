import Style from './css/ComponentesProps.module.css'


function ComponentesProps({lugar, texto,bandeira}){
    return(

        <div className={Style.corpo_texto}>
            <h2>Venha conhecer esse lugar incrivel {lugar}!!</h2>
            <p>{texto}</p>

            <img src={bandeira} alt="Logo da firma" className={Style.imagem_props}/>

        </div>

    )
}

export default ComponentesProps