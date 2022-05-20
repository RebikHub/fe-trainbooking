import { createSlice } from "@reduxjs/toolkit";

export const sliceChoice = createSlice({
  name: 'sliceChoice',
  initialState: {
    fromDate: '',
    toDate: '',
    fromCity: '',
    toCity: '',
    searchCity: ''
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
    searchCity: (state, actions) => {
      state.searchCity = actions.payload;
    },
    clearAll: (state, actions) => {
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
  searchCity,
  clearAll
} = sliceChoice.actions;

export default sliceChoice.reducer;