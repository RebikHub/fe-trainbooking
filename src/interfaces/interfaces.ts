export interface ILast {
  have_first_class: boolean;
  have_second_class: boolean;
  have_third_class: boolean;
  have_fourth_class: boolean;
  have_wifi: boolean;
  have_air_conditioning: boolean;
  is_express: boolean;
  min_price: number;
  available_seats: number;
  available_seats_info: IAvailableSeatsInfo;
  departure: IDeparture;
}

export interface IAvailableSeatsInfo {
  second?: number;
  third?: number;
  fourth?: number;
}

export interface IDeparture {
  _id: string;
  have_first_class: boolean;
  have_second_class: boolean;
  have_third_class: boolean;
  have_fourth_class: boolean;
  have_wifi: boolean;
  have_air_conditioning: boolean;
  is_express: boolean;
  min_price: number;
  duration: number;
  available_seats: number;
  available_seats_info: IAvailableSeatsInfo;
  train: ITrain;
  from: IFrom;
  to: IFrom;
  price_info: IPriceInfo;
}

export interface IFrom {
  railway_station_name: string;
  city: ITrain;
  datetime: number;
}

export interface ITrain {
  _id: string;
  name: string;
}

export interface IPriceInfo {
  second?: IPriceClass;
  third?: IPriceClass;
  fourth?: IPriceClass;
}

export interface IPriceClass {
  top_price: number;
  bottom_price: number;
  side_price?: number;
}

export interface ICity {
  _id: string;
  name: string;
}

export interface IOrder {
  user: IUser;
  departure: IOrderDeparture;
}

export interface IOrderDeparture {
  route_direction_id: string;
  seats: ISeat[];
}

export interface ISeat {
  coach_id: string;
  person_info: IPersonInfo;
  seat_number: number;
  is_child: boolean;
  include_children_seat: boolean;
}

export interface IPersonInfo {
  is_adult: boolean;
  first_name: string;
  last_name: string;
  patronymic: string;
  gender: boolean;
  birthday: Date;
  document_type: string;
  document_data: string;
}

export interface IUser {
  first_name: string;
  last_name: string;
  patronymic: string;
  phone: string;
  email: string;
  payment_method: string;
}

export interface IRoute {
  total_count: number;
  items: IItem[];
}

export interface IItem {
  have_first_class: boolean;
  have_second_class: boolean;
  have_third_class: boolean;
  have_fourth_class: boolean;
  have_wifi: boolean;
  have_air_conditioning: boolean;
  is_express: boolean;
  min_price: number;
  available_seats: number;
  available_seats_info: IAvailableSeatsInfo;
  departure: IDeparture;
}

export interface ISeats {
  coach: ICoach;
  seats: ISeat[];
}

export interface ICoach {
  _id: string;
  name: string;
  class_type: string;
  have_first_class: boolean;
  have_second_class: boolean;
  have_third_class: boolean;
  have_fourth_class: boolean;
  have_wifi: boolean;
  have_air_conditioning: boolean;
  price: number;
  top_price: number;
  bottom_price: number;
  side_price: number;
  linens_price: number;
  wifi_price: number;
  is_linens_included: boolean;
  available_seats: number;
  train: string;
  seats: string;
}

export interface ISeat {
  index: number;
  available: boolean;
}