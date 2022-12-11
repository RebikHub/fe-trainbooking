import { IItem } from './interfaces';

export type Filter = {
  start: number,
  end: number,
  date: string,
  filteringPricesRange: (min: number, max: number, array: IItem[]) => IItem[],
  timeForSort: (arg: number) => number,
  dateForComparison: (arg: string) => number
}

export type StartEnd = {
  start: number,
  end: number
};

export type FilterSeats = {
  coupe: boolean,
  reserved: boolean,
  seated: boolean,
  lux: boolean,
  wifi: boolean,
  express: boolean
};

export type MinMaxPrices = {
  minPrice: number,
  maxPrice: number,
  allPrices: number[]
};

export type NumberIdCoach = {
  number: number,
  idCoach: string
};