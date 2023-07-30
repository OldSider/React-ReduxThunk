import { configureStore } from "@reduxjs/toolkit";

import getAllCustomersSlice from "../Reducers/GetAllCustomers/GetAllCustomers";
import loginInputSlice from "../Reducers/LoginAuth/LoginAuth";

const store = configureStore({
  reducer: {
    getAll: getAllCustomersSlice,
    authLogin: loginInputSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
