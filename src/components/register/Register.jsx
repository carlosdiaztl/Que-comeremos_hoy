import React from "react";
import { Link } from "react-router-dom";
import logoFacebook from "../../assets/facebook (1).png";
import logoGoogle from "../../assets/logotipo-de-google-glass.png";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <section className="register__image">
        <figure>
          <img src="" alt="image" />
        </figure>
      </section>
      <article className="register__article">
        <h1 className="register__tittle">Regístrate</h1>
        <form className="register__form">
          <label className="register__label">

            <section className="register__inputContainer">
              <input required type="text" className="register__input" />
              <span className="register__span">Nombre</span>
            </section>

            <section className="register__inputContainer">
              <input required type="text" className="register__input" />
              <span className="register__span">Apellido</span>
            </section>

            <section className="register__inputContainer">
              <input type="email" required className="register__input" />
              <span className="register__span">Correo electrónico</span>
            </section>

            <section className="register__inputContainer">
              <input required type="password" className="register__input" />
              <span className="register__span">Contraseña</span>
            </section>
            
          </label>
        </form>
        <button className="register__buttonSesion">Regístrate</button>
        <p>
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login" className="register__link">
            Inicia sesión aquí
          </Link>
        </p>
        <button className="register__facebook">
          <img
            src={logoFacebook}
            alt="Logo Facebook"
            className="register__icon"
          />{" "}
          Continuar con Facebook
        </button>
        <button className="register__google">
          <img src={logoGoogle} alt="Logo Google" className="register__icon" />{" "}
          Continuar con Google
        </button>
      </article>
    </div>
  );
};

export default Register;
