import React, { useState } from "react";
import "firebase/auth";
import { useFirebaseApp, useUser } from "reactfire";
import Encabezado from "./Encabezado";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const firebase = useFirebaseApp();

  const login = async () => {
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
              id="email"
              onChange={e => setEmail(e.target.value)}
            />
            <label>Contraseña</label>
            <input
              type="password"
              placeholder="Escribe tu correo"
              id="password"
              onChange={e => setPassword(e.target.value)}
            />
            <label>
              <input type="checkbox" />
              Recuérdame
            </label>
            <input type="submit" placeholder="Comenzar" />
          </form>
        )}
        {user && <button onClick={logout}>Salir</button>}
      
        <p>¿No tienes cuenta?</p>
        <p>Registrate</p>
        <button onClick={login}>Iniciar Sesión</button>
      </div>
    </div>
  );
};

export default Login;
