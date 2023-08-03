import { createSlice } from "@reduxjs/toolkit";
import getCustomersData from "./Components/AsyncThunk";

const initialState = {
  data: [] ,
  message: "",
  loading: false,
  isSuccess: false,
};

const getAllCustomersSlice = createSlice({
  name: "getDataBase",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCustomersData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCustomersData.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.loading = false;
      state.isSuccess = true;
    });
    builder.addCase(getCustomersData.rejected, (state, { payload }) => {
      state.message = payload as string;
      state.loading = false;
      state.isSuccess = false;
    });
  },
});

export default getAllCustomersSlice.reducer;
