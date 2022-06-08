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
    filterPrices: {
      start: 0,
      end: 7000
    },
    filterTimeFrom: {
      thereDeparture: {
        start: 0,
        end: 86400
      },
      thereArrival: {
        start: 0,
        end: 86400
      }
    },
    filterTimeTo: {
      backDeparture: {
        start: 0,
        end: 86400
      },
      backArrival: {
        start: 0,
        end: 86400
      }
    },
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
    filtering: (state, actions) => {
      state.filteredRoutes = [];
      state.filteredRoutes = state.currentRoutes;

      if (state.filterSeats.lux) {
        state.filteredRoutes = state.filteredRoutes.filter((el) => el.departure.have_first_class === true);
      };

      if (state.filterSeats.coupe) {
        state.filteredRoutes = state.filteredRoutes.filter((el) => el.departure.have_second_class === true);
      };

      if (state.filterSeats.reserved) {
        state.filteredRoutes = state.filteredRoutes.filter((el) => el.departure.have_third_class === true);
      };

      if (state.filterSeats.seated) {
        state.filteredRoutes = state.filteredRoutes.filter((el) => el.departure.have_fourth_class === true);
      };

      if (state.filterSeats.wifi) {
        state.filteredRoutes = state.filteredRoutes.filter((el) => el.departure.have_wifi === true);
      };

      if (state.filterSeats.express) {
        state.filteredRoutes = state.filteredRoutes.filter((el) => el.departure.is_express === true);
      };

      state.filteredRoutes = actions.payload.filteringPricesRange(
        state.filterPrices.start, state.filterPrices.end, state.filteredRoutes);

      state.filteredRoutes = state.filteredRoutes.filter((el) =>
        actions.payload.timeForSort(el.departure.from.datetime) >
        state.filterTimeFrom.thereDeparture.start &&
        actions.payload.timeForSort(el.departure.from.datetime) <
        state.filterTimeFrom.thereDeparture.end &&
        actions.payload.timeForSort(el.departure.to.datetime) >
        state.filterTimeFrom.thereArrival.start &&
        actions.payload.timeForSort(el.departure.to.datetime) <
        state.filterTimeFrom.thereArrival.end
      );
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
  filtering,
  stopFiltering,
  changeFilterSeat
} = sliceFilter.actions;

export default sliceFilter.reducer;