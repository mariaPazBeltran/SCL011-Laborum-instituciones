import React, { useContext } from "react";
import "firebase/auth";
import { useFirebaseApp, useUser } from "reactfire";
import Encabezado from "./Encabezado";
import Context from "../states/context";

const Login = () => {
  const {state, dispatch} = useContext(Context)
  const firebase = useFirebaseApp();
  const onChange =(e)=>{
    dispatch({type:'saveUserInformation', field:e.target.name, value:e.target.value})
  }
  const login = async (event) => {
    event.preventDefault()
      const email = state.email
      const password = state.password
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
              <input type="checkbox" />
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
