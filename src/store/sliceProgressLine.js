import { createSlice } from "@reduxjs/toolkit";

export const sliceProgressLine = createSlice({
  name: 'sliceProgressLine',
  initialState: {
    stepOne: false,
    stepTwo: false,
    stepThree: false,
    stepFour: false
  },
  reducers: {
    currentStepOne: (state, actions) => {
      state.stepOne = true;
    },
    currentStepTwo: (state, actions) => {
      state.stepTwo = true;
    },
    currentStepThree: (state, actions) => {
      state.stepThree = true;
    },
    currentStepFour: (state, actions) => {
      state.stepFour = true;
    },
    clearStepAll: (state, actions) => {
      state.stepTwo = false;
      state.stepThree = false;
      state.stepFour = false;
    }
  }
});

export const {
  currentStepOne,
  currentStepTwo,
  currentStepThree,
  currentStepFour,
  clearStepAll
} = sliceProgressLine.actions;

export default sliceProgressLine.reducer;