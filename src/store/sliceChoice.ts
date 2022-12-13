import { IDeparture } from './../interfaces/interfaces';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
  fromDate: string,
  toDate: string,
  fromCity: string,
  toCity: string,
  searchCity: string,
  route: IDeparture | null
};

const initialState: State = {
  fromDate: '',
  toDate: '',
  fromCity: '',
  toCity: '',
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
      state.toCity = '';
      state.fromCity = '';
    },
    clearChoiceCity: (state) => {
      state.toCity = '';
      state.fromCity = '';
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