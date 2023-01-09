import React, { useState } from 'react';
import { useAppSelector } from '../store/hooks';
import Calendar from "./Calendar";
import '../styles/search-widget.css';

export default function SearchDate() {
  const [cur, setCur] = useState<string>('');
  const { fromDate, toDate } = useAppSelector((state) => state.sliceChoice);

  return (
    <div className='search-date'>
      <h4 className='search-date-text'>Дата</h4>
        <div className='search-date-inputs'>
          <input className='date-input-from' type="text" placeholder="ДД.ММ.ГГ"
            defaultValue={fromDate}
            onClick={() => setCur('from')}/>
          {cur === 'from' ? <Calendar none={'calendar-from'}/> : null}
          <input className='date-input-to' type="text" placeholder="ДД.ММ.ГГ"
            defaultValue={toDate}
            onClick={() => setCur('to')}/>
          {cur === 'to' ? <Calendar none={'calendar-to'}/> : null}
        </div>
    </div>
  )
}