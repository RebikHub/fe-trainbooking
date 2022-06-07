import { createSlice } from "@reduxjs/toolkit";


export const sliceFilter = createSlice({
  name: 'sliceFilter',
  initialState: {
    currentRoutes: [],
    filteredRoutes: [],
    filterSeats: {
      coupe: false,
      reserved: false,
      seated: false,
      lux: false,
      wifi: false,
      express: false
    },
    filterPrices: null,
    filterTimeFrom: null,
    filterTimeTo: null,
    filterProcess: false
  },
  reducers: {
    addRoutes: (state, actions) => {
      state.currentRoutes = actions.payload;
      state.filterProcess = false;
    },
    addFilterSeats: (state, actions) => {
      state.filterSeats = actions.payload;
    },
    addFilterPrices: (state, actions) => {
      state.filterPrices = actions.payload;
    },
    addFilterTimeFrom: (state, actions) => {
      state.filterTimeFrom = actions.payload;
    },
    addFilterTimeTo: (state, actions) => {
      state.filterTimeTo = actions.payload;
    },
    filteringSeats: (state, actions) => {
      state.filterSeats = actions.payload;
      state.filterProcess = false;
      state.filteredRoutes = [];
      if (state.filterSeats.lux === true) {
        if (state.filterProcess) {
          state.filteredRoutes = state.filteredRoutes.filter(
            (el) => el.departure.have_first_class === true
          );
        } else {
          state.filteredRoutes = state.currentRoutes.filter((el) => el.departure.have_first_class === true);
          state.filterProcess = true;
        }
      }
      if (state.filterSeats.coupe === true) {
        if (state.filterProcess) {
          state.filteredRoutes = state.filteredRoutes.filter(
            (el) => el.departure.have_second_class === true
          );
        } else {
          state.filteredRoutes = state.currentRoutes.filter((el) => el.departure.have_second_class === true);
          state.filterProcess = true;
        }
      }
      if (state.filterSeats.reserved === true) {
        if (state.filterProcess) {
          state.filteredRoutes = state.filteredRoutes.filter(
            (el) => el.departure.have_third_class === true
          );
        } else {
          state.filteredRoutes = state.currentRoutes.filter((el) => el.departure.have_third_class === true);
          state.filterProcess = true;
        }
      }
      if (state.filterSeats.seated === true) {
        if (state.filterProcess) {
          state.filteredRoutes = state.filteredRoutes.filter(
            (el) => el.departure.have_fourth_class === true
          );
        } else {
          state.filteredRoutes = state.currentRoutes.filter((el) => el.departure.have_fourth_class === true);
          state.filterProcess = true;
        }
      }
      if (state.filterSeats.wifi === true) {
        if (state.filterProcess) {
          state.filteredRoutes = state.filteredRoutes.filter((el) => el.departure.have_wifi === true);
        } else {
          state.filteredRoutes = state.currentRoutes.filter((el) => el.departure.have_wifi === true);
          state.filterProcess = true;
        }
      }
      if (state.filterSeats.express === true) {
        if (state.filterProcess) {
          state.filteredRoutes = state.filteredRoutes.filter((el) => el.departure.is_express === true);
        } else {
          state.filteredRoutes = state.currentRoutes.filter((el) => el.departure.is_express === true);
          state.filterProcess = true;
        }
      }
    },
    filteringPrice: (state, actions) => {
      state.filteredRoutes = actions.payload;
    },
    changeFilterSeat: (state, actions) => {
      console.log(state, actions.payload);
    },
    stopFiltering: (state, actions) => {
      state.filterProcess = false;
      state.filteredRoutes = [];
    }
  }
});

export const {
  addRoutes,
  addFilterSeats,
  addFilterPrices,
  addFilterTimeFrom,
  addFilterTimeTo,
  filteringSeats,
  filteringPrice,
  stopFiltering,
  changeFilterSeat
} = sliceFilter.actions;

export default sliceFilter.reducer;