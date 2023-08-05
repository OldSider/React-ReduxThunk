import { createSlice } from "@reduxjs/toolkit";
import { createCustomerReducer } from "./Components/AsyncThunk";
import Customers from "../../../Interface/HomeCustomerInterface";

export const createCustomerSlice = createSlice({
  name: "createCustomer",
  initialState: {
    data: [] as Customers[],
    message: "",
    isSuccess: false,
    loading: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(createCustomerReducer.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createCustomerReducer.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.loading = false;
      state.isSuccess = true;
    });
    builder.addCase(createCustomerReducer.rejected, (state, { payload }) => {
      state.message = payload as string;
      state.loading = false;
      state.isSuccess = false;
    });
  },
});
