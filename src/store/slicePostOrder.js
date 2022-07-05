import { createSlice } from "@reduxjs/toolkit";

export const slicePostOrder = createSlice({
  name: 'slicePostOrder',
  initialState: {
    status: false,
    loading: false,
    error: false
  },
  reducers: {
    requestPostOrder: (state, actions) => {
      state.loading = true;
      state.error = false;
    },
    successPostOrder: (state, actions) => {
      state.loading = false;
      state.status = actions.payload;
    },
    errorPostOrder: (state, actions) => {
      state.loading = false;
      state.error = true;
    }
  },
});

export const {
  requestPostOrder,
  successPostOrder,
  errorPostOrder
} = slicePostOrder.actions;

export default slicePostOrder.reducer;