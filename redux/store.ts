import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slices/params/search-slice";
import pageReducer from "./slices/params/page-slice";
import dataReducer from "./slices/params/data-slice";
import isSignedReducer from "./slices/isSigned-slice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    page: pageReducer,
    data: dataReducer,
    isSigned: isSignedReducer,
  },
});
