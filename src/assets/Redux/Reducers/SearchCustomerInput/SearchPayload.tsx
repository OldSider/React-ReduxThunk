import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
};

const searchValueSlice = createSlice({
  name: "seartcInput",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = searchValueSlice.actions;
export default searchValueSlice.reducer;
