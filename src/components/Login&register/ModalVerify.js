import React from 'react';
import './ModalVerify.css'
import celEmail from '../../img/celEmail.png'
import { useUser } from "reactfire";
const ModalVerify = () =>{
  const user = useUser()
  //condicional para saber si el usuario verifico su correo
  const ifVerify = () =>{
    if (user.emailVerified===false){alert('Aún no has verificado tu correo')}
    else {alert('holiwis')}
  }
  const notVerify = () =>{
    alert('te hemos vuelto a enviar un correo')
  }

return(
    <div className="modal">
  <div className="modal-content">
        <h1>¡Revisa tu dirección de correo!</h1>
        <p>Te hemos enviado un link para confirmar la creación de tu cuenta</p>
        <button onClick={notVerify} className='buttonNegation'>No lo he recibido</button>
        <button onClick={ifVerify} className='buttonConfirmation'>¡Ya lo recibí!</button>
        <div className='imgModal'>
            <img src={celEmail} alt='logo'></img>
        </div>
  </div>  
</div>
)
}
export default ModalVerify;