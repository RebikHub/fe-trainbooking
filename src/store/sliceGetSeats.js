import { createSlice } from "@reduxjs/toolkit";


export const sliceGetSeats = createSlice({
  name: 'sliceGetSeats',
  initialState: {
    coaches: [],
    loading: false,
    error: false
  },
  reducers: {
    requestGetSeats: (state, actions) => {
      state.loading = true;
      state.error = false;
    },
    successGetSeats: (state, actions) => {
      state.coaches = actions.payload;
      state.loading = false;
      state.error = false
    },
    errorGetSeats: (state, actions) => {
      state.loading = false;
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