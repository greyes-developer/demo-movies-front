import { userTypes } from "../types/user";

const initialState = {
  loading: true,
  deleted: {
    loading: false,
  },
};

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
    case userTypes.USER_DELETE_LOADING:
      return {
        ...state,
        deleted: {
          loading: true,
        },
      };
    case userTypes.USER_DELETE_SUCCESS:
      return {
        ...state,
        deleted: {
          loading: false,
          data: action.payload,
        },
      };
    case userTypes.USER_DELETE_ERROR:
      return {
        ...state,
        deleted: {
          loading: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};
