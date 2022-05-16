import React, { useEffect, useState } from 'react';
import '../styles/calendar.css';
import { date, monthInWeeks } from '../date';

export default function Calendar({none}) {
  const [month, setMonth] = useState(date.numberMonth);
  const [days, setDays] = useState(null);
  console.log(date);

  useEffect(() => {
    const weeks = monthInWeeks(month);
    setDays(weeks);
    console.log(days);
  }, [month]);

  function daysInWeek(array, date, week = '') {
    return array.map((el, i) => {
      if (week === 'first' && array[array.length-1] < el) {
        return <td className="date-other-month" key={el + i}>{el}</td>
      } else if (week === 'last' && array[array.length-1] < array[0] && array[array.length-1] >= el) {
        return <td className="date-other-month" key={el + i}>{el}</td>
      } else if (week === 'last' && array[array.length-1] > array[0]) {
        return <td key={el + i}>{el}</td>
      } else if (week === '' && array[array.length-1] > array[0] && el === date) {
        return <td className="date-today" key={el + i}>{el}</td>
      } else if (week === '' && array[array.length-1] > array[0]) {
        return <td key={el + i}>{el}</td>
      } else if (el === date) {
        return <td className="date-today" key={el + i}>{el}</td>
      } else {
        return <td key={el + i}>{el}</td>
      }
    })
  };

  function prevMonth() {
    setMonth((prev) => (prev - 1));
  };

  function nextMonth() {
    setMonth((prev) => (prev + 1));
  };
  return (
    <div className={`calendar ${none}`}>
      <div className='cal-triangle'></div>
      <div className='cal-main'>
        <div className='cal-month'>
          <button className='prev-month' onClick={prevMonth} type='button'></button>
          <p className='cal-month-text'>{date.month}</p>
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
              <tr>{daysInWeek(days.first, date.numDate, 'first')}</tr>
              <tr>{daysInWeek(days.second, date.numDate)}</tr>
              <tr>{daysInWeek(days.third, date.numDate)}</tr>
              <tr>{daysInWeek(days.fourth, date.numDate)}</tr>
              <tr>{daysInWeek(days.fifth, date.numDate, 'last')}</tr>
              <tr>{daysInWeek(days.sixth, date.numDate, 'last')}</tr>
            </tbody> : null}
        </table>
      </div>
    </div>
  )
}
