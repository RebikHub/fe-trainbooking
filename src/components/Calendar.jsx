import React, { useEffect, useState } from 'react';
import '../styles/calendar.css';
import { date, monthInWeeks } from '../date';
import DaysInWeek from './DaysInWeek';
import { useSelector } from 'react-redux';

export default function Calendar({none, getDate}) {
  const [numMonth, setNumMonth] = useState(date.numberMonth);
  const [nameMonth, setNameMonth] = useState(date.month);
  const [days, setDays] = useState(null);
  const { fromDate } = useSelector((state) => state.sliceDate);

  useEffect(() => {
    const weeks = monthInWeeks(numMonth);
    setDays(weeks);
  }, [numMonth]);

  function onChoiceDate(day, month) {
    const choiceDate = date.choiceDate(date.year, month, day);
    const today = date.choiceDate(date.year, date.numberMonth, date.numDate);

    if (fromDate === null && today < choiceDate) {
      getDate(choiceDate);
    } else if (fromDate !== null && fromDate < choiceDate) {
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
    <div className={none}>
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
