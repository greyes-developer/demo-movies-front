import React from "react";
import { useSelector } from "react-redux";

import "./movie.css";

import { MovieItem } from "./MovieItem";

export const MovieList = React.memo(({ moviesData, favsMoviesData }) => {
  const { data } = useSelector((state) => state.auth);
  moviesData.map((movie) => {
    const equals = favsMoviesData.filter(
      (favMovie) => movie.imdbID === favMovie.imdbID
    );

    movie.favorite = equals.length > 0 ? true : false;
    return movie;
  });

  console.log("Se llamo a MovieList");
  return (
    <div className="container">
      <div className="card-grid">
        {moviesData.map((movie) => {
          return (
            <MovieItem
              key={movie.imdbID}
              imdbID={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              favorite={movie.favorite}
              uid={data.id}
            />
          );
        })}
      </div>
    </div>
  );
});
