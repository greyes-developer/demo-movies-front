import React from "react";
import { useDispatch } from "react-redux";

import "./movie.css";
import {
  createFavoriteMovie,
  deleteFavoriteMovie,
} from "../../../actions/movie";

export const MovieItem = ({
  imdbID,
  title,
  poster,
  favorite = false,
  uid,
}) => {
  const dispatch = useDispatch();

  const handleBtnFavorite = () => {
    if (favorite) {
      dispatch(deleteFavoriteMovie({ imdbID, uid }));
    } else {
      favorite = !favorite;
      dispatch(createFavoriteMovie({ imdbID, title, poster, favorite, uid }));
    }
  };

  return (
    <div className="card movie-item">
      <div className="card-header">{title}</div>
      <div className="card-body">
        <img src={poster} alt={title} />
        <button
          className={`${favorite ? "btn btn-danger" : "btn btn-primary"}`}
          onClick={handleBtnFavorite}
        >
          <i className={favorite ? "fas fa-heart" : "far fa-heart"}></i>
          {favorite ? " Eliminar de favoritos" : " Agregar a favoritos"}
        </button>
      </div>
    </div>
  );
};
