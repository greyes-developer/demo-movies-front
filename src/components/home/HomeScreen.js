import React from 'react';
import { useDispatch } from "react-redux";
import { logout } from "../../actions/auth";

export const HomeScreen = () => {
    const disptach = useDispatch();

    const handleLogout = (e) => {
        disptach(logout())
    }

    return (
        <div>
            <h1>Home screen</h1>
            <button className="btn btn-primary" onClick={handleLogout} >
                Cerrar sesión
            </button>
        </div>
    )
}
