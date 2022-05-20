import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { choiceCityFrom, choiceCityTo, choiceDateFrom, choiceDateTo, searchCity } from '../store/sliceChoice';
import { clearCities } from '../store/sliceGetCity';
import '../styles/searchwidget.css';
import Calendar from './Calendar';
import CityList from './CityList';

export default function SearchWidget() {
  const [hidden, setHidden] = useState({
    date: 'none',
    city: 'none'
  });
  const [city, setCity] = useState('');
  const { fromDate, toDate, fromCity, toCity } = useSelector((state) => state.sliceChoice);
  const dispatch = useDispatch();

  function inputDateFrom(ev) {
    dispatch(choiceDateFrom(ev.target.value));
  };

  function inputDateTo(ev) {
    dispatch(choiceDateTo(ev.target.value));
  };

  function inputCity(ev) {
    setCity(ev.target.value);
    dispatch(searchCity(ev.target.value));
    getCityList();
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

  function getCityList() {
    if (hidden.city === 'none' && fromCity === '' && toCity === '') {
      setHidden({...hidden, city: 'city-from'});
    } else if (hidden.city === 'none' && fromCity !== '' && toCity === '') {
      setHidden({...hidden, city: 'city-to'});
    } else if (city === '') {
      setHidden({...hidden, city: 'none'});
    }
  };

  function getCity(choiceCity) {
    if (hidden.city === 'city-from') {
      dispatch(choiceCityFrom(choiceCity));
      setHidden({...hidden, city: 'none'});
      setCity('');
    };

    if (hidden.city === 'city-to') {
      dispatch(choiceCityTo(choiceCity));
      setHidden({...hidden, city: 'none'});
      setCity('');
    };

  };

  function submit() {
    console.log('submit');
    console.log(fromDate, toDate, fromCity, toCity);
    dispatch(clearCities());
  };

  return (
    <div className='search-widget'>
      <div className='search-direction'>
        <h4 className='search-dir-text'>Направление</h4>
        <div className='search-dir-inputs'>
          <input className='dir-input-from' type="text" placeholder="Откуда"
            value={fromCity === '' ? city : fromCity}
            onChange={inputCity}/>
          <button className='dir-btn' type="button"></button>
          <input className='dir-input-to' type="text" placeholder="Куда"
            value={fromCity !== '' && toCity === '' ? city : toCity}
            onChange={inputCity}/>
            <CityList none={hidden.city} getCity={getCity}/>
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

      <button className='search-btn' onClick={submit} type='button'>найти билеты</button>
    </div>
  )
}
