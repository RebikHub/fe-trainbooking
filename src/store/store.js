import { configureStore } from "@reduxjs/toolkit";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { getCitiesEpic, getLastRoutes, getRoutes } from "../epic";
import sliceChoice from "./sliceChoice";
import sliceGetCity from "./sliceGetCity";
import sliceHeaderTransform from "./sliceHeaderTransform";
import sliceGetRoute from "./sliceGetRoute";
import sliceProgressLine from "./sliceProgressLine";
import sliceFilter from "./sliceFilter";
import sliceGetLastRoutes from "./sliceGetLastRoutes";

const epic = combineEpics(
  getCitiesEpic,
  getRoutes,
  getLastRoutes
);

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
  reducer: {
    sliceChoice,
    sliceGetCity,
    sliceHeaderTransform,
    sliceGetRoute,
    sliceProgressLine,
    sliceFilter,
    sliceGetLastRoutes
  },
  middleware: [epicMiddleware]
});

epicMiddleware.run(epic);