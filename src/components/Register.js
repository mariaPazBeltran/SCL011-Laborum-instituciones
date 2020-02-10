import React from 'react';

import Encabezado from './Encabezado'

const Register =()=>{
    return(
        <div className='login-Register'>
            <div>
               <Encabezado/> 
            </div>
            <div>
                <h3>Registrarse</h3>
                <form>
                    <label>Correo</label>
                    <input type='text' placeholder='Escribe tu correo'/>
                    <label>Contraseña</label>
                    <input type ='password' placeholder='Escribe tu correo'/>
                    <label><input type='checkbox'/>Recuérdame</label>
                    <input type='submit' placeholder='Comenzar'/>
                </form>
                <p>¿Ya tienes cuenta?</p><p>Inicia Sesión</p>
            </div>
        </div>
    )
}

export default Register;