import React from 'react';
import '../styles/coaches.css';
import { schemeFirstClass, schemeFourthClass, schemeThirdClass } from '../utils/schemeCoach';

export default function Coach({classStyle, coach}) {
  console.log(coach);

  function haveSeatsOrNot(numScheme, coach) {
    let result = 'seat-not-have';
    coach.seats.map((e) => {
      if (e.index === numScheme) {
        if (e.available) {
          return result = 'seat-have';
        };
      };
      return null;
    });
    return result;
  };

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
        {coach.coach.class_type === 'first' ?
          <span className='seats-info-first'>
            {schemeFirstClass.map((el, i) =>
              <div className='scheme-seats-first' style={{left: `${41 + 89.63 * (i + 1)}px`}}>
                <span className={`seat-class seat-left ${haveSeatsOrNot(el.left, coach)}`}>{el.left}</span>
                <span className={`seat-class seat-right ${haveSeatsOrNot(el.right, coach)}`}>{el.right}</span>
              </div>
            )}
          </span> :
        coach.coach.class_type === 'second' ?
          <span className='seats-info-second'>
            {schemeThirdClass.map((el, i) =>
              <div className='scheme-seats-second' style={{left: `${41 + 89.63 * (i + 1)}px`}}>
                <span className={`seat-class seat-top-left ${haveSeatsOrNot(el.top[0], coach)}`}>{el.top[0]}</span>
                <span className={`seat-class seat-bot-left ${haveSeatsOrNot(el.bottom[0], coach)}`}>{el.bottom[0]}</span>
                <span className={`seat-class seat-top-right ${haveSeatsOrNot(el.top[1], coach)}`}>{el.top[1]}</span>
                <span className={`seat-class seat-bot-right ${haveSeatsOrNot(el.bottom[1], coach)}`}>{el.bottom[1]}</span>
              </div>
            )}
          </span> :
        coach.coach.class_type === 'third' ?
          <span className='seats-info-third'>
            {schemeThirdClass.map((el, i) =>
              <div className='scheme-seats-third' style={{left: `${41 + 89.63 * (i + 1)}px`}}>
                <span className={`seat-class seat-top-left ${haveSeatsOrNot(el.top[0], coach)}`}>{el.top[0]}</span>
                <span className={`seat-class seat-bot-left ${haveSeatsOrNot(el.bottom[0], coach)}`}>{el.bottom[0]}</span>
                <span className={`seat-class seat-side-left ${haveSeatsOrNot(el.side[0], coach)}`}>{el.side[0]}</span>
                <span className={`seat-class seat-top-right ${haveSeatsOrNot(el.top[1], coach)}`}>{el.top[1]}</span>
                <span className={`seat-class seat-bot-right ${haveSeatsOrNot(el.bottom[1], coach)}`}>{el.bottom[1]}</span>
                <span className={`seat-class seat-side-right ${haveSeatsOrNot(el.side[1], coach)}`}>{el.side[1]}</span>
              </div>
            )}
          </span> :
        coach.coach.class_type === 'fourth' ?
          <span className='seats-info-fourth'>
              <div className='scheme-seats-fourth'>
                {schemeFourthClass.topWindow.map((e, i) => 
                  <span className={`seat-class seat-win-top ${haveSeatsOrNot(e, coach)}`} style={{left: `${11.3 + 44.2 * (i)}px`}}>{e}</span>
                )}
                {schemeFourthClass.topAisle.map((e, i) => 
                  <span className={`seat-class seat-aisle-top ${haveSeatsOrNot(e, coach)}`} style={{left: `${11.3 + 44.2 * (i)}px`}}>{e}</span>
                )}
                {schemeFourthClass.botAisle.map((e, i) => 
                  <span className={`seat-class seat-aisle-bot ${haveSeatsOrNot(e, coach)}`} style={{left: `${55.3 + 44.2 * (i)}px`}}>{e}</span>
                )}
                {schemeFourthClass.botWindow.map((e, i) => 
                  <span className={`seat-class seat-win-bot ${haveSeatsOrNot(e, coach)}`} style={{left: `${11.3 + 44.2 * (i)}px`}}>{e}</span>
                )}
              </div>
          </span> : null}

      </div>
    </div>
  )
}
