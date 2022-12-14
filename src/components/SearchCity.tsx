import React, { useEffect, useState, ChangeEvent } from 'react';
import { IIdName } from '../interfaces/interfaces';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { choiceCityFrom, choiceCityTo } from '../store/sliceChoice';
import { clearCities } from '../store/sliceGetCity';
import CityList from './CityList';
import '../styles/search-widget.css';
import { useGetCityQuery } from '../middleware/storeApi';
import { SearchInputs } from '../interfaces/types';

export default function SearchCity() {
  const [city, setCity] = useState<SearchInputs>({
    from: '',
    to: ''
  });
  const [hidden, setHidden] = useState<string>('none');
  const { fromCity, toCity } = useAppSelector((state) => state.sliceChoice);
  const { transform } = useAppSelector((state) => state.sliceHeaderTransform);
  const dispatch = useAppDispatch();

  function inputFromCity(ev: ChangeEvent<HTMLInputElement>) {
    setCity({...city, from: ev.target.value});
    if (hidden === 'none') {
      setHidden('city-from');
    };
  };

  function inputToCity(ev: ChangeEvent<HTMLInputElement>) {
    setCity({...city, to: ev.target.value});
    if (hidden === 'none') {
      setHidden('city-to');
    };
  };

  function showListCitiesFrom() {
    dispatch(clearCities());
    if (hidden !== 'city-from') {
      setHidden('city-from');
    } else {
      setHidden('none');
    };
  };

  function showListCitiesTo() {
    dispatch(clearCities());
    if (hidden !== 'city-to') {
      setHidden('city-to');
    } else {
      setHidden('none');
    };
  };

  function getCity(choiceCity: IIdName) {

    if (hidden === 'city-from') {
      dispatch(choiceCityFrom(choiceCity));
      setCity({...city, from: choiceCity.name});
    };

    if (hidden === 'city-to') {
      dispatch(choiceCityTo(choiceCity));
      setCity({...city, to: choiceCity.name});
    };
    setHidden('none');
    dispatch(clearCities());
  };

  function swapCity() {
    if (toCity && fromCity) {
      dispatch(choiceCityFrom(toCity));
      dispatch(choiceCityTo(fromCity));
    }
    setCity({
      from: city.to,
      to: city.from
    });
  };

  return (
    <div className='search-direction'>
      <h4 className='search-dir-text'>Направление</h4>
      <div className='search-dir-inputs'>
        <input className='dir-input-from' type="text" placeholder="Откуда"
          value={city.from}
          onChange={inputFromCity}
          onClick={showListCitiesFrom}/>
        <button className='dir-btn' type="button" onClick={swapCity}/>
        <input className='dir-input-to' type="text" placeholder="Куда"
          value={city.to}
          onChange={inputToCity}
          onClick={showListCitiesTo}/>
          <CityList none={`${hidden}${transform ? '-transform' : ''}`}
            showListFrom={showListCitiesFrom}
            showListTo={showListCitiesTo}
            cities={city}
            getCity={getCity}/>
      </div>
    </div>
  )
}