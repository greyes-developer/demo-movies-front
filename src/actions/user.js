import Swal from "sweetalert2";

import { userTypes } from "../types/user";
import { authTypes } from "../types/auth";
import {
  createUser as createUserService,
  deleteUser as deleteUserService,
} from "../services/user";
import { deleteFavoritesMoviesById } from "../services/movie";

const createUserLoading = () => ({
  type: userTypes.USER_CREATE_LOADING,
});

const createUserSuccess = (payload) => ({
  type: userTypes.USER_CREATE_SUCCESS,
  payload,
});

const createUserError = (payload) => ({
  type: userTypes.USER_CREATE_ERROR,
  payload,
});

export const createUser = (name, surname, email, password) => {
  return async (dispatch) => {
    dispatch(createUserLoading());

    const resp = await createUserService({ name, surname, email, password });

    if (resp && resp.success) {
      dispatch(createUserSuccess(resp.data));
      Swal.fire("Success", resp.data.msg, "success");
    } else {
      Swal.fire("Error", resp.data.msg, "error");

      dispatch(createUserError(resp.data));
    }
  };
};

const deleteUserLoading = () => ({
  type: userTypes.USER_DELETE_LOADING,
});

const deleteUserSuccess = (payload) => ({
  type: userTypes.USER_DELETE_SUCCESS,
  payload,
});

const deleteUserError = (payload) => ({
  type: userTypes.USER_DELETE_ERROR,
  payload,
});

const logoutSuccess = () => ({
  type: authTypes.AUTH_LOGOUT_SUCCESS,
});

export const deleteUser = (uid) => {
  return async (dispatch) => {
    dispatch(deleteUserLoading());

    const resp = await deleteUserService(uid);
    const respMoviesDeleted = await deleteFavoritesMoviesById(uid);

    if (resp && resp.success && respMoviesDeleted.success) {
      dispatch(deleteUserSuccess(resp.data));

      Swal.fire("Success", resp.data.msg, "success");
      localStorage.removeItem("is-authenticated");

      dispatch(logoutSuccess());
    } else {
      Swal.fire("Error", resp.data.msg, "error");
      dispatch(deleteUserError(resp.data));
    }
  };
};
