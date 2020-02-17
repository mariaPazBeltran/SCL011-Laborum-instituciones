import React, { useContext, useEffect } from "react";
import "firebase/auth";
import { useFirebaseApp, useUser } from "reactfire";
import Context from "../../states/context";

import './style.css'

const Login = () => {
  const {state, dispatch} = useContext(Context)
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
  //cierre de sesión
  const logout = async () => {
    await firebase.auth().signOut();
  };
  const user = useUser();
//recuperar contraseña
  const restore = async event => {
    event.preventDefault();
    const email = state.email;

    await firebase.auth().sendPasswordResetEmail(email);
  };

  return (
    <div className="login-container">
      
      
        <h3 className='login-h3'>Inicio sesión</h3>

        {!user && (
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
              className="input-login"
            /><br/>
            
            <h6 className="h6-1"> 
              <input name='rememberMe' 
              checked={state.rememberMe} 
              onChange={(event)=>dispatch({type:'rememberMe', payload:event.target })} 
              type="checkbox" 
              className='rememberMe'/> 
              Recuérdame
              <p className='h6'>¿Olvidaste tu contraseña?</p><button onClick={restore}>Restablecer</button>
            </h6>
            <button onClick={login} className="btn-login">Iniciar Sesión</button>
          </form>
        )}
        {user && <button onClick={logout}>Salir</button>}
    </div>
  );
};

export default Login;
