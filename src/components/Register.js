import React, {useContext} from 'react';

import Encabezado from './Encabezado'
import Context from '../states/context';

const Register =()=>{
const {state, dispatch} = useContext(Context)
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
                    <label><input name='rememberMe' checked={state.rememberMe} onChange={(event)=>dispatch({
          type:'rememberMe', payload:event.target })} type='checkbox'/>Recuérdame</label>
                    <input type='submit' placeholder='Comenzar'/>
                </form>
                <p>¿Ya tienes cuenta?</p><p>Inicia Sesión</p>
            </div>
        </div>
    )
}

export default Register;