import { IPostStatus } from './../interfaces/interfaces';
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Order } from '../interfaces/types';
import httpServices from '../services/httpApi';

export const postOrderThunk = createAsyncThunk('slicePostOrder/postOrderThunk', async (order: Order) => {
  try {
    const response = await httpServices.postOrder(order);
    return response.data;
  } catch (error) {
    return error;
  };
});

const initialState: IPostStatus = {
  status: false,
  loading: false,
  error: false
};

export const slicePostOrder = createSlice({
  name: 'slicePostOrder',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(postOrderThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(postOrderThunk.fulfilled, (state, actions: PayloadAction<boolean>) => {
        state.loading = false;
        state.status = actions.payload;
      })
      .addCase(postOrderThunk.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
  },
});

export default slicePostOrder.reducer;