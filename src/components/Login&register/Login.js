<<<<<<< HEAD
import React, { useContext, useEffect } from "react";
import "firebase/auth";
import { useFirebaseApp } from "reactfire";
import Context from "../../states/context";

import './style.css'

const Login = () => {
  const { state, dispatch } = useContext(Context);
  const firebase = useFirebaseApp();
  /*useEffect remplaza componentDidMount, le decimos que al momento de renderizar,
  debe hacer el siguiente cambio de estado*/
  useEffect(() => {
    const rememberMe = localStorage.getItem("rememberMe") === "true";
    const email = rememberMe ? localStorage.getItem("email") : "";
    const password = rememberMe ? localStorage.getItem("password") : "";
    dispatch({
      type: "getLocalStorage",
      payload: { email, password, rememberMe }
    });
  }, [dispatch]);

  //se toma el valor de los inputs de password y correo
  const onChange = e => {
    dispatch({
      type: "saveUserInformation",
      field: e.target.name,
      value: e.target.value
    });
  };
//inicia sesion y guarda datos en el localStorage
  const login = async event => {
    event.preventDefault();
    const email = state.email;
    const password = state.password;
    const rememberMe = state.rememberMe;
    localStorage.setItem("rememberMe", rememberMe);
    localStorage.setItem("email", rememberMe ? email : "");
    localStorage.setItem("password", rememberMe ? password : "");
    await firebase.auth().signInWithEmailAndPassword(email, password);
  };
//recuperar contraseña
  const restore = async event => {
    event.preventDefault();
    const email = state.email;

    await firebase.auth().sendPasswordResetEmail(email);
  };


  return (
    <div className="login-container">
      
      
        <h3 className='login-h3'>Inicio sesión</h3>
          <form>
            <label className='label'>Correo</label> <br/>
            <input
              type="text"
              placeholder="Escribe tu correo"
              name="email"
              value={state.email}
              onChange={onChange}
              className="input-login"

            /><br/>
            <label className='label'>Contraseña</label> <br/>
            <input
              type="password"
              placeholder="Escribe tu correo"
              name="password"
              value={state.password}
              onChange={onChange}
              className="input-login"/><br/>
            
            <h6 className="h6-1"> 
              <input name='rememberMe' 
              checked={state.rememberMe} 
              onChange={(event)=>dispatch({type:'rememberMe', payload:event.target })} 
              type="checkbox" 
              className='rememberMe'/> 
              Recuérdame
              <button className='h6' onClick={restore}>¿Olvidaste tu contraseña?</button>
            </h6>
            <button onClick={login} className="btn-login">Iniciar Sesión</button>
          </form>

    </div>
  );
};

export default Login;
=======
import React, { useState } from 'react';
// import 'firebase/auth';
// import { useFirebaseApp, useUser } from 'reactfire';


export default () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const firebase = useFirebaseApp();
//   const user = useUser();

//   const login = async () => {
//     await firebase.auth().signInWithEmailAndPassword(email, password);
//   };

//   const logout = async () => {
//     await firebase.auth().signOut();
//   };

  return (
    <div>
      {/* {user && <button onClick={logout}>Cerrar sesión</button>}
      {
        !user && */}
        <div>
          <h3 className="login-h3">Inicio sesión</h3>
          <div>
            <h5>Correo</h5>
            <input type="email" id="email" placeholder="Escribe tu correo" className="input-login" />
            <h5>Contraseña</h5>
            <input type="password" id="password" placeholder="Escribe contraseña" className="input-login"  />
          </div>
          <div className="section-6">
            <h6 className="h6">Recuérdame</h6>
            <h6 className="h6"><a className="link-login">¿Olvidaste tu contraseña?</a></h6>
          </div>
          <button  className="btn-login">Iniciar sesión</button>
        </div>
      }
    </div>
  );
};
>>>>>>> css de el componente login
