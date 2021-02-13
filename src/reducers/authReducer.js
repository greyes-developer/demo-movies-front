import { authTypes } from "../types/auth";

const initialState = {};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.AUTH_LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case authTypes.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case authTypes.AUTH_LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
