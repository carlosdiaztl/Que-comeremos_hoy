import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "./dice.scss";

const Dice = () => {
  const lista = [
    "pizzas juan",
    "pizza picolo",
    "pizza carlota",
    "carlos pizza",
    "pizza picolo",
    "pizza dominos",
    "pizza daikmaku",
    " pizza lauras",
    " kakos pizza",
  ];
  const [dado, setDado] = useState(false);
  useEffect(() => {
    if (dado) {
      setTimeout(() => {
        setDado(false);
      }, 2000);
    }
    if (dado === false) {
      const x = Math.floor(Math.random() * lista.length);
      console.log(x);
      const y = lista.at(x);
      console.log(y);
      Swal.fire("tu restaurante sera", `${y}`, "info");
    }
  }, [dado]);

  const changeDado = () => {
    setDado(true);
  };
  return (
    <div className="contenedor">
      {dado ? (
        <div className={"dado"}>
          <div className="lado uno"></div>
          <div className="lado dos"></div>
          <div className="lado tres"></div>
          <div className="lado cuatro"></div>
          <div className="lado cinco"></div>
          <div className="lado seis"></div>
        </div>
      ) : (
        <div onClick={changeDado} className={"dados"}>
          <div className="lado uno"></div>
          <div className="lado dos"></div>
          <div className="lado tres"></div>
          <div className="lado cuatro"></div>
          <div className="lado cinco"></div>
          <div className="lado seis"></div>
        </div>
      )}
    </div>
  );
};

export default Dice;
