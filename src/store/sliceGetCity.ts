import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGetStatus, IIdName } from "../interfaces/interfaces";
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import httpServices from "../middleware/httpApi";

export const getCityThunk = createAsyncThunk('sliceGetCity/getCity', async (city: string) => {
  try {
    const response = await httpServices.getCities(city);
    console.log(response);
    
    return response.data;
  } catch (error) {
    return error;
  };
});

const initialState: IGetStatus<IIdName[]> = {
  items: [],
  loading: false,
  error: false
};

export const sliceGetCity = createSlice({
  name: 'sliceGetCity',
  initialState,
  reducers: {
    // requestGetCity: (state) => {
    //   state.loading = true;
    // },
    // errorGetCity: (state, actions: PayloadAction<string>) => {
    //   state.loading = false;
    //   state.error = actions.payload;
    // },
    // successGetCity: (state, actions: PayloadAction<IIdName[]>) => {
    //   state.loading = false;
    //   state.items = actions.payload;
    // },
    clearCities: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getCityThunk.pending, (state) => {
      state.loading = true;
    }),
    builder.addCase(getCityThunk.fulfilled, (state, actions: PayloadAction<IIdName[]>) => {
      state.loading = false;
      state.items = actions.payload;
    }),
    builder.addCase(getCityThunk.rejected, (state) => {
      state.loading = false;
      state.error = true;
    })
  }
});

export const {
  // requestGetCity,
  // errorGetCity,
  // successGetCity,
  clearCities
} = sliceGetCity.actions;

export default sliceGetCity.reducer;