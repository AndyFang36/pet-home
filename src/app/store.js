import {configureStore} from "@reduxjs/toolkit";
import loginStateReducer from "../features/loginStateSlice";

export default configureStore({
  reducer: {
    loginState: loginStateReducer,
  },
});