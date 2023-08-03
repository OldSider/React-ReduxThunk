import { CustomersDelete } from "../../../Interface/DeleteCustomerInterface";
import { createSlice } from "@reduxjs/toolkit";

import deleteCustomer from "./Components/AsyncThunk";

const deleteSlice = createSlice({
  name: "dataBaseDelete",
  initialState: {
    data: [] as CustomersDelete[],
    isSuccess: false,
    loading: false,
    message: "",
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(deleteCustomer.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteCustomer.fulfilled, (state, { payload }) => {
      state.data = state.data.filter((customer) => customer.id !== payload);
      state.loading = false;
      state.isSuccess = false;
    });
  },
});

export default deleteSlice.reducer;
