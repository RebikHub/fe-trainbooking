import { createSlice } from "@reduxjs/toolkit";

export const sliceGetSeats = createSlice({
  name: 'sliceGetSeats',
  initialState: {
    coaches: [],
    loadingSeats: false,
    error: false
  },
  reducers: {
    requestGetSeats: (state) => {
      state.loadingSeats = true;
      state.error = false;
    },
    successGetSeats: (state, actions) => {
      state.coaches = actions.payload;
      state.loadingSeats = false;
      state.error = false
    },
    errorGetSeats: (state, actions) => {
      state.loadingSeats = false;
      state.error = actions.payload;
    },
  }
});

export const {
  requestGetSeats,
  successGetSeats,
  errorGetSeats
} = sliceGetSeats.actions;

export default sliceGetSeats.reducer;