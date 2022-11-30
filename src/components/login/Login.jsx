import React from 'react'
import './login.scss'

const Login = () => {
  return (
    <div className='login'>
        <section>
            <figure>
                <img src="" alt="image" />
            </figure>
        </section>
        <h1>Iniciar sesión</h1>
        <form className='login__form'>
            <label>
                <input type="email" placeholder='Correo electrónico'/>
                <input type="password" placeholder='Contraseña'/>
            </label>
        </form>
        <button>Iniciar sesión</button>
        <p>¿Aún no te has registrado? <span>Regístrate aquí</span></p>
    </div>
  )
}

export default Login