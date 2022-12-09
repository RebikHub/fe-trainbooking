import { ILast } from './interfaces';

export type Filter = {
  start: number,
  end: number,
  date: string,
  filteringPricesRange: (min: number, max: number, array: ILast[]) => ILast[],
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