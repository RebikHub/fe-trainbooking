import { createSlice } from "@reduxjs/toolkit";


export const sliceFilter = createSlice({
  name: 'sliceFilter',
  initialState: {
    coupe: false,
    reserved: false,
    seated: false,
    lux: false,
    wifi: false,
    express: false
  },
  reducers: {
    changeFilterSeat: (state, actions) => {
      console.log(state, actions.payload);
    }
  }
});

export const {
  changeFilterSeat
} = sliceFilter.actions;

export default sliceFilter.reducer;