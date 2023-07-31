import { configureStore } from "@reduxjs/toolkit";

import getAllCustomersSlice from "../Reducers/GetAllCustomers/GetAllCustomers";
import loginInputSlice from "../Reducers/LoginAuth/LoginAuth";
import searchValueSlice from "../Reducers/SearchCustomerInput/SearchPayload";

const store = configureStore({
  reducer: {
    getAll: getAllCustomersSlice,
    authLogin: loginInputSlice,
    searchBar: searchValueSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
