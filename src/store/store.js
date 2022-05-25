import { configureStore } from "@reduxjs/toolkit";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { getCitiesEpic } from "../epic";
import sliceChoice from "./sliceChoice";
import sliceGetCity from "./sliceGetCity";
import sliceHeaderTransform from "./sliceHeaderTransform";

const epic = combineEpics(
  getCitiesEpic
);

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
  reducer: {
    sliceChoice,
    sliceGetCity,
    sliceHeaderTransform
  },
  middleware: [epicMiddleware]
});

epicMiddleware.run(epic);