import React, { useState, ChangeEvent, useEffect, useRef } from 'react';
import { IIdName } from '../interfaces/interfaces';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { choiceCityFrom, choiceCityTo, sliceChoiceState } from '../store/sliceChoice';
import { clearCities, getCityThunk, sliceGetCityState } from '../store/sliceGetCity';
import '../styles/search-widget.css';
import '../styles/city.css';
import { SearchInputs } from '../interfaces/types';

export default function SearchCity() {
  const [city, setCity] = useState<SearchInputs>({
    from: '',
    to: ''
  });
  const [hidden, setHidden] = useState<string>('none');
  const { fromCity, toCity } = useAppSelector(sliceChoiceState);
  const { transform } = useAppSelector((state) => state.sliceHeaderTransform);
  const { items, loading, error } = useAppSelector(sliceGetCityState);
  const dispatch = useAppDispatch();
  const timeRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    clearTimeout(timeRef.current)
    if (city.to.trim() !== '') {
      timeRef.current = setTimeout(() => {
        dispatch(getCityThunk(city.to)).unwrap();
      }, 1000)
    }
    return () => clearTimeout(timeRef.current)
  }, [city.to, dispatch])

  useEffect(() => {
    clearTimeout(timeRef.current)
    if (city.from.trim() !== '') {
      timeRef.current = setTimeout(() => {
        dispatch(getCityThunk(city.from)).unwrap();
      }, 1000)
    }
    return () => clearTimeout(timeRef.current)
  }, [city.from, dispatch])

  function inputFromCity(ev: ChangeEvent<HTMLInputElement>) {
    setCity((prev) => ({ ...prev, from: ev.target.value }));
    if (hidden === 'none') {
      setHidden('city-from');
    };
  };

  function inputToCity(ev: ChangeEvent<HTMLInputElement>) {
    setCity((prev) => ({ ...prev, to: ev.target.value }));
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
      setCity({ ...city, from: choiceCity.name });
    };

    if (hidden === 'city-to') {
      dispatch(choiceCityTo(choiceCity));
      setCity({ ...city, to: choiceCity.name });
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

  useEffect(() => {
    console.log(items, loading, error);

  })

  return (
    <div className='search-direction'>
      <h4 className='search-dir-text'>Направление</h4>
      <div className='search-dir-inputs'>
        <input className='dir-input-from' type="text" placeholder="Откуда"
          value={city.from}
          onChange={inputFromCity}
          onClick={showListCitiesFrom} />
        <button className='dir-btn' type="button" onClick={swapCity} />
        <input className='dir-input-to' type="text" placeholder="Куда"
          value={city.to}
          onChange={inputToCity}
          onClick={showListCitiesTo} />
        <div className={`${hidden}${transform ? '-transform' : ''}`}>
          <div className='city-list'>
            {items.length === 0 ?
              <div className='dots-list'>
                <div className='dots-list-absolute'>
                  <div className='loader'></div>
                </div>
              </div> :
              items.map((el) => <p onClick={() => getCity(el)} key={el._id}>{el.name}</p>)}
          </div>
        </div>
        {/* <CityList none={`${hidden}${transform ? '-transform' : ''}`}
            getCity={getCity}/> */}
      </div>
    </div>
  )
}