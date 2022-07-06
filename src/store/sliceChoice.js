import { createSlice } from "@reduxjs/toolkit";

export const sliceChoice = createSlice({
  name: 'sliceChoice',
  initialState: {
    fromDate: '',
    toDate: '',
    fromCity: null,
    toCity: null,
    searchCity: '',
    route: []
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
    clearAllCity: (state, actions) => {
      state.toDate = '';
      state.fromDate = '';
      state.toCity = null;
      state.fromCity = null;
    },
    clearChoiceCity: (state, actions) => {
      state.toCity = null;
      state.fromCity = null;
    },
    choiceRoute: (state, actions) => {
      state.route = actions.payload;
    }
  }
});

export const {
  choiceDateFrom,
  choiceDateTo,
  choiceCityFrom,
  choiceCityTo,
  searchCity,
  clearChoiceCity,
  clearAllCity,
  choiceRoute
} = sliceChoice.actions;

export default sliceChoice.reducer;