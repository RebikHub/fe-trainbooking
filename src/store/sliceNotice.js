import { createSlice } from "@reduxjs/toolkit";

export const sliceNotice = createSlice({
  name: 'sliceNotice',
  initialState: {
    notice: false,
    text: ''
  },
  reducers: {
    changeNotice: (state, actions) => {
      state.notice = actions.payload.notice;
      state.text = actions.payload.text;
    }
  }
});

export const {
  changeNotice
} = sliceNotice.actions;

export default sliceNotice.reducer;