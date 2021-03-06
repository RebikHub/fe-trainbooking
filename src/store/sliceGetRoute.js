import { createSlice } from "@reduxjs/toolkit";

export const sliceGetRoute = createSlice({
  name: 'sliceGetRoute',
  initialState: {
    loading: false,
    error: false,
    route: []
  },
  reducers: {
    getRouteRequest: (state) => {
      state.loading = true;
      state.error = false;
    },
    getRouteSuccess: (state, actions) => {
      state.loading = false;
      if (actions.payload.error) {
        state.error = actions.payload;
      } else {
        state.route = actions.payload;
      };
    },
    getRouteError: (state, actions) => {
      state.loading = false;
      state.error = actions.payload;
    },
    clearRouteList: (state) => {
      state.loading = false;
      state.error = false;
      state.route = [];
    }
  }
});

export const {
  getRouteRequest,
  getRouteSuccess,
  getRouteError,
  clearRouteList
} = sliceGetRoute.actions;

export default sliceGetRoute.reducer;