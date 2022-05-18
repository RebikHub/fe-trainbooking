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
    clearDate: (state, actions) => {
      state.fromDate = null;
      state.toDate = null;
    }
  }
});

export const {
  choiceDateFrom,
  choiceDateTo,
  clearDate
} = sliceDate.actions;

export default sliceDate.reducer;