import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPostStatus } from "../interfaces/interfaces";
import httpServices from "../middleware/httpApi";

export const postSubscribeThunk = createAsyncThunk('slicePostSubscribe/postSubscribeThunk', async (subscribe: string) => {
  try {
    const response = await httpServices.postSubscribe(subscribe);
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

export const slicePostSubscribe = createSlice({
  name: 'slicePostSubscribe',
  initialState,
  reducers: {
    clearStatusSubscribe: (state) => {
      state.status = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(postSubscribeThunk.pending, (state) => {
      state.loading = true;
    })
      .addCase(postSubscribeThunk.fulfilled, (state, actions: PayloadAction<boolean>) => {
      state.loading = false;
      state.status = actions.payload;
    })
      .addCase(postSubscribeThunk.rejected, (state) => {
      state.loading = false;
      state.error = true;
    })
  }
});

export const {
  clearStatusSubscribe
} = slicePostSubscribe.actions;

export default slicePostSubscribe.reducer;