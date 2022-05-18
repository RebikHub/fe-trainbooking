import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../styles/searchwidget.css';
import Calendar from './Calendar';

export default function SearchWidget() {
  const [date, setDate] = useState({
    from: '',
    to: ''
  });
  const [hidden, setHidden] = useState('none');
  const { fromDate, toDate } = useSelector((state) => state.sliceDate);

  useEffect(() => {
    if (fromDate !== null) {
      setDate((prev) => ({...prev, from: fromDate}));
    };

    if (toDate !== null) {
      setDate((prev) => ({...prev, to: fromDate}));
    };
  }, [fromDate, toDate]);

  function handleDateFrom(ev) {
    setDate((prev) => ({...prev, from: ev.target.value}));
  };

  function handleDateTo(ev) {
    setDate((prev) => ({...prev, to: ev.target.value}));
  };

  function getCalendar() {
    if (hidden === '' && fromDate !== null) {
      setHidden('none');
    } else {
      setHidden('');
    }
  };

  return (
    <div className='search-widget'>
      <div className='search-direction'>
        <h4 className='search-dir-text'>Направление</h4>
        <div className='search-dir-inputs'>
          <input className='dir-input-from' type="text" placeholder="Откуда"/>
          <button className='dir-btn' type="button"></button>
          <input className='dir-input-to' type="text" placeholder="Куда"/>
        </div>
      </div>

      <div className='search-date'>
        <h4 className='search-date-text'>Дата</h4>
          <div className='search-date-inputs'>
            <input className='date-input-from' type="text" placeholder="ДД/ММ/ГГ"
              value={date.from}
              onClick={getCalendar}
              onChange={handleDateFrom}/>
            <Calendar none={hidden}/>
            <input className='date-input-to' type="text" placeholder="ДД/ММ/ГГ"
              value={date.to}
              onChange={handleDateTo}/>
          </div>
      </div>

      <button className='search-btn' type='button'>найти билеты</button>
    </div>
  )
}
