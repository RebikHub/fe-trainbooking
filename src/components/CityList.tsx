import React, { useRef, useEffect, useState } from 'react';
import { IIdName } from '../interfaces/interfaces';
import { SearchInputs } from '../interfaces/types';
import { useGetCityQuery } from '../middleware/storeApi';
import { useAppSelector } from '../store/hooks';
import '../styles/city.css';

type Props = {
  none: string,
  showListFrom: () => void,
  showListTo: () => void,
  cities: SearchInputs,
  getCity: (choiceCity: IIdName) => void
};

export default function CityList({none, showListFrom, showListTo, cities, getCity}: Props) {
  // const citiesList = useAppSelector((state) => state.sliceGetCity.items);
  const [citiesList, setCitiesList] = useState<IIdName[]>([]);
  const [city, setCity] = useState<string>('');
  const ref = useRef(null);
  const {data, isError, isSuccess, isLoading} = useGetCityQuery(city);

  useEffect(() => {
    if (cities.from) {
      setCity(cities.from)
    }

    if (cities.to) {
      setCity(cities.to)
    }
  }, [cities])

  useEffect(() => {
    console.log('data: ', data);
    console.log('isError: ', isError);
    console.log('isSuccess: ', isSuccess);
    console.log('isLoading', isLoading);
    
    if (null) {
      setCitiesList(data)
    }
  }, [data])

  // useEffect(() => {
  //   function outsideClick(ev: SyntheticEvent<HTMLDivElement>) {
  //     if (ref.current && !ref.current.contains(ev.target)) {
  //       if (none.includes('city-from')) {
  //         showListFrom();
  //       };
  //       if (none.includes('city-to')) {
  //         showListTo();
  //       };
  //     };
  //   };
  //   document.addEventListener("mousedown", outsideClick);
  //   return () => document.removeEventListener("mousedown", outsideClick);
  // }, [ref, none]);

  return (
    <div className={none} ref={ref}>
      <div className='city-list'>
        {citiesList.length === 0 ?
        <div className='dots-list'>
          <div className='dots-list-absolute'>
            <div className='loader'></div>
          </div>
        </div> :
        citiesList.map((el) => <p onClick={() => getCity(el)} key={el._id}>{el.name}</p>)}
      </div>
    </div>
  );
};
