import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPostStatus } from "../interfaces/interfaces";

const initialState: IPostStatus = {
  status: false,
  loading: false,
  error: false
};

export const slicePostSubscribe = createSlice({
  name: 'slicePostSubscribe',
  initialState,
  reducers: {
    requestPostSubscribe: (state) => {
      state.loading = true;
      state.error = false;
      state.status = false;
    },
    successPostSubscribe: (state, actions: PayloadAction<boolean>) => {
      state.loading = false;
      state.error = false;
      state.status = actions.payload;
    },
    errorPostSubscribe: (state) => {
      state.loading = false;
      state.error = true;
      state.status = false;
    },
    clearStatusSubscribe: (state) => {
      state.status = false;
    }
  },
});

export const {
  requestPostSubscribe,
  successPostSubscribe,
  errorPostSubscribe,
  clearStatusSubscribe
} = slicePostSubscribe.actions;

export default slicePostSubscribe.reducer;