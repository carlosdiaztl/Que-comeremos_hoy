import React from "react";
import "./login.scss";
import logoFacebook from "../../assets/facebook (1).png";
import logoGoogle from "../../assets/logotipo-de-google-glass.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <section className="login__image">
        <figure>
          <img src="" alt="image" />
        </figure>
      </section>
      <article className="login__article">
        <h1 className="login__tittle">Iniciar sesión</h1>
        <form className="login__form">
          <label className="login__label">
            <section className="login__inputContainer">
              <input type="email" required className="login__input" />
              <span className="login__span">Correo electrónico</span>
            </section>
            <section className="login__inputContainer">
              <input required type="password" className="login__input" />
              <span className="login__span">Contraseña</span>
            </section>
          </label>
        </form>
        <button className="login__buttonSesion">Iniciar sesión</button>
        <p>
          ¿Aún no te has registrado?{" "}
          <Link to="/register" className="login__link">Regístrate aquí</Link>
        </p>
        <button className="login__facebook">
          <img src={logoFacebook} alt="Logo Facebook" className="login__icon" />{" "}
          Continuar con Facebook
        </button>
        <button className="login__google">
          <img src={logoGoogle} alt="Logo Google" className="login__icon" />{" "}
          Continuar con Google
        </button>
      </article>
    </div>
  );
};

export default Login;
