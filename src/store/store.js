import { configureStore } from "@reduxjs/toolkit";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { getCitiesEpic, getLastRoutesEpic, getRoutesEpic, getSeatsEpic } from "../epic";
import sliceChoice from "./sliceChoice";
import sliceGetCity from "./sliceGetCity";
import sliceHeaderTransform from "./sliceHeaderTransform";
import sliceGetRoute from "./sliceGetRoute";
import sliceProgressLine from "./sliceProgressLine";
import sliceFilter from "./sliceFilter";
import sliceGetLastRoutes from "./sliceGetLastRoutes";
import sliceGetSeats from "./sliceGetSeats";
import slicePrice from "./slicePrice";
import slicePassengers from "./slicePassengers";
import sliceOrder from "./sliceOrder";

const epic = combineEpics(
  getCitiesEpic,
  getRoutesEpic,
  getLastRoutesEpic,
  getSeatsEpic
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
    sliceGetLastRoutes,
    sliceGetSeats,
    slicePrice,
    slicePassengers,
    sliceOrder
  },
  middleware: [epicMiddleware]
});

epicMiddleware.run(epic);