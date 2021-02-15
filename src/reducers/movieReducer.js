import { movieTypes } from "../types/movie";

const initialState = {
  loading: true,
  data: [],
  favorites: {
    loading: true,
    create: {
      loading: true,
    },
    delete: {
      loading: true,
    },
  },
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case movieTypes.GET_MOVIES_LOADING:
      return {
        ...state,
        loading: true,
      };
    case movieTypes.GET_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case movieTypes.GET_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    case movieTypes.GET_FAVORITES_MOVIES_LOADING:
      return {
        ...state,
        favorites: {
          loading: true,
        },
      };
    case movieTypes.GET_FAVORITES_MOVIES_SUCCESS:
      return {
        ...state,
        favorites: {
          loading: false,
          data: action.payload,
        },
      };
    case movieTypes.GET_FAVORITES_MOVIES_ERROR:
      return {
        ...state,
        favorites: {
          loading: false,
          error: action.payload,
        },
      };
    case movieTypes.CREATE_FAVORITE_MOVIE_LOADING:
      return {
        ...state,
        favorites: {
          ...state.favorites,
          create: {
            loading: true,
          },
        },
      };
    case movieTypes.CREATE_FAVORITE_MOVIE_SUCCESS:
      return {
        ...state,
        favorites: {
          ...state.favorites,
          create: {
            loading: false,
            data: action.payload,
          },
        },
      };
    case movieTypes.CREATE_FAVORITE_MOVIE_ERROR:
      return {
        ...state,
        favorites: {
          ...state.favorites,
          create: {
            loading: false,
            error: action.payload,
          },
        },
      };
    case movieTypes.DELETE_FAVORITE_MOVIE_LOADING:
      return {
        ...state,
        favorites: {
          ...state.favorites,
          delete: {
            loading: true,
          },
        },
      };
    case movieTypes.DELETE_FAVORITE_MOVIE_SUCCESS:
      return {
        ...state,
        favorites: {
          ...state.favorites,
          delete: {
            loading: false,
            data: action.payload,
          },
        },
      };
    case movieTypes.DELETE_FAVORITE_MOVIE_ERROR:
      return {
        ...state,
        favorites: {
          ...state.favorites,
          delete: {
            loading: false,
            error: action.payload,
          },
        },
      };
    default:
      return state;
  }
};
