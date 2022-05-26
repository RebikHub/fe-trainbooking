import { ofType } from "redux-observable";
import { catchError, debounceTime, map, of, retry, switchMap, tap } from "rxjs";
import { ajax } from "rxjs/ajax";
import { searchCity } from "../store/sliceChoice";
import { errorGetCity, requestGetCity, successGetCity } from "../store/sliceGetCity";
import { getRouteError, getRouteRequest, getRouteSuccess } from "../store/sliceGetRoute";

export const getCitiesEpic = (action$) => action$.pipe(
  ofType(searchCity),
  map(o => o.payload.trim()),
  debounceTime(100),
  map(o => requestGetCity(o)),
  switchMap((o) => {
    return ajax.getJSON(`${process.env.REACT_APP_API_ROUTES_CITIES}?name=${o.payload}`).pipe(
    retry(3),
    map((o) => successGetCity(o)),
    catchError((e) => of(errorGetCity(e)))
  )})
);

export const getRoute = (action$) => action$.pipe(
  ofType(getRouteRequest),
  switchMap((o) => {
    return ajax.getJSON(process.env.REACT_APP_API_ROUTES).pipe(
    retry(3),
    tap((obj) => console.log(obj)),
    map((o) => getRouteSuccess(o)),
    catchError((e) => of(getRouteError(e)))
  )})
);
