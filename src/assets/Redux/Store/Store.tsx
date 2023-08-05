import { configureStore } from "@reduxjs/toolkit";

import getAllCustomersSlice from "../Reducers/GetAllCustomers/GetAllCustomers";
import loginInputSlice from "../Reducers/LoginAuth/LoginAuth";
import searchValueSlice from "../Reducers/SearchCustomerInput/SearchPayload";
import DeleteCustomerSlice from "../Reducers/DeleteCustomer/DeleteCustomerSlice";
import ValidationZipCode from "../Reducers/ValidationZipCode/ValidationZipCode";

const store = configureStore({
  reducer: {
    getAll: getAllCustomersSlice,
    deleteCustomer: DeleteCustomerSlice,
    authLogin: loginInputSlice,
    searchBar: searchValueSlice,
    validationZipCode: ValidationZipCode,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
