import { configureStore } from "@reduxjs/toolkit";
import sliceDate from "./sliceDate";

export const store = configureStore({
  reducer: {
    sliceDate
  }
})