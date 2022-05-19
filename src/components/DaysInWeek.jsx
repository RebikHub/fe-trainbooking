import React from 'react';

export default   function DaysInWeek({array, date, currentMonth, otherMonth, onChoiceDate}) {
  return (
    <tr>
      {array.map((el, i) => {
        if (el.curDay !== 'this') {
          return <td className="date-other-month" onClick={() => onChoiceDate(el.numDay, otherMonth)} key={el.numDay + i}>{el.numDay}</td>
        } else if (el.curDay === 'this' && el.numDay === date && currentMonth === otherMonth) {
          return <td className="date-today" onClick={() => onChoiceDate(el.numDay, otherMonth)} key={el.numDay + i}>{el.numDay}</td>
        } else if (el.curDay === 'this') {
          return <td onClick={() => onChoiceDate(el.numDay, otherMonth)} key={el.numDay + i}>{el.numDay}</td>
        }
        return null;
      })}
    </tr>
  )
};
