import { combineReducers } from "redux";

import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";
import { movieReducer } from "./movieReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  movie: movieReducer
});
