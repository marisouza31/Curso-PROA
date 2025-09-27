import React from "react";
import styles from "./Conteudo.module.css";
import cameraGif from "../../assets/camera.gif";

function Conteudo() {
  return (
    <div className={styles.conteudo}>
      Conteúdo
      <img src={cameraGif} alt="foto" className={styles.camera} />
    </div>
  );
}

export default Conteudo;
