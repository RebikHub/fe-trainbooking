import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGetStatus, IRoute } from "../interfaces/interfaces";

const initialState: IGetStatus<IRoute | null> = {
  items: null,
  loading: false,
  error: false
};

export const sliceGetRoute = createSlice({
  name: 'sliceGetRoute',
  initialState,
  reducers: {
    getRouteRequest: (state) => {
      state.loading = true;
      state.error = false;
    },
    getRouteSuccess: (state, actions: PayloadAction<IRoute>) => {
      state.loading = false;
      state.items = actions.payload;
    },
    getRouteError: (state, actions: PayloadAction<string>) => {
      state.loading = false;
      state.error = actions.payload;
    },
    clearRouteList: (state) => {
      state.loading = false;
      state.error = false;
      state.items = null;
    }
  }
});

export const {
  getRouteRequest,
  getRouteSuccess,
  getRouteError,
  clearRouteList
} = sliceGetRoute.actions;

export default sliceGetRoute.reducer;