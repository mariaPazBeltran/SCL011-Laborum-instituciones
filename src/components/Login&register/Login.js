import React, { useContext, useEffect } from "react";
import "firebase/auth";
import { useFirebaseApp, useUser } from "reactfire";
import Context from "../../states/context";

import './style.css'

const Login = () => {
  const { state, dispatch } = useContext(Context);
  const firebase = useFirebaseApp();
  useEffect(() => {
    const rememberMe = localStorage.getItem("rememberMe") === "true";
    const email = rememberMe ? localStorage.getItem("email") : "";
    const password = rememberMe ? localStorage.getItem("password") : "";
    dispatch({
      type: "getLocalStorage",
      payload: { email, password, rememberMe }
    });
  }, [dispatch]);
  const onChange = e => {
    dispatch({
      type: "saveUserInformation",
      field: e.target.name,
      value: e.target.value
    });
  };

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
  const logout = async () => {
    await firebase.auth().signOut();
  };
  const user = useUser();

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
              className="input-login"/><br/>
            
            <label className="h6-1"> 
              <input name='rememberMe' checked={state.rememberMe} onChange={(event)=>dispatch({
          type:'rememberMe', payload:event.target })} type="checkbox" /> 
              Recuérdame
            </label>
            <p className='h6'>¿Olvidaste tu contraseña?</p><button onClick={restore}>Restablecer</button>
            <button onClick={login} className="btn-login">Iniciar Sesión</button>
          </form>
        )}
        {user && <button onClick={logout}>Salir</button>}
    
    </div>
  );
};

export default Login;
