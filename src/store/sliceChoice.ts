import { IDeparture } from './../interfaces/interfaces';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
  fromDate: string,
  toDate: string,
  fromCity: null | string,
  toCity: null | string,
  searchCity: string,
  route: null | IDeparture
};

const initialState: State = {
  fromDate: '',
  toDate: '',
  fromCity: null,
  toCity: null,
  searchCity: '',
  route: null
};

export const sliceChoice = createSlice({
  name: 'sliceChoice',
  initialState,
  reducers: {
    choiceDateFrom: (state, actions: PayloadAction<string>) => {
      state.fromDate = actions.payload;
    },
    choiceDateTo: (state, actions: PayloadAction<string>) => {
      state.toDate = actions.payload;
    },
    choiceCityFrom: (state, actions: PayloadAction<string>) => {
      state.fromCity = actions.payload;
    },
    choiceCityTo: (state, actions: PayloadAction<string>) => {
      state.toCity = actions.payload;
    },
    searchCity: (state, actions: PayloadAction<string>) => {
      state.searchCity = actions.payload;
    },
    clearAllCity: (state) => {
      state.toDate = '';
      state.fromDate = '';
      state.toCity = null;
      state.fromCity = null;
    },
    clearChoiceCity: (state) => {
      state.toCity = null;
      state.fromCity = null;
    },
    choiceRoute: (state, actions: PayloadAction<IDeparture>) => {
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