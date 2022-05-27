import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { choiceCityFrom, choiceCityTo, choiceDateFrom, choiceDateTo, clearChoiceCity, searchCity } from '../store/sliceChoice';
import { clearCities } from '../store/sliceGetCity';
import { getRouteRequest } from '../store/sliceGetRoute';
import { currentStepOne } from '../store/sliceProgressLine';
import '../styles/search-widget.css';
import Calendar from './Calendar';
import CityList from './CityList';
import Error from './Error';

export default function SearchWidget({classStyle}) {
  const [hidden, setHidden] = useState({
    date: 'none',
    city: 'none'
  });
  const [city, setCity] = useState({
    from: '',
    to: ''
  });
  const [error, setError] = useState(false);
  const { fromDate, toDate, fromCity, toCity } = useSelector((state) => state.sliceChoice);
  const { transform } = useSelector((state) => state.sliceHeaderTransform);
  const { cities } = useSelector((state) => state.sliceGetCity);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let location = useLocation();

  function inputDateFrom(ev) {
    dispatch(choiceDateFrom(ev.target.value));
  };

  function inputDateTo(ev) {
    dispatch(choiceDateTo(ev.target.value));
  };

  function inputFromCity(ev) {
    setCity({...city, from: ev.target.value});
    if (ev.target.value.trim() !== '') {
      dispatch(searchCity(ev.target.value));
      if (cities.length !== 0) {
        setHidden({...hidden, city: 'city-from'});
      };
    } else {
      setHidden({...hidden, city: 'none'});
    };
  };

  function inputToCity(ev) {
    setCity({...city, to: ev.target.value});
    if (ev.target.value.trim() !== '') {
      dispatch(searchCity(ev.target.value));
      if (cities.length !== 0) {
        setHidden({...hidden, city: 'city-to'});
      };
    } else {
      setHidden({...hidden, city: 'none'});
    };
  };

  function getCalendar() {
    if (hidden.date === 'none' && fromDate === '' && toDate === '') {
      setHidden({...hidden, date: 'calendar-from'});
    } else if (hidden.date === 'none' && fromDate !== '' && toDate === '') {
      setHidden({...hidden, date: 'calendar-to'});
    } else {
      setHidden({...hidden, date: 'none'});
    }
  };

  function getDate(choiceDate) {
    if (hidden.date === 'calendar-from') {
      dispatch(choiceDateFrom(choiceDate));
      setHidden({...hidden, date: 'none'});
    };

    if (hidden.date === 'calendar-to') {
      dispatch(choiceDateTo(choiceDate));
      setHidden({...hidden, date: 'none'});
    };
  };

  function getCity(choiceCity) {
    if (hidden.city === 'city-from') {
      dispatch(choiceCityFrom(choiceCity));
      setHidden({...hidden, city: 'none'});
      setCity({...city, from: choiceCity.name});
    };

    if (hidden.city === 'city-to') {
      dispatch(choiceCityTo(choiceCity));
      setHidden({...hidden, city: 'none'});
      setCity({...city, to: choiceCity.name});
    };

  };

  function submit() {
    if (!transform && location.pathname === '/' && fromCity !== null && toCity !== null) {
      navigate('/route');
      dispatch(getRouteRequest({fromDate, toDate, fromCity, toCity}));
      dispatch(currentStepOne());
    } else if (transform && location.pathname === '/route' && fromCity !== null && toCity !== null) {
      dispatch(getRouteRequest({fromDate, toDate, fromCity, toCity}));
    }  else {
      setError(true)
    };
        console.log('submit');
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => setError(false), 2 * 1000);
    };
    if (city.from === '' && city.to === '') {
      dispatch(clearChoiceCity());
    };
  });

  return (
    <div className={classStyle}>
    
      <Error classStyle={error ? 'error' : 'none'}/>

      <div className='search-inputs'>
        <div className='search-direction'>
          <h4 className='search-dir-text'>Направление</h4>
          <div className='search-dir-inputs'>
            <input className='dir-input-from' type="text" placeholder="Откуда"
              value={city.from}
              onChange={inputFromCity}/>
            <button className='dir-btn' type="button"></button>
            <input className='dir-input-to' type="text" placeholder="Куда"
              value={city.to}
              onChange={inputToCity}/>
              <CityList none={`${hidden.city}${transform ? '-transform' : ''}`} getCity={getCity}/>
          </div>
        </div>

        <div className='search-date'>
          <h4 className='search-date-text'>Дата</h4>
            <div className='search-date-inputs'>
              <input className='date-input-from' type="text" placeholder="ДД.ММ.ГГ"
                value={fromDate}
                onClick={getCalendar}
                onChange={inputDateFrom}/>
              <input className='date-input-to' type="text" placeholder="ДД.ММ.ГГ"
                value={toDate}
                onClick={getCalendar}
                onChange={inputDateTo}/>
              <Calendar none={hidden.date} getDate={getDate}/>
            </div>
        </div>
      </div>

      <button className='search-btn' onClick={submit} type='button'>найти билеты</button>

    </div>
  )
}
