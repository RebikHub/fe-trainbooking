import React, { BaseSyntheticEvent, useEffect, useState } from 'react';
import '../styles/calendar.css';
import { getCurrentDate, monthInWeeks } from '../utils/date';
import DaysInWeek from './DaysInWeek';
import { useRef } from 'react';
import { useAppSelector } from '../store/hooks';
import { Weeks } from '../interfaces/types';

type Props = {
  none: string,
  getDate: (date: string) => void,
  getCalendarFrom: () => void,
  getCalendarTo: () => void
};

export default function Calendar({none, getDate, getCalendarFrom, getCalendarTo}: Props) {
  const date = getCurrentDate();
  const [numMonth, setNumMonth] = useState<number>(date.numberMonth);
  const [nameMonth, setNameMonth] = useState<string>(date.month);
  const [days, setDays] = useState<Weeks | null>(null);
  const { fromDate } = useAppSelector((state) => state.sliceChoice);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function outsideClick(ev: { target: Node | null; }): void {
      if (ref.current && !ref.current.contains(ev.target)) {
        if (none.includes('from')) {
          getCalendarFrom();
        };
        if (none.includes('to')) {
          getCalendarTo();
        };
      };
    };
    document.addEventListener("mousedown", outsideClick);
    return () => document.removeEventListener("mousedown", outsideClick);
  }, [ref, none, getCalendarFrom, getCalendarTo]);

  useEffect(() => {
    const weeks = monthInWeeks(numMonth);
    setDays(weeks);
  }, [numMonth]);

  function onChoiceDate(day, month) {
    const choiceDate = date.choiceDate(date.year, month, day);
    const compareChoiceDate = new Date(date.year, month, day).getTime();
    const compareToday = new Date(date.year, date.numberMonth, date.numDate).getTime();
    const arrDate = fromDate.split('.');
    const compareFromDate = new Date(arrDate[2], +arrDate[1] - 1, arrDate[0]);

    if (fromDate === '' && compareToday < compareChoiceDate) {
      getDate(choiceDate);
    } else if (fromDate !== '' && compareFromDate < compareChoiceDate) {
      getDate(choiceDate);
    };
  };

  function prevMonth() {
    setNumMonth((prev) => (prev - 1));
    setNameMonth(date.nameMonth(date.year, numMonth - 1));
  };

  function nextMonth() {
    setNumMonth((prev) => (prev + 1));
    setNameMonth(date.nameMonth(date.year, numMonth + 1));
  };

  return (
    <div className={none} ref={ref}>
      <div className='cal-triangle'></div>
      <div className='cal-main'>
        <div className='cal-month'>
          <button className='prev-month' onClick={prevMonth} type='button'></button>
          <p className='cal-month-text'>{nameMonth}</p>
          <button className='next-month' onClick={nextMonth} type='button'></button>
        </div>
        <table className='cal-table'>
          <colgroup className='date-column'>
            <col/>
            <col/>
            <col/>
            <col/>
            <col/>
            <col className="date-week-end"/>
            <col className="date-week-end"/>
          </colgroup>
          <thead>
            <tr>
              <th scope="col" title="Понедельник">Пн</th>
              <th scope="col" title="Вторник">Вт</th>
              <th scope="col" title="Среда">Ср</th>
              <th scope="col" title="Четверг">Чт</th>
              <th scope="col" title="Пятница">Пт</th>
              <th scope="col" title="Суббота">Сб</th>
              <th scope="col" title="Воскресенье">Вс</th>
            </tr>
          </thead>
            {days !== null ? <tbody>
              {Object.entries(days).map((el) => 
                <DaysInWeek
                  array={el[1]}
                  date={date.numDate}
                  currentMonth={date.numberMonth}
                  otherMonth={numMonth}
                  onChoiceDate={onChoiceDate}
                  key={el[0]}/>
              )}
            </tbody> : null}
        </table>
      </div>
    </div>
  )
}
