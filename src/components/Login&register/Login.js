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