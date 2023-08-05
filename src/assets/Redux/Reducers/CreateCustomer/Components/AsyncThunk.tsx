import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../../../Provider/Api";

export const createCustomerReducer = createAsyncThunk(
  "createCustomer/postCustomer",
  async (customerData, { rejectWithValue }) => {
    try {
      const { data } = await Api.post("/informations", customerData);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
