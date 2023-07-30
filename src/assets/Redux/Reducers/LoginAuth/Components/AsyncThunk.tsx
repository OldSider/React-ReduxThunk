import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  ItemType,
  LoginInputState,
} from "../../../../Interface/LoginSliceInterface";

import Api from "../../../../Provider/Api";

const LoginAuth = createAsyncThunk(
  "authLogin/findCustomer",
  async ({ email, password }: LoginInputState, thunkAPI) => {
    try {
      const { data } = await Api.get("/informations");
      const findCustomer = data.find((item: ItemType) => {
        return item.email === email && item.userPassword === password;
      });
      return findCustomer ? true : false;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export default LoginAuth;
