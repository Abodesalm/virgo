import { createSlice } from "@reduxjs/toolkit";
export const searchSlice = createSlice({
  initialState: 1,
  name: "pageSlice",
  reducers: {
    increase: (state) => {
      return (state += 1);
    },
    decrease: (state) => {
      return state > 1 ? (state -= 1) : state;
    },
    set: (state, action) => {
      return action.payload > 1 ? (state = action.payload) : state;
    },
  },
});

export const { increase, decrease, set } = searchSlice.actions;
export default searchSlice.reducer;
