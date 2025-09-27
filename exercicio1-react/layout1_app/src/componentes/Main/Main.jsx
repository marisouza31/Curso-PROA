import React from "react";
import styles from "./Main.module.css";

import Layer1 from "../Layer1/Layer1";
import Layer2 from "../Layer2/Layer2";
import Layer3 from "../Layer3/Layer3";
import Layer4 from "../Layer4/Layer4";
import Layer5 from "../Layer5/Layer5";

function Main() {
  return (
    <div className={styles.main}>
      <Layer1 />
      <Layer2 />
      <Layer3 />
      <Layer4 />
      <Layer5 />
    </div>
  );
}

export default Main;
