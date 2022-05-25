import { createSlice } from "@reduxjs/toolkit";

export const sliceHeaderTransform = createSlice({
  name: 'sliceHeaderTransform',
  initialState: {
    classSearch: 'search-widget',
    classHeader: 'header',
    classTitle: 'header-title',
    classLine: 'header-endline',
    transform: false,
  },
  reducers: {
    transformHeader: (state, actions) => {
      state.classHeader = 'header-transform';
      state.classSearch = 'search-transform';
      state.classTitle = 'none';
      state.classLine = 'endline-transform';
      state.transform = true;
    },
    transformHeaderToMain: (state, actions) => {
      state.classSearch = 'search-widget';
      state.classHeader = 'header';
      state.classTitle = 'header-title';
      state.classLine = 'header-endline';
      state.transform = false;
    }
  }
});

export const {
  transformHeader,
  transformHeaderToMain
} = sliceHeaderTransform.actions;

export default sliceHeaderTransform.reducer;