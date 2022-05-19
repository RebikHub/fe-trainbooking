import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { choiceCityFrom, choiceCityTo, choiceDateFrom, choiceDateTo } from '../store/sliceChoice';
import '../styles/searchwidget.css';
import Calendar from './Calendar';

export default function SearchWidget() {
  const [hidden, setHidden] = useState('none');
  const { fromDate, toDate, fromCity, toCity } = useSelector((state) => state.sliceChoice);
  const dispatch = useDispatch();

  function inputDateFrom(ev) {
    dispatch(choiceDateFrom(ev.target.value));
  };

  function inputDateTo(ev) {
    dispatch(choiceDateTo(ev.target.value));
  };

  function inputCityFrom(ev) {
    dispatch(choiceCityFrom(ev.target.value));
  };

  function inputCityTo(ev) {
    dispatch(choiceCityTo(ev.target.value));
  };

  function getCalendar() {
    if (hidden === 'none' && fromDate == null && toDate === null) {
      setHidden('calendar-from');
    } else if (hidden === 'none' && fromDate !== null && toDate === null) {
      setHidden('calendar-to');
    } else {
      setHidden('none');
    }
  };

  function getDate(choiceDate) {
    if (hidden === 'calendar-from') {
      dispatch(choiceDateFrom(choiceDate));
      setHidden('none');
    };

    if (hidden === 'calendar-to') {
      dispatch(choiceDateTo(choiceDate));
      setHidden('none');
    };

  };

  function submit() {
    console.log('submit');
  };

  return (
    <div className='search-widget'>
      <div className='search-direction'>
        <h4 className='search-dir-text'>Направление</h4>
        <div className='search-dir-inputs'>
          <input className='dir-input-from' type="text" placeholder="Откуда"
            value={fromCity}
            onChange={inputCityFrom}/>
          <button className='dir-btn' type="button"></button>
          <input className='dir-input-to' type="text" placeholder="Куда"
            value={toCity}
            onChange={inputCityTo}/>
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
            <Calendar none={hidden} getDate={getDate}/>
          </div>
      </div>

      <button className='search-btn' onClick={submit} type='button'>найти билеты</button>
    </div>
  )
}
