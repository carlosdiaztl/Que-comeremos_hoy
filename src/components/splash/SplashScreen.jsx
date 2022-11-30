import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  const navigate = useNavigate();
  const handlePage = () => {
    navigate();
  };
  return (
    <>
      <div className="splash">
        <section className="splash__main">
          <button onClick={handlePage} className="splash__button">
            {/* <img src={image1} alt="" className="splash__image1" /> */}
          </button>
        </section>
      </div>
    </>
  );
};

export default SplashScreen;
