import { createSlice } from "@reduxjs/toolkit";

const searchValueSlice = createSlice({
  name: "searchInput",
  initialState: {
    search: "",
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = searchValueSlice.actions;
export default searchValueSlice.reducer;
