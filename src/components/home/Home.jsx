import React from "react";
import Navbar from "../restaurants/Navbar";
import "./home.scss";

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <hr />
        <section className="home">
          <div className="home__section1">
            <h1 className="home__title">¿Qué comeremos hoy?</h1>
            <p className="home__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus similique perspiciatis eaque exercitationem.
            </p>
          </div>
          <div>
            <div className="contenedor">
              <div className={"dado2"}>
                <div className="lado uno"></div>
                <div className="lado dos"></div>
                <div className="lado tres"></div>
                <div className="lado cuatro"></div>
                <div className="lado cinco"></div>
                <div className="lado seis"></div>
              </div>
            </div>
            <button className="login__buttonSesion">Iniciar sesión</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
