import { IPostStatus } from './../interfaces/interfaces';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Order } from '../interfaces/types';

const initialState: IPostStatus =  {
  status: false,
  loading: false,
  error: false
};

export const slicePostOrder = createSlice({
  name: 'slicePostOrder',
  initialState,
  reducers: {
    requestPostOrder: (state, actions: PayloadAction<Order>) => {
      state.status = false;
      state.loading = true;
      state.error = false;
    },
    successPostOrder: (state, actions: PayloadAction<boolean>) => {
      state.loading = false;
      state.error = false;
      state.status = actions.payload;
    },
    errorPostOrder: (state, actions: PayloadAction<string>) => {
      state.status = false;
      state.loading = false;
      state.error = actions.payload;
    }
  },
});

export const {
  requestPostOrder,
  successPostOrder,
  errorPostOrder
} = slicePostOrder.actions;

export default slicePostOrder.reducer;