import { IUser, IOrderDeparture } from './../interfaces/interfaces';
import { createSlice } from "@reduxjs/toolkit";

type State = {
  user: IUser,
  departure: IOrderDeparture
};

const initialState: State = {
  user: {
    first_name: '',
    last_name: '',
    patronymic: '',
    phone: '',
    email: '',
    payment_method: ''
  },
  departure: {
    route_direction_id: '',
    seats: []
  }
};

export const sliceOrder = createSlice({
  name: 'sliceOrder',
  initialState,
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
    clearOrder: (state) => {
      state.user = {
        first_name: '',
        last_name: '',
        patronymic: '',
        phone: '',
        email: '',
        payment_method: ''
      };
      state.departure = {
        route_direction_id: '',
        seats: []
      };
    },
    clearOrderPassengers: (state) => {
      state.user = {
        first_name: '',
        last_name: '',
        patronymic: '',
        phone: '',
        email: '',
        payment_method: ''
      };
      state.departure.seats = [];
    },
    clearOrderPayment: (state) => {
      state.user = {
        first_name: '',
        last_name: '',
        patronymic: '',
        phone: '',
        email: '',
        payment_method: ''
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