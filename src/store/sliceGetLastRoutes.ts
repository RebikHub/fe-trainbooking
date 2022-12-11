import { IGetStatus, IItem } from './../interfaces/interfaces';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IGetStatus<IItem[]> = {
  items: [],
  loading: false,
  error: false
};

export const sliceGetLastRoutes = createSlice({
  name: 'sliceGetLastRoutes',
  initialState,
  reducers: {
    requestGetLastRoutes: (state) => {
      state.loading = true;
    },
    errorGetLastRoutes: (state, actions: PayloadAction<string>) => {
      state.loading = false;
      state.error = actions.payload;
    },
    successGetLastRoutes: (state, actions: PayloadAction<IItem[]>) => {
      state.loading = false;
      state.items = actions.payload;
    },
  }
});

export const {
  requestGetLastRoutes,
  errorGetLastRoutes,
  successGetLastRoutes
} = sliceGetLastRoutes.actions;

export default sliceGetLastRoutes.reducer;