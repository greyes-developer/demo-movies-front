import React, { useState } from "react";

import "./login.css";

import {useForm} from '../../hooks/useForm';

export const LoginScreen = () => {
  const [firstFormValues, handleInputChangeF] = useForm({
    fEmail: "",
    fPassword: "",
  });

  const [secondFormValues, handleInputChangeS] = useForm({
    sName: "",
    sSurname: "",
    sEmail: "",
    sPassword: "",
  });

  const { fEmail, fPassword } = firstFormValues;
  const { sName, sSurname, sEmail, sPassword } = secondFormValues;


  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Iniciar sesión");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registrarse");
  };

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Ingresar</h3>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="text"
                name="fEmail"
                className="form-control"
                placeholder="Correo"
                value={fEmail}
                onChange={handleInputChangeF}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="fPassword"
                className="form-control"
                placeholder="Contraseña"
                value={fPassword}
                onChange={handleInputChangeF}
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                className="btnSubmit"
                value="Iniciar sesión"
              />
            </div>
          </form>
        </div>
        <div className="col-md-6 login-form-2">
          <h3>Registro</h3>
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <input
                type="text"
                name="sName"
                className="form-control"
                placeholder="Nombre"
                value={sName}
                onChange={handleInputChangeS}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="sSurname"
                className="form-control"
                placeholder="Apellido"
                value={sSurname}
                onChange={handleInputChangeS}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="sEmail"
                className="form-control"
                placeholder="Correo"
                value={sEmail}
                onChange={handleInputChangeS}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="sPassword"
                className="form-control"
                placeholder="Contraseña"
                value={sPassword}
                onChange={handleInputChangeS}
              />
            </div>
            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Crear cuenta" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
