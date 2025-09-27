import React from "react";
import styles from "./Main.module.css";

import Topo from "../Topo/Topo";
import LateralEsquerda from "../LateralEsquerda/LateralEsquerda";
import Conteudo from "../Conteudo/Conteudo";
import LateralDireita from "../LateralDireita/LateralDireita";
import Rodape from "../Rodape/Rodape";

function Main() {
  return (
    <div className={styles.main}>
      <Topo />
      <div className={styles.body}>
        <LateralEsquerda />
        <Conteudo />
        <LateralDireita />
      </div>
      <Rodape />
    </div>
  );
}

export default Main;
