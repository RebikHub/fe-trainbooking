import React, { useEffect, useState } from 'react';
import '../styles/calendar.css';
import { date, monthInWeeks } from '../date';
import { useDispatch } from 'react-redux';
import { choiceDateFrom } from '../store/sliceDate';

export default function Calendar({none}) {
  const [numMonth, setNumMonth] = useState(date.numberMonth);
  const [nameMonth, setNameMonth] = useState(date.month);
  const [days, setDays] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const weeks = monthInWeeks(numMonth);
    setDays(weeks);
  }, [numMonth]);

  function daysInWeek(array, date, currentMonth, otherMonth) {
    return array.map((el, i) => {
      if (el.curDay !== 'this') {
        return <td className="date-other-month" onClick={() => onChoiceDate(el.numDay, otherMonth)} key={el.numDay + i}>{el.numDay}</td>
      } else if (el.curDay === 'this' && el.numDay === date && currentMonth === otherMonth) {
        return <td className="date-today" onClick={() => onChoiceDate(el.numDay, otherMonth)} key={el.numDay + i}>{el.numDay}</td>
      } else if (el.curDay === 'this') {
        return <td onClick={() => onChoiceDate(el.numDay, otherMonth)} key={el.numDay + i}>{el.numDay}</td>
      }
      return null;
    })
  };

  function onChoiceDate(day, month) {
    const dateFrom = date.choiceDate(date.year, month, day);
    dispatch(choiceDateFrom(dateFrom));
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
              <tr>{daysInWeek(days.first, date.numDate, date.numberMonth, numMonth)}</tr>
              <tr>{daysInWeek(days.second, date.numDate, date.numberMonth, numMonth)}</tr>
              <tr>{daysInWeek(days.third, date.numDate, date.numberMonth, numMonth)}</tr>
              <tr>{daysInWeek(days.fourth, date.numDate, date.numberMonth, numMonth)}</tr>
              <tr>{daysInWeek(days.fifth, date.numDate, date.numberMonth, numMonth)}</tr>
              <tr>{daysInWeek(days.sixth, date.numDate, date.numberMonth, numMonth)}</tr>
            </tbody> : null}
        </table>
      </div>
    </div>
  )
}
