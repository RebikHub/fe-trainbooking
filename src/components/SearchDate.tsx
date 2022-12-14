import React, { useState, ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { choiceDateFrom, choiceDateTo } from '../store/sliceChoice';
import Calendar from "./Calendar";
import '../styles/search-widget.css';
import { SearchInputs } from '../interfaces/types';

export default function SearchDate() {
  const [hidden, setHidden] = useState<SearchInputs>({
    from: 'none',
    to: 'none'
  });
  const { fromDate, toDate } = useAppSelector((state) => state.sliceChoice);
  const dispatch = useAppDispatch();
  
  function inputDateFrom(ev: ChangeEvent<HTMLInputElement>) {
    dispatch(choiceDateFrom(ev.target.value));
  };

  function inputDateTo(ev: ChangeEvent<HTMLInputElement>) {
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

  function getDate(choiceDate: string) {
    if (hidden.from === 'calendar-from') {
      dispatch(choiceDateFrom(choiceDate));
      setHidden({...hidden, from: 'none'});
    };

    if (hidden.to === 'calendar-to') {
      dispatch(choiceDateTo(choiceDate));
      setHidden({...hidden, to: 'none'});
    };
  };

  return (
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
  )
}