import { createSlice } from "@reduxjs/toolkit";

export const slicePrice = createSlice({
  name: 'slicePrice',
  initialState: {
    firstClass: {
      seatsAge: 0,
      seatsChild: 0,
      amountTickets: 0, // seatsAge + seatsChild
      seatsPrice: 0,
      serviceWifi: 0,
      serviceLinens: 0,
      totalPrice: 0 // seatsPrice + serviceWifi + serviceLinens
    },
    secondClass: {
      seatsAge: 0,
      seatsChild: 0,
      amountTickets: 0, // seatsAge + seatsChild
      seatsPrice: 0,
      serviceWifi: 0,
      serviceLinens: 0,
      totalPrice: 0 // seatsPrice + serviceWifi + serviceLinens
    },
    thirdClass: {
      seatsAge: 0,
      seatsChild: 0,
      amountTickets: 0, // seatsAge + seatsChild
      seatsPrice: 0,
      serviceWifi: 0,
      serviceLinens: 0,
      totalPrice: 0 // seatsPrice + serviceWifi + serviceLinens
    },
    fourthClass: {
      seatsAge: 0,
      seatsChild: 0,
      amountTickets: 0, // seatsAge + seatsChild
      seatsPrice: 0,
      serviceWifi: 0,
      serviceLinens: 0,
      totalPrice: 0 // seatsPrice + serviceWifi + serviceLinens
    },
    notice: false
  },
  reducers: {
    changeAgeTickets: (state, actions) => {
      if (actions.payload.classType === 'first') {
        state.firstClass.seatsAge = actions.payload.seatsAge;
        state.firstClass.amountTickets = state.firstClass.seatsAge + state.firstClass.seatsChild;
      };
      if (actions.payload.classType === 'second') {
        state.secondClass.seatsAge = actions.payload.seatsAge;
        state.secondClass.amountTickets = state.secondClass.seatsAge + state.secondClass.seatsChild;
      };
      if (actions.payload.classType === 'third') {
        state.thirdClass.seatsAge = actions.payload.seatsAge;
        state.thirdClass.amountTickets = state.thirdClass.seatsAge + state.thirdClass.seatsChild;
      };
      if (actions.payload.classType === 'fourth') {
        state.fourthClass.seatsAge = actions.payload.seatsAge;
        state.fourthClass.amountTickets = state.fourthClass.seatsAge + state.fourthClass.seatsChild;
      };
    },
    changeChildTickets: (state, actions) => {
      if (actions.payload.classType === 'first') {
        state.firstClass.seatsChild = actions.payload.seatsChild;
        state.firstClass.amountTickets = state.firstClass.seatsAge + state.firstClass.seatsChild;
      };
      if (actions.payload.classType === 'second') {
        state.secondClass.seatsChild = actions.payload.seatsChild;
        state.secondClass.amountTickets = state.secondClass.seatsAge + state.secondClass.seatsChild;
      };
      if (actions.payload.classType === 'third') {
        state.thirdClass.seatsChild = actions.payload.seatsChild;
        state.thirdClass.amountTickets = state.thirdClass.seatsAge + state.thirdClass.seatsChild;
      };
      if (actions.payload.classType === 'fourth') {
        state.fourthClass.seatsChild = actions.payload.seatsChild;
        state.fourthClass.amountTickets = state.fourthClass.seatsAge + state.fourthClass.seatsChild;
      };
    },
    changePriceSeats: (state, actions) => {
      if (actions.payload.classType === 'first') {
        state.firstClass.seatsPrice = actions.payload.price;
        state.firstClass.totalPrice = state.firstClass.seatsPrice + state.firstClass.serviceLinens + state.firstClass.serviceWifi;
      };
      if (actions.payload.classType === 'second') {
        state.secondClass.seatsPrice = actions.payload.price;
        state.secondClass.totalPrice = state.secondClass.seatsPrice + state.secondClass.serviceLinens + state.secondClass.serviceWifi;
      };
      if (actions.payload.classType === 'third') {
        state.thirdClass.seatsPrice = actions.payload.price;
        state.thirdClass.totalPrice = state.thirdClass.seatsPrice + state.thirdClass.serviceLinens + state.thirdClass.serviceWifi;
      };
      if (actions.payload.classType === 'fourth') {
        state.fourthClass.seatsPrice = actions.payload.price;
        state.fourthClass.totalPrice = state.fourthClass.seatsPrice + state.fourthClass.serviceLinens + state.fourthClass.serviceWifi;
      };
    },
    changeServiceWifi: (state, actions) => {
      if (actions.payload.classType === 'first') {
        state.firstClass.serviceWifi = actions.payload.price;
        state.firstClass.totalPrice = state.firstClass.seatsPrice + state.firstClass.serviceLinens + state.firstClass.serviceWifi;
      };
      if (actions.payload.classType === 'second') {
        state.secondClass.serviceWifi = actions.payload.price;
        state.secondClass.totalPrice = state.secondClass.seatsPrice + state.secondClass.serviceLinens + state.secondClass.serviceWifi;
      };
      if (actions.payload.classType === 'third') {
        state.thirdClass.serviceWifi = actions.payload.price;
        state.thirdClass.totalPrice = state.thirdClass.seatsPrice + state.thirdClass.serviceLinens + state.thirdClass.serviceWifi;
      };
      if (actions.payload.classType === 'fourth') {
        state.fourthClass.serviceWifi = actions.payload.price;
        state.fourthClass.totalPrice = state.fourthClass.seatsPrice + state.fourthClass.serviceLinens + state.fourthClass.serviceWifi;
      };
    },
    changeServiceLinens: (state, actions) => {
      if (actions.payload.classType === 'first') {
        state.firstClass.serviceLinens = actions.payload.price;
        state.firstClass.totalPrice = state.firstClass.seatsPrice + state.firstClass.serviceLinens + state.firstClass.serviceWifi;
      };
      if (actions.payload.classType === 'second') {
        state.secondClass.serviceLinens = actions.payload.price;
        state.secondClass.totalPrice = state.secondClass.seatsPrice + state.secondClass.serviceLinens + state.secondClass.serviceWifi;
      };
      if (actions.payload.classType === 'third') {
        state.thirdClass.serviceLinens = actions.payload.price;
        state.thirdClass.totalPrice = state.thirdClass.seatsPrice + state.thirdClass.serviceLinens + state.thirdClass.serviceWifi;
      };
      if (actions.payload.classType === 'fourth') {
        state.fourthClass.serviceLinens = actions.payload.price;
        state.fourthClass.totalPrice = state.fourthClass.seatsPrice + state.fourthClass.serviceLinens + state.fourthClass.serviceWifi;
      };
    },
    changeAmountTickets: (state, actions) => {
      if (actions.payload.classType === 'first') {
        state.firstClass.amountTickets = state.firstClass.amountTickets + actions.payload.amount;
      };
      if (actions.payload.classType === 'second') {
        state.secondClass.amountTickets = state.firstClass.amountTickets + actions.payload.amount;
      };
      if (actions.payload.classType === 'third') {
        state.thirdClass.amountTickets = state.firstClass.amountTickets + actions.payload.amount;
      };
      if (actions.payload.classType === 'fourth') {
        state.fourthClass.amountTickets = state.firstClass.amountTickets + actions.payload.amount;
      };
    },
    clearAllPrices: (state, actions) => {
      state.firstClass.seatsAge = 0;
      state.firstClass.seatsChild = 0;
      state.firstClass.amountTickets = 0;
      state.firstClass.seatsPrice = 0;
      state.firstClass.serviceWifi = 0;
      state.firstClass.serviceLinens = 0;
      state.firstClass.totalPrice = 0;
      
      state.secondClass.seatsAge = 0;
      state.secondClass.seatsChild = 0;
      state.secondClass.amountTickets = 0;
      state.secondClass.seatsPrice = 0;
      state.secondClass.serviceWifi = 0;
      state.secondClass.serviceLinens = 0;
      state.secondClass.totalPrice = 0;

      state.thirdClass.seatsAge = 0;
      state.thirdClass.seatsChild = 0;
      state.thirdClass.amountTickets = 0;
      state.thirdClass.seatsPrice = 0;
      state.thirdClass.serviceWifi = 0;
      state.thirdClass.serviceLinens = 0;
      state.thirdClass.totalPrice = 0;

      state.fourthClass.seatsAge = 0;
      state.fourthClass.seatsChild = 0;
      state.fourthClass.amountTickets = 0;
      state.fourthClass.seatsPrice = 0;
      state.fourthClass.serviceWifi = 0;
      state.fourthClass.serviceLinens = 0;
      state.fourthClass.totalPrice = 0;
    },
    changeNotice: (state, actions) => {
      state.notice = actions.payload;
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
  changeNotice
} = slicePrice.actions;

export default slicePrice.reducer;