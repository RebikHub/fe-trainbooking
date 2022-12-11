import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGetStatus, IIdName } from "../interfaces/interfaces";

const initialState: IGetStatus<IIdName[]> = {
  items: [],
  loading: false,
  error: false
};

export const sliceGetCity = createSlice({
  name: 'sliceGetCity',
  initialState,
  reducers: {
    requestGetCity: (state) => {
      state.loading = true;
    },
    errorGetCity: (state, actions: PayloadAction<string>) => {
      state.loading = false;
      state.error = actions.payload;
    },
    successGetCity: (state, actions: PayloadAction<IIdName[]>) => {
      state.loading = false;
      state.items = actions.payload;
    },
    clearCities: (state) => {
      state.loading = false;
      state.items = []
    },
  }
});

export const {
  requestGetCity,
  errorGetCity,
  successGetCity,
  clearCities
} = sliceGetCity.actions;

export default sliceGetCity.reducer;