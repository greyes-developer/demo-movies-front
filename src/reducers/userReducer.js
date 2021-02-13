import { userTypes } from "../types/user";

const initialState = {};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.USER_CREATE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case userTypes.USER_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case userTypes.USER_CREATE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
