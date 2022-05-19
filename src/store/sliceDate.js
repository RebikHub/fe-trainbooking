import { createSlice } from "@reduxjs/toolkit";

export const sliceDate = createSlice({
  name: 'sliceDate',
  initialState: {
    fromDate: null,
    toDate: null
  },
  reducers: {
    choiceDateFrom: (state, actions) => {
      state.fromDate = actions.payload;
    },
    choiceDateTo: (state, actions) => {
      state.toDate = actions.payload;
    },
    clearDateFrom: (state, actions) => {
      state.fromDate = null;
    },
    clearDateTo: (state, actions) => {
      state.toDate = null;
    },
    clearDate: (state, actions) => {
      state.toDate = null;
      state.fromDate = null;
    }
  }
});

export const {
  choiceDateFrom,
  choiceDateTo,
  clearDateFrom,
  clearDateTo,
  clearDate
} = sliceDate.actions;

export default sliceDate.reducer;