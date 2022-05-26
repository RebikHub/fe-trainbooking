import { createSlice } from "@reduxjs/toolkit";


export const sliceGetCity = createSlice({
  name: 'sliceGetCity',
  initialState: {
    cities: [],
    loading: false,
    success: false,
    error: false
  },
  reducers: {
    requestGetCity: (state, actions) => {
      state.loading = true;
      state.success = false;
    },
    errorGetCity: (state, actions) => {
      state.loading = false;
      state.error = actions.payload;
    },
    successGetCity: (state, actions) => {
      state.loading = false;
      state.success = true;
      if (actions.payload.error) {
        state.error = actions.payload;
      } else {
        state.cities = actions.payload;
      };
    },
    clearCities: (state, actions) => {
      state.loading = false;
      state.success = false;
      state.cities = []
    },
  }
});

export const {
  requestGetCity,
  errorGetCity,
  successGetCity,
  clearCities
} = sliceGetCity.actions;

export default sliceGetCity.reducer;