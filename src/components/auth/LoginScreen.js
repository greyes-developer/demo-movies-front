import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./login.css";

import { useForm } from "../../hooks/useForm";
import { startLogin } from "../../actions/auth";
import { createUser } from "../../actions/user";

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const [isPasswordVisibleF, setisPasswordVisibleF] = useState(false);
  const [isPasswordVisibleS, setisPasswordVisibleS] = useState(false);

  const [firstFormValues, handleInputChangeF, resetF] = useForm({
    fEmail: "",
    fPassword: "",
  });

  const [secondFormValues, handleInputChangeS, resetS] = useForm({
    sName: "",
    sSurname: "",
    sEmail: "",
    sPassword: "",
  });

  const { fEmail, fPassword } = firstFormValues;
  const { sName, sSurname, sEmail, sPassword } = secondFormValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLogin(fEmail, fPassword));
    resetF();
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(createUser(sName, sSurname, sEmail, sPassword));
    resetS();
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
                type={isPasswordVisibleF ? "text" : "password"}
                name="fPassword"
                className="form-control"
                placeholder="Contraseña"
                value={fPassword}
                onChange={handleInputChangeF}
              />
              <i
                className={
                  isPasswordVisibleF
                    ? "far fa-eye-slash password-icon"
                    : "far fa-eye password-icon"
                }
                onClick={() => setisPasswordVisibleF(!isPasswordVisibleF)}
              ></i>
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
                type={isPasswordVisibleS ? "text" : "password"}
                name="sPassword"
                className="form-control"
                placeholder="Contraseña"
                value={sPassword}
                onChange={handleInputChangeS}
              />
              <i
                className={
                  isPasswordVisibleS
                    ? "far fa-eye-slash password-icon"
                    : "far fa-eye password-icon"
                }
                onClick={() => setisPasswordVisibleS(!isPasswordVisibleS)}
              ></i>
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
