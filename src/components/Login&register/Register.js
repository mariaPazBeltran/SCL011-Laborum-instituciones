import React, { useContext } from "react";
import "firebase/auth";
import { useFirebaseApp, useUser } from "reactfire";

import Context from "../../states/context";
import ModalVerify from "./ModalVerify";

const Register = () => {

  const {state, dispatch} = useContext(Context)
  const firebase = useFirebaseApp();
 
  const onChange =(e)=>{
    dispatch({type:'saveUserInformation', field:e.target.name, value:e.target.value})
  }
  
  const register = async (event) => {

    event.preventDefault()
      const email = state.email
      const password = state.password
      const rememberMe = state.rememberMe
      localStorage.setItem('rememberMe', rememberMe);
      localStorage.setItem('email', rememberMe ? email : '');
      localStorage.setItem('password', rememberMe ? password : '');
     const userAcc= await firebase.auth().createUserWithEmailAndPassword(email, password);
     if(userAcc)  await firebase.auth().currentUser.sendEmailVerification();
     alert('se le ha enviado un email para verificar la cuenta')
  };

 
 

 
  const logout = async ()=>{
    await firebase.auth().signOut();
  }

  const user=useUser()

  

  return (
    <div className="login-Register">
      <div>
      </div>
      <div>
        <h3>Registrarse</h3>
   {!user && 
   
         <form>
          <label>Correo</label>
          <input
            type="text"
            placeholder="Escribe tu correo"
            name="email"
            onChange={onChange}
          />
          <label>Contraseña</label>
          <input
            type="password"
            placeholder="Escribe tu correo"
            name="password"
            onChange={onChange}
          />
          <label>
            <input name='rememberMe' checked={state.rememberMe} onChange={(event)=>dispatch({
          type:'rememberMe', payload:event.target })} type="checkbox" />
            Recuérdame
          </label>
          <button onClick={register }>Comenzar</button>
        </form> }
        {user &&
          <div><ModalVerify/>
          <button onClick={logout}>Salir</button></div>
          
        }
        {console.log(user)}
        <p>¿Ya tienes cuenta?</p> <p>Inicia Sesión</p>
      </div>
    </div>
  );
};

export default Register;
