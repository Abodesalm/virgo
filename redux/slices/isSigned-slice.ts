import { createSlice } from "@reduxjs/toolkit";
export const isSignedSlice = createSlice({
  initialState: false,
  name: "isSignedSlice",
  reducers: {
    signIn: (state) => {
      return (state = true);
    },
    signOut: (state) => {
      return (state = false);
    },
  },
});

export const { signIn, signOut } = isSignedSlice.actions;
export default isSignedSlice.reducer;
