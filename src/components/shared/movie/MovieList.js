import React from "react";
import { useSelector } from "react-redux";

import "./movie.css";
import img_photo from "../../../assets/img_photo.png";

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

  return (
    <>
      {moviesData.length === 0 ? (
        <p>No se encontraron resultados para tu búsqueda</p>
      ) : (
        <div className="card-grid">
          {moviesData.map((movie) => {
            return (
              <MovieItem
                key={movie.imdbID}
                imdbID={movie.imdbID}
                title={movie.Title}
                poster={
                  movie.Poster && movie.Poster.length > 10
                    ? movie.Poster
                    : img_photo
                }
                favorite={movie.favorite}
                uid={data.id}
              />
            );
          })}
        </div>
      )}
    </>
  );
});
