import React, { useState } from "react";
import "firebase/auth";
import { useFirebaseApp } from "reactfire";
import Encabezado from "./Encabezado";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const firebase = useFirebaseApp();
  const register = async () => {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="login-Register">
      <div>
        <Encabezado />
      </div>
      <div>
        <h3>Registrarse</h3>
        <form>
          <label>Correo</label>
          <input
            type="email"
            id="email"
            onChange={e => setEmail(e.target.value)}
          />
          <label>Contraseña</label>
          <input
            type="password"
            id="password"
            onChange={e => setPassword(e.target.value)}
          />
        </form>
        {/*   <form>
          <label>Correo</label>
          <input
            type="text"
            placeholder="Escribe tu correo"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Contraseña</label>
          <input
            type="password"
            placeholder="Escribe tu correo"
            id="password"
          
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>
            <input type="checkbox" />
            Recuérdame
          </label>
          <input type="submit" placeholder="Comenzar" />
        </form> */}
        <p>¿Ya tienes cuenta?</p> <p>Inicia Sesión</p>
        <button onClick={register}>Comenzar</button>
      </div>
    </div>
  );
};

export default Register;
