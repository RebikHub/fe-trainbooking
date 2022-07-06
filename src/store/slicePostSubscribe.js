import { createSlice } from "@reduxjs/toolkit";

export const slicePostSubscribe = createSlice({
  name: 'slicePostSubscribe',
  initialState: {
    status: false,
    loading: false,
    error: false
  },
  reducers: {
    requestPostSubscribe: (state, actions) => {
      state.loading = true;
      state.error = false;
      state.status = false;
    },
    successPostSubscribe: (state, actions) => {
      state.loading = false;
      state.status = actions.payload;
    },
    errorPostSubscribe: (state, actions) => {
      state.loading = false;
      state.error = true;
      state.status = false;
    },
    clearStatusSubscribe: (state, actions) => {
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