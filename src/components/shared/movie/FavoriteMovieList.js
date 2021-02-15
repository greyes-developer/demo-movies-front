import React from "react";
import { useSelector } from "react-redux";

import "./movie.css";
import img_photo from "../../../assets/img_photo.png";

import { MovieItem } from "./MovieItem";

export const FavoriteMovieList = ({ moviesData }) => {
  const { data } = useSelector((state) => state.auth);

  return (
    <div>
      {moviesData.length > 0 && (
        <div className="card-grid">
          {moviesData.map((movie) => {
            return (
              <MovieItem
                key={movie.imdbID}
                imdbID={movie.imdbID}
                title={movie.title}
                poster={movie.poster.length > 10 ? movie.poster : img_photo}
                favorite={movie.favorite}
                uid={data.id}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
