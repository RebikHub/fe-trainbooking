import { configureStore } from "@reduxjs/toolkit";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { getCitiesEpic, getLastRoutesEpic, getRoutesEpic, getSeatsEpic, postOrderEpic } from "../epic";
import sliceChoice from "./sliceChoice";
import sliceGetCity from "./sliceGetCity";
import sliceHeaderTransform from "./sliceHeaderTransform";
import sliceGetRoute from "./sliceGetRoute";
import sliceProgressLine from "./sliceProgressLine";
import sliceFilter from "./sliceFilter";
import sliceGetLastRoutes from "./sliceGetLastRoutes";
import sliceGetSeats from "./sliceGetSeats";
import slicePrice from "./slicePrice";
import sliceOrder from "./sliceOrder";
import slicePostOrder from "./slicePostOrder";

const epic = combineEpics(
  getCitiesEpic,
  getRoutesEpic,
  getLastRoutesEpic,
  getSeatsEpic,
  postOrderEpic
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
    sliceOrder,
    slicePostOrder
  },
  middleware: [epicMiddleware]
});

epicMiddleware.run(epic);