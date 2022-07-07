import { createSlice } from "@reduxjs/toolkit";

export const sliceGetLastRoutes = createSlice({
  name: 'sliceGetLastRoutes',
  initialState: {
    lastRoutes: [],
    loading: false,
    success: false,
    error: false
  },
  reducers: {
    requestGetLastRoutes: (state) => {
      state.loading = true;
      state.success = false;
    },
    errorGetLastRoutes: (state, actions) => {
      state.loading = false;
      state.error = actions.payload;
    },
    successGetLastRoutes: (state, actions) => {
      state.loading = false;
      state.success = true;
      state.lastRoutes = actions.payload;
    },
  }
});

export const {
  requestGetLastRoutes,
  errorGetLastRoutes,
  successGetLastRoutes
} = sliceGetLastRoutes.actions;

export default sliceGetLastRoutes.reducer;