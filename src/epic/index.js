import { ofType } from "redux-observable";
import { catchError, debounceTime, map, of, retry, switchMap, tap } from "rxjs";
import { ajax } from "rxjs/ajax";
import { searchCity } from "../store/sliceChoice";
import { errorGetCity, requestGetCity, successGetCity } from "../store/sliceGetCity";
import { errorGetLastRoutes, requestGetLastRoutes, successGetLastRoutes } from "../store/sliceGetLastRoutes";
import { getRouteError, getRouteRequest, getRouteSuccess } from "../store/sliceGetRoute";

export const getCitiesEpic = (action$) => action$.pipe(
  ofType(searchCity),
  map(o => o.payload.trim()),
  debounceTime(100),
  map(o => requestGetCity(o)),
  switchMap((o) => {
    return ajax.getJSON(`${process.env.REACT_APP_API_URL}routes/cities?name=${o.payload}`).pipe(
    retry(3),
    map((o) => successGetCity(o)),
    catchError((e) => of(errorGetCity(e)))
  )})
);

export const getRoutes = (action$) => action$.pipe(
  ofType(getRouteRequest),
  debounceTime(2000),
  tap((o) => console.log('request ', o)),
  switchMap((o) => {
    return ajax.getJSON(`${process.env.REACT_APP_API_URL}routes?from_city_id=${o.payload.fromCity._id}&to_city_id=${o.payload.toCity._id}`).pipe(
    retry(3),
    tap((obj) => console.log('response ', obj)),
    map((o) => getRouteSuccess(o)),
    catchError((e) => of(getRouteError(e)))
  )})
);

export const getLastRoutes = (action$) => action$.pipe(
  ofType(requestGetLastRoutes),
  tap((o) => console.log('request last ', o)),
  switchMap((o) => {
    return ajax.getJSON(`${process.env.REACT_APP_API_URL}routes/last`).pipe(
    retry(3),
    tap((obj) => console.log('response last ', obj)),
    map((o) => successGetLastRoutes(o)),
    catchError((e) => of(errorGetLastRoutes(e)))
  )})
);
