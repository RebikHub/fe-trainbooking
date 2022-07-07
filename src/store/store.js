import { configureStore } from "@reduxjs/toolkit";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { getCitiesEpic, getLastRoutesEpic, getRoutesEpic, getSeatsEpic, postOrderEpic, postSubscribe } from "../epic";
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
import slicePostSubscribe from "./slicePostSubscribe";
import sliceNotice from "./sliceNotice";

const epic = combineEpics(
  getCitiesEpic,
  getRoutesEpic,
  getLastRoutesEpic,
  getSeatsEpic,
  postOrderEpic,
  postSubscribe
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
    slicePostOrder,
    slicePostSubscribe,
    sliceNotice
  },
  middleware: [epicMiddleware]
});

epicMiddleware.run(epic);