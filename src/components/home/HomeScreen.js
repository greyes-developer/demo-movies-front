import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./home.css";

import { getMovies, getFavoritesMovies } from "../../actions/movie";
import { MovieList } from "../shared/movie/MovieList";
import { Navbar } from "../shared/navbar/Navbar";

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const [movieName, setMovieName] = useState("");

  const { data: dataM } = useSelector((state) => state.movie);
  const { data: dataFM } = useSelector((state) => state.movie.favorites);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getFavoritesMovies());
    dispatch(getMovies(movieName));
  };

  const onChangeInput = ({ target }) => {
    setMovieName(target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Consulta tus películas</h1>
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
            <input type="submit" value="Buscar" className="btnSubmit" />
          </div>
        </form>
        {dataM && dataFM && (
          <MovieList moviesData={dataM} favsMoviesData={dataFM} />
        )}
      </div>
    </div>
  );
};
