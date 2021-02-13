import { userTypes } from "../types/user";
import { createUser as createUserService } from "../services/user";
import Swal from "sweetalert2";

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
