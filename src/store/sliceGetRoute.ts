import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGetStatus, IRoute, ISearchRoute } from "../interfaces/interfaces";
import httpServices from "../services/httpApi";

export const getRouteThunk = createAsyncThunk('sliceGetCity/getRouteThunk', async (route: ISearchRoute) => {
  try {
    const response = await httpServices.getRoutes(route);
    return response.data;
  } catch (error) {
    return error;
  };
});

const initialState: IGetStatus<IRoute | null> = {
  items: null,
  loading: false,
  error: false
};

export const sliceGetRoute = createSlice({
  name: 'sliceGetRoute',
  initialState,
  reducers: {
    clearRouteList: () => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRouteThunk.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getRouteThunk.fulfilled, (state, actions: PayloadAction<IRoute>) => {
        state.loading = false;
        state.error = false;
        state.items = actions.payload;
      })
      .addCase(getRouteThunk.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
  }
});

export const {
  clearRouteList
} = sliceGetRoute.actions;

export default sliceGetRoute.reducer;