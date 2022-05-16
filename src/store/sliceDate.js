import { createSlice } from "@reduxjs/toolkit";

export const sliceDate = createSlice({
  name: 'sliceDate',
  initialState: {
    fromDate: null,
    toDate: null
  },
  reducer: {
    choiceDateFrom: (state, actions) => {
      state.fromDate = actions.payload;
    }
  }
});

export const {
  choiceDateFrom
} = sliceDate.actions;

export default sliceDate.reducer;