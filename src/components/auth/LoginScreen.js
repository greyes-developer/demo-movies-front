import React, { useState } from "react";

import "./login.css";

export const LoginScreen = () => {
  const [firstFormValues, setFirstFormValues] = useState({
    email: "",
    password: "",
  });

  const { email, password } = firstFormValues;

  const handleInputChange = ({ target }) => {
    setFirstFormValues({
      ...firstFormValues,
      [target.name]: target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Iniciar sesión")
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registrarse")
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
                name="email"
                className="form-control"
                placeholder="Correo"
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Contraseña"
                value={password}
                onChange={handleInputChange}
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
                className="form-control"
                placeholder="Nombre"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Apellido"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Correo"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
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
