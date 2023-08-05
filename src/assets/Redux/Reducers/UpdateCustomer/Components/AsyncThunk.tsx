import { createAsyncThunk } from "@reduxjs/toolkit";

import EditCustomerModal from "../../../../Interface/EditModalInterface";
import Api from "../../../../Provider/Api";

const updateCustomer = createAsyncThunk(
  "dataBaseUpdate/updateCustomer",
  async ({ customerId, customerData }: EditCustomerModal, thunkAPI) => {
    try {
      const { data } = await Api.put(
        `/informations/${customerId}`,
        customerData
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export default updateCustomer;
