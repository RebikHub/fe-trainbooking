import React, { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import Calendar from "./Calendar";
import '../styles/search-widget.css';
import { clearChoiceDate } from '../store/sliceChoice';

export default function SearchDate() {
  const [current, setCurrent] = useState<string>('');
  const { fromDate, toDate } = useAppSelector((state) => state.sliceChoice);
  const ref = useRef<HTMLElement | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (document.querySelector('.calendar-from')) {
      ref.current = document.querySelector('.calendar-from');
    };
    if (document.querySelector('.calendar-to')) {
      ref.current = document.querySelector('.calendar-to');
    };
  }, [current]);

  useEffect(() => {
    inputBlur();
  }, [fromDate, toDate]);

  function inputFrom(ev: SyntheticEvent<HTMLInputElement>) {
    if (fromDate !== '') {
      dispatch(clearChoiceDate());
    };
    setCurrent('from');
  };

  function inputTo(ev: SyntheticEvent<HTMLInputElement>) {
    setCurrent('to');
  };

  function inputBlur() {
    if (ref.current?.className === 'none') {
      setCurrent('');
    };
  };

  return (
    <div className='search-date'>
      <h4 className='search-date-text'>Дата</h4>
        <div className='search-date-inputs'>
          <input className='date-input-from' type="text" placeholder="ДД.ММ.ГГ"
            value={fromDate}
            onChange={inputFrom}
            onClick={inputFrom}
            onBlur={inputBlur}/>
          {current === 'from' ? <Calendar classStyle={'calendar-from'}/> : null}
          <input className='date-input-to' type="text" placeholder="ДД.ММ.ГГ"
            value={toDate}
            onChange={inputTo}
            onClick={inputTo}
            onBlur={inputBlur}/>
          {current === 'to' ? <Calendar classStyle={'calendar-to'}/> : null}
        </div>
    </div>
  );
};