import { configureStore } from "@reduxjs/toolkit";
import sliceChoice from "./sliceChoice";

export const store = configureStore({
  reducer: {
    sliceChoice
  }
})