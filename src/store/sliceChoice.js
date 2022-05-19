import { createSlice } from "@reduxjs/toolkit";

export const sliceChoice = createSlice({
  name: 'sliceChoice',
  initialState: {
    fromDate: '',
    toDate: '',
    fromCity: '',
    toCity: ''
  },
  reducers: {
    choiceDateFrom: (state, actions) => {
      state.fromDate = actions.payload;
    },
    choiceDateTo: (state, actions) => {
      state.toDate = actions.payload;
    },
    choiceCityFrom: (state, actions) => {
      state.fromCity = actions.payload;
    },
    choiceCityTo: (state, actions) => {
      state.toCity = actions.payload;
    },
    clearDate: (state, actions) => {
      state.toDate = '';
      state.fromDate = '';
      state.toCity = '';
      state.fromCity = '';
    }
  }
});

export const {
  choiceDateFrom,
  choiceDateTo,
  choiceCityFrom,
  choiceCityTo,
  clearDate
} = sliceChoice.actions;

export default sliceChoice.reducer;