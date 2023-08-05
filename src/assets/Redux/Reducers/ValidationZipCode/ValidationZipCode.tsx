import { createSlice } from "@reduxjs/toolkit";

const validationZipCode = createSlice({
  name: "Validation",
  initialState: {
    validationInput: "",
  },
  reducers: {
    setValidationInput: (state, action) => {
      state.validationInput = action.payload;
    },
  },
});

export const { setValidationInput } = validationZipCode.actions;
export default validationZipCode.reducer;
