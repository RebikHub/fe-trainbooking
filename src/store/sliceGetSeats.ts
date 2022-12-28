import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGetStatus, ISeats } from "../interfaces/interfaces";
import httpServices from "../middleware/httpApi";

export const getSeatsThunk = createAsyncThunk('sliceGetSeats/getSeatsThunk', async (id: string) => {
  try {
    const response = await httpServices.getSeats(id);
    return response.data;
  } catch (error) {
    return error;
  };
});

const initialState: IGetStatus<ISeats[]> = {
  items: [],
  loading: false,
  error: false
}

export const sliceGetSeats = createSlice({
  name: 'sliceGetSeats',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSeatsThunk.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getSeatsThunk.fulfilled, (state, actions: PayloadAction<ISeats[]>) => {
        state.items = actions.payload;
        state.loading = false;
        state.error = false
      })
      .addCase(getSeatsThunk.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
  }
});

export default sliceGetSeats.reducer;