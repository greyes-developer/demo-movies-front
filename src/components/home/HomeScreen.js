import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./home.css";

import { getMovies, getFavoritesMovies } from "../../actions/movie";
import { MovieList } from "../shared/movie/MovieList";
import { Navbar } from "../shared/navbar/Navbar";

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const [movieName, setMovieName] = useState("");

  const { loading: loadingM, data: dataM } = useSelector(
    (state) => state.movie
  );
  const { loading: loadingFM, data: dataFM } = useSelector(
    (state) => state.movie.favorites
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getFavoritesMovies());
    dispatch(getMovies(movieName));
  };

  const onChangeInput = ({ target }) => {
    setMovieName(target.value);
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="container">
        <h1>Busca las películas que quieras</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Nombre de la película/serie"
              required={true}
              className="form-control"
              name="movieName"
              value={movieName}
              onChange={onChangeInput}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Buscar"
              className="btn btn-primary btnSubmit"
            />
          </div>
        </form>
        {loadingM && loadingFM ? (
          <i className="fas fa-spinner"></i>
        ) : (
          dataM &&
          dataFM && (
            <ol>
              <MovieList moviesData={dataM} favsMoviesData={dataFM} />
            </ol>
          )
        )}
      </div>
    </div>
  );
};
