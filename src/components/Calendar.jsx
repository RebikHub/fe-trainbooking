import React, { useState } from 'react';
import '../styles/calendar.css';

export default function Calendar() {
  const [date, setDate] = useState({
    from: '',
    to: ''
  });

  function handleDateFrom(ev) {
    setDate((prev) => ({...prev, from: ev.target.value}));
  };

  function handleDateTo(ev) {
    setDate((prev) => ({...prev, to: ev.target.value}));
  };

  return (
    <div className='calendar'>
      <div className='cal-direction'>
        <h4 className='cal-dir-text'>Направление</h4>
        <div className='cal-dir-inputs'>
          <input className='dir-input-from' type="text" placeholder="Откуда"/>
          <button className='dir-btn' type="button"></button>
          <input className='dir-input-to' type="text" placeholder="Куда"/>
        </div>
      </div>

      <div className='cal-date'>
        <h4 className='cal-date-text'>Дата</h4>
          <div className='cal-date-inputs'>
            <input className='date-input-from' type="text" placeholder="ДД/ММ/ГГ"
              value={date.from}
              onChange={handleDateFrom}/>
            <input className='date-input-to' type="text" placeholder="ДД/ММ/ГГ"
              value={date.to}
              onChange={handleDateTo}/>
          </div>
      </div>

      <button className='cal-btn' type='button'>найти билеты</button>
    </div>
  )
}
