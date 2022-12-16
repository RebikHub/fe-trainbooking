import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGetStatus, IIdName } from "../interfaces/interfaces";
import { createAsyncThunk } from '@reduxjs/toolkit'
import httpServices from "../middleware/httpApi";

export const getCityThunk = createAsyncThunk('sliceGetCity/getCityThunk', async (city: string) => {
  try {
    const response = await httpServices.getCities(city);
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
    clearCities: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCityThunk.pending, (state) => {
      state.loading = true;
    })
      .addCase(getCityThunk.fulfilled, (state, actions: PayloadAction<IIdName[]>) => {
      state.loading = false;
      state.items = actions.payload;
    })
      .addCase(getCityThunk.rejected, (state) => {
      state.loading = false;
      state.error = true;
    })
  }
});

export const {
  clearCities
} = sliceGetCity.actions;

export default sliceGetCity.reducer;