import React, { useRef, useEffect, useState } from 'react';
import { IIdName } from '../interfaces/interfaces';
import { SearchInputs } from '../interfaces/types';
import { useAppSelector } from '../store/hooks';
import '../styles/city.css';

type Props = {
  none: string,
  showListFrom: () => void,
  showListTo: () => void,
  cities: SearchInputs,
  getCity: (choiceCity: IIdName) => void
};

export default function CityList({none, cities, getCity}: Props) {
  const citiesList = useAppSelector((state) => state.sliceGetCity.items);
  const [city, setCity] = useState<string>('');
  const ref = useRef(null);
  
  console.log(city);
  

  useEffect(() => {
    if (cities.from) {
      setCity(cities.from)
    }

    if (cities.to) {
      setCity(cities.to)
    }
  }, [cities])

  // useEffect(() => {
    
  //   if (null) {
  //     setCitiesList(data)
  //   }
  // }, [data])

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
