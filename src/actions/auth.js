import { authTypes } from "../types/auth";

export const loginLoading = () => ({
  type: authTypes.AUTH_LOGIN_LOADING,
});

export const loginSuccess = (payload) => ({
  type: authTypes.AUTH_LOGIN_SUCCESS,
  payload,
});

export const loginError = (payload) => ({
  type: authTypes.AUTH_LOGIN_ERROR,
  payload,
});
