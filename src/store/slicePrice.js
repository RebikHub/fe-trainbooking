import { createSlice } from "@reduxjs/toolkit";

export const slicePrice = createSlice({
  name: 'slicePrice',
  initialState: {
    amountTickets: 0,
    priceServices: 0,
    priceSeats: 0,
    totalPrice: 0,
    choiceTickets: false
  },
  reducers: {
    changeAmountTickets: (state, actions) => {
      state.amountTickets = actions.payload;
    },
    changePriceServices: (state, actions) => {
      state.priceServices += actions.payload;
      state.totalPrice = state.priceServices + state.priceSeats;
      if (state.amountTickets === 0) {
        state.choiceTickets = false;
      };
    },
    changePriceSeats: (state, actions) => {
      state.priceSeats += actions.payload;
      state.totalPrice = state.priceServices + state.priceSeats;
      if (state.amountTickets === 0) {
        state.choiceTickets = false;
      };
    },
    changeChoiceTicketsAsk: (state, actions) => {
      state.choiceTickets = true;
    },
    changeChoiceTicketsAnswer: (state, actions) => {
      state.choiceTickets = false;
    },
    clearAllPrices: (state, actions) => {
      state.amountTickets = 0;
      state.priceServices = 0;
      state.priceSeats = 0;
      state.totalPrice = 0;
      state.choiceTickets = false;
    }
  }
});

export const {
  changeAmountTickets,
  changePriceServices,
  changePriceSeats,
  changeChoiceTicketsAsk,
  changeChoiceTicketsAnswer,
  clearAllPrices
} = slicePrice.actions;

export default slicePrice.reducer;