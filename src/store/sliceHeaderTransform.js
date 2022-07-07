import { createSlice } from "@reduxjs/toolkit";

export const sliceHeaderTransform = createSlice({
  name: 'sliceHeaderTransform',
  initialState: {
    classSearch: 'search-widget',
    classHeader: 'header',
    classTitle: 'header-title',
    classLine: 'header-endline',
    transform: false,
    success: false
  },
  reducers: {
    transformHeader: (state) => {
      state.classHeader = 'header-transform';
      state.classSearch = 'search-transform';
      state.classTitle = 'none';
      state.classLine = 'none';
      state.transform = true;
      state.success = false;
    },
    transformHeaderToMain: (state) => {
      state.classSearch = 'search-widget';
      state.classHeader = 'header';
      state.classTitle = 'header-title';
      state.classLine = 'header-endline';
      state.transform = false;
      state.success = false;
    },
    transformHeaderSuccess: (state) => {
      state.success = true;
      state.classTitle = 'none';
      state.classSearch = 'none';
      state.classHeader = 'header-success';
    }
  }
});

export const {
  transformHeader,
  transformHeaderToMain,
  transformHeaderSuccess
} = sliceHeaderTransform.actions;

export default sliceHeaderTransform.reducer;