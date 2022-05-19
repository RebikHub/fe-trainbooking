import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { choiceDateFrom, choiceDateTo, clearDate } from '../store/sliceDate';
import '../styles/searchwidget.css';
import Calendar from './Calendar';

export default function SearchWidget() {
  const [date, setDate] = useState({
    from: '',
    to: ''
  });
  const [city, setCity] = useState({
    from: '',
    to: ''
  });
  const [hidden, setHidden] = useState('none');
  const { fromDate, toDate } = useSelector((state) => state.sliceDate);
  const dispatch = useDispatch();

  function inputDateFrom(ev) {
    setDate({...date, from: ev.target.value});
  };

  function inputDateTo(ev) {
    setDate({...date, to: ev.target.value});
  };

  function inputCityFrom(ev) {
    setCity({...city, from: ev.target.value});
  };

  function inputCityTo(ev) {
    setCity({...city, to: ev.target.value});
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
      setDate({...date, from: choiceDate});
      dispatch(choiceDateFrom(choiceDate));
      setHidden('none');
    };

    if (hidden === 'calendar-to') {
      setDate({...date, to: choiceDate});
      dispatch(choiceDateTo(choiceDate));
      setHidden('none');
    };

  };

  function submit() {
    dispatch(clearDate());
    dispatch(choiceDateFrom(date.from));
    dispatch(choiceDateTo(date.to));
  };

  return (
    <div className='search-widget'>
      <div className='search-direction'>
        <h4 className='search-dir-text'>Направление</h4>
        <div className='search-dir-inputs'>
          <input className='dir-input-from' type="text" placeholder="Откуда"
            value={city.from}
            onChange={inputCityFrom}/>
          <button className='dir-btn' type="button"></button>
          <input className='dir-input-to' type="text" placeholder="Куда"
            value={city.to}
            onChange={inputCityTo}/>
        </div>
      </div>

      <div className='search-date'>
        <h4 className='search-date-text'>Дата</h4>
          <div className='search-date-inputs'>
            <input className='date-input-from' type="text" placeholder="ДД.ММ.ГГ"
              value={date.from}
              onClick={getCalendar}
              onChange={inputDateFrom}/>
            <input className='date-input-to' type="text" placeholder="ДД.ММ.ГГ"
              value={date.to}
              onClick={getCalendar}
              onChange={inputDateTo}/>
            <Calendar none={hidden} getDate={getDate}/>
          </div>
      </div>

      <button className='search-btn' onClick={submit} type='button'>найти билеты</button>
    </div>
  )
}
