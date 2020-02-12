<<<<<<< HEAD
/* eslint-disable jsx-a11y/anchor-is-valid */
=======
>>>>>>> css de el componente login
import React from 'react';
import Login from './Login';
import './style.css'
import Select from '../Login&register/Select';
<<<<<<< HEAD
import { Link } from "react-router-dom";

=======
>>>>>>> css de el componente login


export default function LoginScreen() {
  
    return (
      <div className="login-screen">
          <div className="login-box-left">
          <img src={require('../../assets/Logo.png')} alt='' className="login-logo" />
<<<<<<< HEAD
          <h1 className="login-h1">Conecta con tus postulantes con las mejores ofertas</h1>
          <Login />
          <div className="section-7">
              <h6 className="h6">¿No tienes cuenta? <Link to='/register' className="link-login">Regístrate</Link></h6>
=======
          <h1 className="login-h1">Encuentra a tu equipo ideal</h1>
          <Login />
          <div className="section-7">
              <h6 className="h6">¿No tienes cuenta? <a className="link-login">Regístrate</a></h6>
>>>>>>> css de el componente login
          </div>
          </div>

          <div className="login-box-right">
          <Select/>
          </div>
      </div>
    );
  }  
