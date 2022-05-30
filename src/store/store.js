import { configureStore } from "@reduxjs/toolkit";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { getCitiesEpic, getRoute } from "../epic";
import sliceChoice from "./sliceChoice";
import sliceGetCity from "./sliceGetCity";
import sliceHeaderTransform from "./sliceHeaderTransform";
import sliceGetRoute from "./sliceGetRoute";
import sliceProgressLine from "./sliceProgressLine";
import sliceFilter from "./sliceFilter";

const epic = combineEpics(
  getCitiesEpic,
  getRoute
);

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
  reducer: {
    sliceChoice,
    sliceGetCity,
    sliceHeaderTransform,
    sliceGetRoute,
    sliceProgressLine,
    sliceFilter
  },
  middleware: [epicMiddleware]
});

epicMiddleware.run(epic);