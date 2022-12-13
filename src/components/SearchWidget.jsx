/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGetCityQuery } from '../middleware/storeApi';
import { choiceCityFrom, choiceCityTo, choiceDateFrom, choiceDateTo, clearChoiceCity, searchCity } from '../store/sliceChoice';
import { clearAllFiltering } from '../store/sliceFilter';
import { clearCities } from '../store/sliceGetCity';
import { requestGetLastRoutes } from '../store/sliceGetLastRoutes';
import { clearRouteList, getRouteRequest } from '../store/sliceGetRoute';
import { clearStepAll, currentStepOne } from '../store/sliceProgressLine';
import '../styles/search-widget.css';
import Calendar from './Calendar';
import CityList from './CityList';
import Error from './Error';

export default function SearchWidget({classStyle}) {
  const [hidden, setHidden] = useState({
    city: 'none',
    from: 'none',
    to: 'none'
  });
  const [city, setCity] = useState({
    from: '',
    to: ''
  });
  const [error, setError] = useState(false);
  const { fromDate, toDate, fromCity, toCity } = useSelector((state) => state.sliceChoice);
  const { transform } = useSelector((state) => state.sliceHeaderTransform);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let location = useLocation();
  // const { data, err, isLoading } = useGetCityQuery('мос')

  // console.log(useGetCityQuery('мос'));

  useEffect(() => {
    if (location.pathname === '/') {
      setCity({
        from: '',
        to: ''
      });
      dispatch(clearStepAll());
    };
  }, [location.pathname]);

  function inputDateFrom(ev) {
    dispatch(choiceDateFrom(ev.target.value));
  };

  function inputDateTo(ev) {
    dispatch(choiceDateTo(ev.target.value));
  };

  function getCalendarFrom() {
    if (hidden.from === 'none' && fromDate === '') {
      setHidden({...hidden, from: 'calendar-from', to: 'none'});
    } else {
      setHidden({...hidden, from: 'none'});
    };
  };

  function getCalendarTo() {
    if (hidden.to === 'none' && toDate === '') {
      setHidden({...hidden, to: 'calendar-to', from: 'none'});
    } else {
      setHidden({...hidden, to: 'none'});
    };
  };

  function inputFromCity(ev) {
    setCity({...city, from: ev.target.value});
    if (hidden.city === 'none') {
      setHidden({...hidden, city: 'city-from'});
    };
  };

  function inputToCity(ev) {
    setCity({...city, to: ev.target.value});
    if (hidden.city === 'none') {
      setHidden({...hidden, city: 'city-to'});
    };
  };

  function showListCitiesFrom() {
    dispatch(clearCities());
    if (hidden.city === 'none' || hidden.city === 'city-to') {
      setHidden({...hidden, city: 'city-from'});
    } else {
      setHidden({...hidden, city: 'none'});
    };
  };

  function showListCitiesTo() {
    dispatch(clearCities());
    if (hidden.city === 'none' || hidden.city === 'city-from') {
      setHidden({...hidden, city: 'city-to'});
    } else {
      setHidden({...hidden, city: 'none'});
    };
  };

  function getDate(choiceDate) {
    if (hidden.from === 'calendar-from') {
      dispatch(choiceDateFrom(choiceDate));
      setHidden({...hidden, from: 'none'});
    };

    if (hidden.to === 'calendar-to') {
      dispatch(choiceDateTo(choiceDate));
      setHidden({...hidden, to: 'none'});
    };
  };

  function getCity(choiceCity) {

    if (hidden.city === 'city-from') {
      dispatch(choiceCityFrom(choiceCity));
      setCity({...city, from: choiceCity.name});
      setHidden({...hidden, city: 'none'});
    };

    if (hidden.city === 'city-to') {
      dispatch(choiceCityTo(choiceCity));
      setCity({...city, to: choiceCity.name});
      setHidden({...hidden, city: 'none'});
    };
    dispatch(clearCities());
  };

  function swapCity() {
    dispatch(choiceCityFrom(toCity));
    dispatch(choiceCityTo(fromCity));
    setCity({
      from: city.to,
      to: city.from
    });
  };

  function submit() {
    dispatch(clearRouteList());
    dispatch(clearAllFiltering());
    if (!transform && location.pathname === '/' && fromCity !== null && toCity !== null) {
      navigate('/route');
      dispatch(getRouteRequest({fromDate, toDate, fromCity, toCity}));
      dispatch(currentStepOne());
      dispatch(requestGetLastRoutes());
    } else if (transform && location.pathname === '/route' && fromCity !== null && toCity !== null) {
      dispatch(getRouteRequest({fromDate, toDate, fromCity, toCity}));
      dispatch(requestGetLastRoutes());
    }  else {
      setError(true)
    };
  };

  useEffect(() => {
    let timer = null;
    if (error) {
      timer = setTimeout(() => setError(false), 2 * 1000);
    };
    if (city.from === '' && city.to === '') {
      dispatch(clearChoiceCity());
    };

    if (timer) {
      return () => clearTimeout(timer)
    }
  }, [error, city]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (city.from.trim() !== '') {
        dispatch(searchCity(city.from));
      };
    }, 1000);
    return () => clearTimeout(timer);
}, [city.from]);

useEffect(() => {
    const timer = setTimeout(() => {
      if (city.to.trim() !== '') {
        dispatch(searchCity(city.to));
      };
    }, 1000);
    return () => clearTimeout(timer);
}, [city.to]);

  return (
    <div className={classStyle}>
    
      <Error classStyle={error ? transform ?'error-transform' : 'error' : 'none'}/>

      <div className='search-inputs'>
        <div className='search-direction'>
          <h4 className='search-dir-text'>Направление</h4>
          <div className='search-dir-inputs'>
            <input className='dir-input-from' type="text" placeholder="Откуда"
              value={city.from}
              onChange={inputFromCity}
              onClick={showListCitiesFrom}/>
            <button className='dir-btn' type="button" onClick={swapCity}></button>
            <input className='dir-input-to' type="text" placeholder="Куда"
              value={city.to}
              onChange={inputToCity}
              onClick={showListCitiesTo}/>
              <CityList none={`${hidden.city}${transform ? '-transform' : ''}`}
                showListFrom={showListCitiesFrom}
                showListTo={showListCitiesTo}
                getCity={getCity}/>
          </div>
        </div>

        <div className='search-date'>
          <h4 className='search-date-text'>Дата</h4>
            <div className='search-date-inputs'>
              <input className='date-input-from' type="text" placeholder="ДД.ММ.ГГ"
                value={fromDate}
                onClick={getCalendarFrom}
                onChange={inputDateFrom}/>
              <Calendar none={hidden.from}
                getDate={getDate}
                getCalendarFrom={getCalendarFrom}
                getCalendarTo={getCalendarTo}/>
              <input className='date-input-to' type="text" placeholder="ДД.ММ.ГГ"
                value={toDate}
                onClick={getCalendarTo}
                onChange={inputDateTo}/>
              <Calendar none={hidden.to}
              getDate={getDate}
              getCalendarFrom={getCalendarFrom}
              getCalendarTo={getCalendarTo}/>
            </div>
        </div>
      </div>

      <button className='search-btn' onClick={submit} type='button'>найти билеты</button>

    </div>
  );
};
