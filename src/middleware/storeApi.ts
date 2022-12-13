import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'


const baseQueryWithRetry = retry(fetchBaseQuery({baseUrl: process.env.REACT_APP_API_URL}), { maxRetries: 3 });

export const storeApi = createApi({
  reducerPath: 'storeApi',
  baseQuery: baseQueryWithRetry,
  endpoints: (build) => ({
    getCity: build.query({
      query: (o) => `routes/cities?name=${o}`
    }),
    // getFilmDesc: build.query({
    //   query: (e) => `films/${e}`
    // })
  })
})

// const getCitiesEpic = (action$) => action$.pipe(
//   ofType(searchCity),
//   map(o => o.payload.trim()),
//   debounceTime(100),
//   map(o => requestGetCity(o)),
//   switchMap((o) => {
//     return ajax.getJSON(`${process.env.REACT_APP_API_URL}routes/cities?name=${o.payload}`).pipe(
//     tap((o) => console.log(o)),
//     retry(3),
//     map((o) => {
//       if (o.error) {
//         errorGetCity(o.error)
//       } else {
//         successGetCity(o)
//       }
//     }),
//     catchError((e) => of(errorGetCity(e)))
//   )})
// );

export const {
  useGetCityQuery
} = storeApi
