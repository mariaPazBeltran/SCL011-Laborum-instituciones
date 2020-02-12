import React, { useContext, useEffect } from "react";
import "firebase/auth";
import { useFirebaseApp, useUser } from "reactfire";
import Encabezado from "./Encabezado";
import Context from "../states/context";

const Login = () => {
  const {state, dispatch} = useContext(Context)
  const firebase = useFirebaseApp();
  useEffect(() => {
    const rememberMe = localStorage.getItem('rememberMe') === 'true';
  const email = rememberMe ? localStorage.getItem('email') : '';
  const password = rememberMe ? localStorage.getItem('password') : '';
  dispatch({type:'getLocalStorage', payload:{email, password, rememberMe}})
  },[dispatch]);
  const onChange =(e)=>{
    dispatch({type:'saveUserInformation', field:e.target.name, value:e.target.value})
  }
  const login = async (event) => {
    event.preventDefault()
    const email = state.email
    const password = state.password
    const rememberMe = state.rememberMe
    localStorage.setItem('rememberMe', rememberMe);
    localStorage.setItem('email', rememberMe ? email : '');
    localStorage.setItem('password', rememberMe ? password : '');
    await firebase.auth().signInWithEmailAndPassword(email, password);
  };
  const logout = async () => {
    await firebase.auth().signOut();
  };
  const user = useUser();

  return (
    <div className="login-container">
      <div>
        <Encabezado />
      </div>
      <div>
        <h3>Inicio sesión</h3>

        {!user && (
          <form>
            <label>Correo</label>
            <input
              type="text"
              placeholder="Escribe tu correo"
              name="email"
              value={state.email}
              onChange={onChange}
            />
            <label>Contraseña</label>
            <input
              type="password"
              placeholder="Escribe tu correo"
              name="password"
              value={state.password}
              onChange={onChange}
            />
            <label>
              <input name='rememberMe' checked={state.rememberMe} onChange={(event)=>dispatch({
          type:'rememberMe', payload:event.target })} type="checkbox" />
              Recuérdame
            </label>
            <button onClick={login}>Iniciar Sesión</button>
          </form>
        )}
        {user && <button onClick={logout}>Salir</button>}
      
        <p>¿No tienes cuenta?</p>
        <p>Registrate</p>
      </div>
    </div>
  );
};

export default Login;
