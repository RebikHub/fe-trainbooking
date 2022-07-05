import { createSlice } from "@reduxjs/toolkit";

export const sliceOrder = createSlice({
  name: 'sliceOrder',
  initialState: {
    user: {
      first_name: '',
      last_name: '',
      patronymic: '',
      phone: null,
      email: null,
      payment_method: null
    },
    departure: {
      route_direction_id: null,
      seats: []
    }
  },
  reducers: {
    addUserPayment: (state, actions) => {
      state.user = actions.payload;
    },
    addSeatPassenger: (state, actions) => {
      state.departure.seats = [...state.departure.seats, actions.payload];
    },
    addRouteId: (state, actions) => {
      state.departure.route_direction_id = actions.payload;
    },
    removeSeatPassenger: (state, actions) => {
      state.departure.seats = state.departure.seats.filter((el) => el.person_id !== actions.payload);
    },
    clearOrder: (state, actions) => {
      state.user = {
        first_name: '',
        last_name: '',
        patronymic: '',
        phone: null,
        email: null,
        payment_method: null
      };
      state.departure = {
        route_direction_id: null,
        seats: []
      };
    },
    clearOrderPassengers: (state, actions) => {
      state.user = {
        first_name: '',
        last_name: '',
        patronymic: '',
        phone: null,
        email: null,
        payment_method: null
      };
      state.departure.seats = [];
    },
    clearOrderPayment: (state, actions) => {
      state.user = {
        first_name: '',
        last_name: '',
        patronymic: '',
        phone: null,
        email: null,
        payment_method: null
      };
    }
  }
});

export const {
  addUserPayment,
  addSeatPassenger,
  addRouteId,
  removeSeatPassenger,
  clearOrder,
  clearOrderPassengers,
  clearOrderPayment
} = sliceOrder.actions;

export default sliceOrder.reducer;