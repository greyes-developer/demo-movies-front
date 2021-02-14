import { movieTypes } from "../types/movie";
import {
  getMovies as getMoviesService,
  getFavoritesMovies as getFavoritesMoviesService,
  createFavoriteMovie as createFavoriteMovieService,
  deleteFavoriteMovie as deleteFavoriteMovieService,
} from "../services/movie";

const getMoviesLoading = () => ({
  type: movieTypes.GET_MOVIES_LOADING,
});

const getMoviesSuccess = (payload) => ({
  type: movieTypes.GET_MOVIES_SUCCESS,
  payload,
});

const getMoviesError = (payload) => ({
  type: movieTypes.GET_MOVIES_ERROR,
  payload,
});

export const getMovies = (title) => {
  return async (dispatch) => {
    dispatch(getMoviesLoading());

    const resp = await getMoviesService(title);

    if (resp && resp.Search) {
      dispatch(getMoviesSuccess(resp.Search));
    } else {
      dispatch(getMoviesError(resp));
    }
  };
};

const getFavoritesMoviesLoading = () => ({
  type: movieTypes.GET_FAVORITES_MOVIES_LOADING,
});

const getFavoritesMoviesSuccess = (payload) => ({
  type: movieTypes.GET_FAVORITES_MOVIES_SUCCESS,
  payload,
});

const getFavoritesMoviesError = (payload) => ({
  type: movieTypes.GET_FAVORITES_MOVIES_ERROR,
  payload,
});

export const getFavoritesMovies = () => {
  return async (dispatch, getState) => {
    dispatch(getFavoritesMoviesLoading());

    const { id } = getState().auth.data;

    const resp = await getFavoritesMoviesService(id);

    if (resp && resp.success) {
      dispatch(getFavoritesMoviesSuccess(resp.data));
    } else {
      dispatch(getFavoritesMoviesError(resp.data));
    }
  };
};

const createFavoriteMovieLoading = () => ({
  type: movieTypes.CREATE_FAVORITE_MOVIE_LOADING,
});

const createFavoriteMovieSuccess = (payload) => ({
  type: movieTypes.CREATE_FAVORITE_MOVIE_SUCCESS,
  payload,
});

const createFavoriteMovieError = (payload) => ({
  type: movieTypes.CREATE_FAVORITE_MOVIE_ERROR,
  payload,
});

export const createFavoriteMovie = (data) => {
  return async (dispatch) => {
    dispatch(createFavoriteMovieLoading());

    const resp = await createFavoriteMovieService(data);

    console.log(`Respuesta de crear favorite movie ${JSON.stringify(resp)}`);

    if (resp && resp.success) {
      dispatch(createFavoriteMovieSuccess(resp.data.imdbID));
      dispatch(getFavoritesMovies());
    } else {
      dispatch(createFavoriteMovieError(resp.data));
    }
  };
};

const deleteFavoriteMovieLoading = () => ({
  type: movieTypes.DELETE_FAVORITE_MOVIE_LOADING,
});

const deleteFavoriteMovieSuccess = (payload) => ({
  type: movieTypes.DELETE_FAVORITE_MOVIE_SUCCESS,
  payload,
});

const deleteFavoriteMovieError = (payload) => ({
  type: movieTypes.DELETE_FAVORITE_MOVIE_ERROR,
  payload,
});

export const deleteFavoriteMovie = (data) => {
  return async (dispatch) => {
    dispatch(deleteFavoriteMovieLoading());

    const resp = await deleteFavoriteMovieService(data);

    if (resp && resp.success) {
      dispatch(deleteFavoriteMovieSuccess(resp.data.imdbID));
      dispatch(getFavoritesMovies());
    } else {
      dispatch(deleteFavoriteMovieError(resp.data));
    }

  };
};
