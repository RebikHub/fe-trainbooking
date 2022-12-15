import axios from "axios";
import { ISearchRoute } from "../interfaces/interfaces";
import { Order } from "../interfaces/types";

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-type": "application/json"
  }
});

function getCities(city: string) {
  return http.get(`routes/cities?name=${city}`, {
    timeout: 10000
   });
};

function getRoutes(route: ISearchRoute) {
  return http.get(`routes?from_city_id=${route.fromCity._id}&to_city_id=${route.toCity._id}`);
};

function getLastRoutes() {
  return http.get('routes/last');
};

function getSeats(id: string) {
  return http.get(`routes/${id}/seats`);
};

function postOrder(data: Order) {
  return http.post('order', data);
};

function postSubscribe(data: string) {
  return http.post('subscribe');
};

const httpServices = {
  getCities,
  getRoutes,
  getLastRoutes,
  getSeats,
  postOrder,
  postSubscribe
};

export default httpServices;

// const getCities = `${process.env.REACT_APP_API_URL}routes/cities?name=${o.payload}`

// const getRoutes = `${process.env.REACT_APP_API_URL}routes?from_city_id=${o.payload.fromCity._id}&to_city_id=${o.payload.toCity._id}`

// const getLastRoutes = `${process.env.REACT_APP_API_URL}routes/last`

// const getSeats = `${process.env.REACT_APP_API_URL}routes/${o.payload}/seats`

// const postOrder = `${process.env.REACT_APP_API_URL}order`

// const postSubscribe = `${process.env.REACT_APP_API_URL}subscribe`