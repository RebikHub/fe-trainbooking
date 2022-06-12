import React from 'react';
import '../styles/coaches.css';
import { schemeThirdClass } from '../utils/schemeCoach';

export default function Coach({classStyle, coach}) {
  console.log(coach);
  return (
    <div className={classStyle}>
      <div className='coach-description-prices'>
        <div className='coach-number'>
          <h3 className='coach-number-title'>12</h3>
          <p className='coach-number-text'>вагон</p>
        </div>
        <div className='coach-seats-amount'>
          <p className='seats-amount-title'>Места <span className='seats-amount-num'>21</span></p>
          <p className='seats-amount-text'>Верхние <span className='seats-amount-num'>10</span></p>
          <p className='seats-amount-text'>Нижние <span className='seats-amount-num'>11</span></p>
        </div>
        <div className='coach-seats-price'>
          <p className='seats-price-title'>Стоимость</p>
          <p className='seats-price-text'>2020 <span className='sign-rub'></span></p>
          <p className='seats-price-text'>3030 <span className='sign-rub'></span></p>
        </div>
        <div className='coach-services'>
          <p className='coach-services-text'>Обслуживание ФПК</p>
          <div className='coach-services-img'>
            <span className='service-air-selected'>
              <div className='none service-description'></div>
            </span>
            <span className='service-wifi'>
              <div className='none'></div>
            </span>
            <span className='service-linens service-included'>
              <div className='none'></div>
            </span>
            <span className='service-coffee'>
              <div className='none'></div>
            </span>
          </div>
        </div>
      </div>

      <div className='coach-seats-selected'>
        <p>13 человек выбирают места в этом поезде</p>
      </div>

      <div className='coach-seats-info'>
        <span className={`seats-info-${coach.coach.class_type}`}>
          {schemeThirdClass.map((el, i) =>
            <div className={`scheme-seats-${coach.coach.class_type}`} style={{left: `${41 + 89.63 * (i + 1)}px`}}>
              <span className='seat-top-left'>{el.top[0]}</span>
              <span className='seat-bot-left'>{el.bottom[0]}</span>
              <span className='seat-side-left'>{el.side[0]}</span>
              <span className='seat-top-right'>{el.top[1]}</span>
              <span className='seat-bot-right'>{el.bottom[1]}</span>
              <span className='seat-side-right'>{el.side[1]}</span>
            </div>
          )}
        </span>
      </div>
    </div>
  )
}
