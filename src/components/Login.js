import React from 'react';

import Encabezado from './Encabezado'

const Login =()=>{
    return(
        <div className='login-container'>
             <div>
             <Encabezado/> 
            </div>
            <div>
                <h3>Inicio sesión</h3>
                <form>
                    <label>Correo</label>
                    <input type='text' placeholder='Escribe tu correo'/>
                    <label>Contraseña</label>
                    <input type ='password' placeholder='Escribe tu correo'/>
                    <label><input type='checkbox'/>Recuerdame</label>
                    <p>¿Olvidaste tu contraseña</p>
                    <input type='submit' placeholder='Iniciar Sesión'/>
                </form>
                <p>¿No tienes cuenta?</p><p>Registrate</p>
            </div>
        </div>
    )
}

export default Login;