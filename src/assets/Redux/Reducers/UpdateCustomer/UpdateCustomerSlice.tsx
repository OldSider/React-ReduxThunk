import { createSlice } from "@reduxjs/toolkit";
import updateCustomer from "./Components/AsyncThunk";
import Customers from "../../../Interface/HomeCustomerInterface";

const updateCustomerSlice = createSlice({
  name: "UpdateSlice",
  initialState: {
    data: [] as Customers[],
    isSuccess: false,
    loading: false,
    message: "",
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(updateCustomer.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateCustomer.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.isSuccess = true;
      state.data = state.data.map((customer) =>
        customer.id === payload.id ? payload : customer
      );
    });
    builder.addCase(updateCustomer.rejected, (state, { payload }) => {
      state.message = payload as string;
      state.isSuccess = false;
      state.loading = false;
    });
  },
});

export default updateCustomerSlice;
