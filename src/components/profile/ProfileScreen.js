import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "../shared/navbar/Navbar";

import "./profile.css";

import { deleteUser } from "../../actions/user";

export const ProfileScreen = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.user.deleted);

  const handleDeleteBtn = (e) => {
    dispatch(deleteUser(data.id));
  };

  return (
    <div>
      <Navbar />
      <div className="card-container">
        <p className="card-profile-title">Información personal</p>
        <p className="card-profile-item">Nombre - Gustavo</p>
        <p className="card-profile-item">Apellido - Reyes</p>
        <button
          disabled={loading}
          className="btn btn-danger"
          onClick={handleDeleteBtn}
        >
          Eliminar usuario
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
};
