import React from 'react';
import '../styles/calendar.css';

export default function Calendar({none}) {
  return (
    <div className={`calendar ${none}`}>
      <div className='cal-triangle'></div>
      <div className='cal-main'>
        <div className='cal-month'>
          <button className='prev-month' type='button'></button>
          <p className='cal-month-text'>Август</p>
          <button className='next-month' type='button'></button>
        </div>
        <table></table>
      </div>
    </div>
  )
}
