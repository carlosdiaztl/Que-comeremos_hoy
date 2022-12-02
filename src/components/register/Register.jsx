import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logoFacebook from "../../assets/facebook (1).png";
import logoGoogle from "../../assets/logotipo-de-google-glass.png";
import { actionRegisterAsync } from "../../redux/actions/userActions";
import "./register.scss";

const Register = () => {
  const dispatch=useDispatch()
  const userStore = useSelector((store) => store.userStore);
  const {register, handleSubmit, formState: { errors } } = useForm()
  useEffect(() => {
  console.log(userStore);
  }, [userStore])
  
  const sendInfo=(data)=>{
    console.log(data);
    const newUser = {
      name: data.name + data.lastName,
      email: data.email,
      password: data.password,
      avatar: "",
      phoneNumber: "",
    };
    console.log(newUser);
    dispatch(actionRegisterAsync(newUser))
  }
  return (
    <div className="register">
      <section className="register__image">
        <figure>
          <img src="https://res.cloudinary.com/dpssc03mq/image/upload/v1669911186/9d2c891f4ba614e008c108b77f33f3b3_k8zpms.jpg" alt="image" className="register__image"/>
        </figure>
      </section>
      <article className="register__article">
        <h1 className="register__tittle">Regístrate</h1>
        <form onSubmit={handleSubmit(sendInfo)} className="register__form">
          <label className="register__label">

            <section className="register__inputContainer">
              <input required type="text" className="register__input"
              {...register("name")}  />
              <span className="register__span">Nombre</span>
            </section>

            <section className="register__inputContainer">
              <input required type="text" className="register__input"
              {...register("lastName")}  />
              <span className="register__span">Apellido</span>
            </section>

            <section className="register__inputContainer">
              <input type="email" required className="register__input"
              {...register("email")}  />
              <span className="register__span">Correo electrónico</span>
            </section>

            <section className="register__inputContainer">
              <input required type="password" className="register__input"
              {...register("password")} />
              <span className="register__span">Contraseña</span>
            </section>
            
          </label>
        <button type="submit" className="register__buttonSesion">Regístrate</button>
        </form>
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
