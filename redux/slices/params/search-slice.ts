import { createSlice } from "@reduxjs/toolkit";
export const searchSlice = createSlice({
  initialState: "",
  name: "searchSlice",
  reducers: {
    edit: (state, action) => {
      state = action.payload;
    },
  },
});

export const { edit } = searchSlice.actions;
export default searchSlice.reducer;
