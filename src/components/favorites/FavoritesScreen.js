import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./favorites.css";

import { getFavoritesMovies } from "../../actions/movie";
import { FavoriteMovieList } from "../shared/movie/FavoriteMovieList";
import { Navbar } from "../shared/navbar/Navbar";


export const FavoritesScreen = () => {

  const dispatch = useDispatch();

  const { loading, data, error } = useSelector(
    (state) => state.movie.favorites
  );

  useEffect(() => {
    dispatch(getFavoritesMovies())
  }, [])

  return (
    <div className="favorite-container">
      <Navbar />
      <div className="container">
        <p>
          {data && data.length > 0
            ? "Tus películas favoritas"
            : "Aún no cuentas con películas favoritas"}
        </p>
        {!loading && !error && (
          <ol>
            <FavoriteMovieList moviesData={data} />
          </ol>
        )}
      </div>
    </div>
  );
};
