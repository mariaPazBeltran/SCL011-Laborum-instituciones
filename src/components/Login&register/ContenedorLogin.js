/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Login from './Login';
import './style.css'
import Select from '../Login&register/Select';


export default function LoginScreen() {
  
    return (
      <div className="login-screen">
          <div className="login-box-left">
          <img src={require('../../assets/Logo.png')} alt='' className="login-logo" />
          <h1 className="login-h1">Conecta con tus postulantes con las mejores ofertas</h1>
          <Login />
          <div className="section-7">
              <h6 className="h6">¿No tienes cuenta? <a className="link-login">Regístrate</a></h6>
          </div>
          </div>

          <div className="login-box-right">
          <Select/>
          </div>
      </div>
    );
  }  
