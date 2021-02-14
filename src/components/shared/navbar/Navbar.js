import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../../actions/auth";

export const Navbar = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.auth);

  const handleLogout = (e) => {
    dispatch(logout());
  };

  return (
    <div className="navbar navbar-dark bg-dark mb-4">
      <span className="navbar-brand">{data.name}</span>
      <button className="btn btn-outline-danger" onClick={handleLogout}>
        <i className="fas fa-sign-out-alt"></i>
        <span> Salir</span>
      </button>
    </div>
  );
};
