const FAVORITES_MOVIES_API_URL = "http://localhost:4001/api";


export const getMovies = (title) => {
  const MOVIE_API = "http://omdbapi.com/";
  const API_KEY = "5a86609a";

  return fetch(`${MOVIE_API}/?apikey=${API_KEY}&s=${title}`).then((resp) =>
    resp.json()
  );

};

export const getFavoritesMovies = (uid) => {

  return fetch(
    `${FAVORITES_MOVIES_API_URL}/movies-favorites/movies/${uid}`
  ).then((resp) => resp.json());

};

export const createFavoriteMovie = (data) => {

  return fetch(`${FAVORITES_MOVIES_API_URL}/movies-favorites/new-movie`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((resp) => resp.json());

};

export const deleteFavoriteMovie = ({imdbID, uid}) => {

  const body = {
    "uid": uid
  }

  return fetch(`${FAVORITES_MOVIES_API_URL}/movies-favorites/${imdbID}`, {
    method: "DELETE",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((resp) => resp.json());

};
