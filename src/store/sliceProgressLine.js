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
    currentStepOne: (state) => {
      state.stepOne = true;
    },
    currentStepTwo: (state) => {
      state.stepTwo = true;
    },
    currentStepThree: (state) => {
      state.stepThree = true;
    },
    currentStepFour: (state) => {
      state.stepFour = true;
    },
    clearStepAll: (state) => {
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