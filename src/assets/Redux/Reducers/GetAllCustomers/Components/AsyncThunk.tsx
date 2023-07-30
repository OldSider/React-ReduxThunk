import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../../../Provider/Api";

const getCustomersData = createAsyncThunk(
  "getDataBase/getData",
  async (_arg, thunkAPI) => {
    try {
      const { data } = await Api.get("/informations");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export default getCustomersData;
