import { createSlice } from "@reduxjs/toolkit";

export const slicePrice = createSlice({
  name: 'slicePrice',
  initialState: {
    firstClass: {
      seatsAge: 0,
      seatsChild: 0,
      amountTickets: 0, // seatsAge + seatsChild
      seatsPriceAge: 0,
      seatsPriceChild: 0,
      serviceWifi: 0,
      serviceLinens: 0,
      totalPrice: 0 // seatsPrice + serviceWifi + serviceLinens
    },
    secondClass: {
      seatsAge: 0,
      seatsChild: 0,
      amountTickets: 0, // seatsAge + seatsChild
      seatsPriceAge: 0,
      seatsPriceChild: 0,
      serviceWifi: 0,
      serviceLinens: 0,
      totalPrice: 0 // seatsPrice + serviceWifi + serviceLinens
    },
    thirdClass: {
      seatsAge: 0,
      seatsChild: 0,
      amountTickets: 0, // seatsAge + seatsChild
      seatsPriceAge: 0,
      seatsPriceChild: 0,
      serviceWifi: 0,
      serviceLinens: 0,
      totalPrice: 0 // seatsPrice + serviceWifi + serviceLinens
    },
    fourthClass: {
      seatsAge: 0,
      seatsChild: 0,
      amountTickets: 0, // seatsAge + seatsChild
      seatsPriceAge: 0,
      seatsPriceChild: 0,
      serviceWifi: 0,
      serviceLinens: 0,
      totalPrice: 0 // seatsPrice + serviceWifi + serviceLinens
    },
    notice: false,
    totalSeatsAge: 0,
    totalSeatsChild: 0,
    totalPriceAge: 0,
    totalPriceChild: 0,
    totalPriceAll: 0
  },
  reducers: {
    changeAgeTickets: (state, actions) => {
      if (actions.payload.classType === 'first') {
        state.firstClass.seatsAge = actions.payload.seatsAge;
        state.firstClass.amountTickets += actions.payload.seatsAge;
        state.totalSeatsAge += actions.payload.seatsAge;
      };
      if (actions.payload.classType === 'second') {
        state.secondClass.seatsAge = actions.payload.seatsAge;
        state.secondClass.amountTickets += actions.payload.seatsAge;
        state.totalSeatsAge += actions.payload.seatsAge;
      };
      if (actions.payload.classType === 'third') {
        state.thirdClass.seatsAge = actions.payload.seatsAge;
        state.thirdClass.amountTickets += actions.payload.seatsAge;
        state.totalSeatsAge += actions.payload.seatsAge;
      };
      if (actions.payload.classType === 'fourth') {
        state.fourthClass.seatsAge = actions.payload.seatsAge;
        state.fourthClass.amountTickets += actions.payload.seatsAge;
        state.totalSeatsAge += actions.payload.seatsAge;
      };
    },
    changeChildTickets: (state, actions) => {
      if (actions.payload.classType === 'first') {
        state.firstClass.seatsChild = actions.payload.seatsChild;
        state.firstClass.amountTickets += actions.payload.seatsChild;
        state.totalSeatsChild += actions.payload.seatsChild;
      };
      if (actions.payload.classType === 'second') {
        state.secondClass.seatsChild = actions.payload.seatsChild;
        state.secondClass.amountTickets += actions.payload.seatsChild;
        state.totalSeatsChild += actions.payload.seatsChild;
      };
      if (actions.payload.classType === 'third') {
        state.thirdClass.seatsChild = actions.payload.seatsChild;
        state.thirdClass.amountTickets += actions.payload.seatsChild;
        state.totalSeatsChild += actions.payload.seatsChild;
      };
      if (actions.payload.classType === 'fourth') {
        state.fourthClass.seatsChild = actions.payload.seatsChild;
        state.fourthClass.amountTickets += actions.payload.seatsChild;
        state.totalSeatsChild += actions.payload.seatsChild;
      };
    },
    changePriceSeats: (state, actions) => {
      if (actions.payload.classType === 'first') {
        if (state.firstClass.seatsAge > 0) {
          state.firstClass.seatsAge -= 1;
          state.firstClass.seatsPriceAge += actions.payload.price;
        } else if (state.firstClass.seatsChild > 0) {
          state.firstClass.seatsChild -= 1;
          state.firstClass.seatsPriceChild += actions.payload.price;
        };
        state.firstClass.totalPrice += actions.payload.price;
      };

      if (actions.payload.classType === 'second') {
        if (state.secondClass.seatsAge > 0) {
          state.secondClass.seatsAge -= 1;
          state.secondClass.seatsPriceAge += actions.payload.price;
        } else if (state.secondClass.seatsChild > 0) {
          state.secondClass.seatsChild -= 1;
          state.secondClass.seatsPriceChild += actions.payload.price;
        };
        state.secondClass.totalPrice += actions.payload.price;
      };

      if (actions.payload.classType === 'third') {
        if (state.thirdClass.seatsAge > 0) {
          state.thirdClass.seatsAge -= 1;
          state.thirdClass.seatsPriceAge += actions.payload.price;
        } else if (state.thirdClass.seatsChild > 0) {
          state.thirdClass.seatsChild -= 1;
          state.thirdClass.seatsPriceChild += actions.payload.price;
        };
        state.thirdClass.totalPrice += actions.payload.price;
      };

      if (actions.payload.classType === 'fourth') {
        if (state.fourthClass.seatsAge > 0) {
          state.fourthClass.seatsAge -= 1;
          state.fourthClass.seatsPriceAge += actions.payload.price;
        } else if (state.fourthClass.seatsChild > 0) {
          state.fourthClass.seatsChild -= 1;
          state.fourthClass.seatsPriceChild += actions.payload.price;
        };
        state.fourthClass.totalPrice += actions.payload.price;
      };
    },
    changeServiceWifi: (state, actions) => {
      if (actions.payload.classType === 'first') {
        state.firstClass.totalPrice += actions.payload.price;
      };
      if (actions.payload.classType === 'second') {
        state.secondClass.totalPrice += actions.payload.price;
      };
      if (actions.payload.classType === 'third') {
        state.thirdClass.totalPrice += actions.payload.price;
      };
      if (actions.payload.classType === 'fourth') {
        state.fourthClass.totalPrice += actions.payload.price;
      };
    },
    changeServiceLinens: (state, actions) => {
      if (actions.payload.classType === 'first') {
        state.firstClass.totalPrice += actions.payload.price;
      };
      if (actions.payload.classType === 'second') {
        state.secondClass.totalPrice += actions.payload.price;
      };
      if (actions.payload.classType === 'third') {
        state.thirdClass.totalPrice += actions.payload.price;
      };
      if (actions.payload.classType === 'fourth') {
        state.fourthClass.totalPrice += actions.payload.price;
      };
    },
    changeAmountTickets: (state, actions) => {
      if (actions.payload.classType === 'first') {
        state.firstClass.amountTickets += actions.payload.amount;
      };
      if (actions.payload.classType === 'second') {
        state.secondClass.amountTickets += actions.payload.amount;
      };
      if (actions.payload.classType === 'third') {
        state.thirdClass.amountTickets += actions.payload.amount;
      };
      if (actions.payload.classType === 'fourth') {
        state.fourthClass.amountTickets += actions.payload.amount;
      };
    },
    clearAllPrices: (state, actions) => {
      state.firstClass.seatsAge = 0;
      state.firstClass.seatsChild = 0;
      state.firstClass.amountTickets = 0;
      state.firstClass.seatsPriceAge = 0;
      state.firstClass.seatsPriceChild = 0;
      state.firstClass.serviceWifi = 0;
      state.firstClass.serviceLinens = 0;
      state.firstClass.totalPrice = 0;
      
      state.secondClass.seatsAge = 0;
      state.secondClass.seatsChild = 0;
      state.secondClass.amountTickets = 0;
      state.secondClass.seatsPriceAge = 0;
      state.secondClass.seatsPriceChild = 0;
      state.secondClass.serviceWifi = 0;
      state.secondClass.serviceLinens = 0;
      state.secondClass.totalPrice = 0;

      state.thirdClass.seatsAge = 0;
      state.thirdClass.seatsChild = 0;
      state.thirdClass.amountTickets = 0;
      state.thirdClass.seatsPriceAge = 0;
      state.thirdClass.seatsPriceChild = 0;
      state.thirdClass.serviceWifi = 0;
      state.thirdClass.serviceLinens = 0;
      state.thirdClass.totalPrice = 0;

      state.fourthClass.seatsAge = 0;
      state.fourthClass.seatsChild = 0;
      state.fourthClass.amountTickets = 0;
      state.fourthClass.seatsPriceAge = 0;
      state.fourthClass.seatsPriceChild = 0;
      state.fourthClass.serviceWifi = 0;
      state.fourthClass.serviceLinens = 0;
      state.fourthClass.totalPrice = 0;
    },
    changeNotice: (state, actions) => {
      state.notice = actions.payload;
    },
    totalChoiceRoute: (state, action) => {
      // state.totalSeatsAge = state.firstClass.seatsAge + state.secondClass.seatsAge + state.thirdClass.seatsAge + state.fourthClass.seatsAge;
      // state.totalSeatsChild = state.firstClass.seatsChild + state.secondClass.seatsChild + state.thirdClass.seatsChild + state.fourthClass.seatsChild;
      state.totalPriceAge = state.firstClass.seatsPriceAge + state.secondClass.seatsPriceAge + state.thirdClass.seatsPriceAge + state.fourthClass.seatsPriceAge;
      state.totalPriceChild = state.firstClass.seatsPriceChild + state.secondClass.seatsPriceChild + state.thirdClass.seatsPriceChild + state.fourthClass.seatsPriceChild;
      state.totalPriceAll = state.firstClass.totalPrice + state.secondClass.totalPrice + state.thirdClass.totalPrice + state.fourthClass.totalPrice;
    },
    clearTotalPrice: (state, actions) => {
      state.notice = false;
      state.totalSeatsAge = 0;
      state.totalSeatsChild = 0;
      state.totalPriceAge = 0;
      state.totalPriceChild = 0;
     state.totalPriceAll = 0;
    }
  }
});

export const {
  changeAgeTickets,
  changeChildTickets,
  changePriceSeats,
  changeServiceWifi,
  changeServiceLinens,
  changeAmountTickets,
  clearAllPrices,
  changeNotice,
  totalChoiceRoute,
  clearTotalPrice
} = slicePrice.actions;

export default slicePrice.reducer;