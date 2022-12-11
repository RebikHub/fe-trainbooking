import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGetStatus, ISeats } from "../interfaces/interfaces";

const initialState: IGetStatus<ISeats[]> = {
  items: [],
  loading: false,
  error: false
}

export const sliceGetSeats = createSlice({
  name: 'sliceGetSeats',
  initialState,
  reducers: {
    requestGetSeats: (state) => {
      state.loading = true;
      state.error = false;
    },
    successGetSeats: (state, actions: PayloadAction<ISeats[]>) => {
      state.items = actions.payload;
      state.loading = false;
      state.error = false
    },
    errorGetSeats: (state, actions: PayloadAction<string>) => {
      state.loading = false;
      state.error = actions.payload;
    },
  }
});

export const {
  requestGetSeats,
  successGetSeats,
  errorGetSeats
} = sliceGetSeats.actions;

export default sliceGetSeats.reducer;