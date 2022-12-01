import React from "react";
import Navbar from "../restaurants/Navbar";
import "./home.scss";
const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1>¿Qué comeremos hoy?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          similique perspiciatis eaque exercitationem. Ex eius aperiam corporis
          provident nihil facere aut natus unde sapiente esse, et voluptates
          nostrum culpa quos.
        </p>
        <div>
          <div className="contenedor">
            <div className={"dado"}>
              <div className="lado uno"></div>
              <div className="lado dos"></div>
              <div className="lado tres"></div>
              <div className="lado cuatro"></div>
              <div className="lado cinco"></div>
              <div className="lado seis"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
