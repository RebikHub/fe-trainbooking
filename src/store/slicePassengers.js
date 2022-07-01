import { createSlice } from "@reduxjs/toolkit";


export const slicePassengers = createSlice({
  name: 'slicePassengers',
  initialState: {
    passengers: [
      // {
      //   passNumber:  num,
      //   passAges: select.age,
      //   passSurname: nameValue.surname,
      //   passName: nameValue.name,
      //   passPatronymic: nameValue.patronymic,
      //   passGender: gender,
      //   passBirth: dateValue,
      //   limited: limited,
      //   typeDoc: select.docs,
      //   docNumber: docsValue.passportNumber,
      //   docSeries: docsValue.passportSeries,
      //   birthNumber: docsValue.birthNumber
      // }
    ]
  },
  reducers: {
    addPassengerStore: (state, actions) => {
      state.passengers = [...state.passengers, actions.payload];
    },
    editPassengerStore: (state, actions) => {
      let index = null;
      state.passengers.foreach((el, i) => {
        if (el.passNumber === actions.payload.passNumber) {
          index = i;
        };
      });
      if (index !== null) {
        state.passengers[index] = actions.payload;
      }
    },
    removePassengerStore: (state, actions) => {
      console.log(actions.payload);
      state.passengers = state.passengers.filter((el) => el.passNumber !== actions.payload);
    },
  }
});

export const {
  addPassengerStore,
  editPassengerStore,
  removePassengerStore
} = slicePassengers.actions;

export default slicePassengers.reducer;