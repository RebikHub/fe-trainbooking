import React from 'react';
import '../styles/coaches.css';
import { schemeFirstClass, schemeFourthClass, schemeThirdClass } from '../utils/schemeCoach';

export default function Coach({classStyle, coach}) {

  console.log(coach);

  function amountSeats(amount, type) {
    let top = 0;
    let bottom = 0;
    let side = 0;
    let sum = 0;
    let other = 0;

    if (type === 'first') {
      for (let i of amount) {
        if (i.index % 2 === 0 && i.available) {
          bottom += 1;
        };
        if (i.index % 2 !== 0 && i.available) {
          top += 1;
        };
      };
      sum = top + bottom;
      other = 18 - sum;
    };

    if (type === 'second' || type === 'third') {
      for (let i of amount) {
        if (i.index > 32 && i.available) {
          side += 1;
        };
        if (i.index % 2 === 0 && i.index < 33 && i.available) {
          top += 1;
        };
        if (i.index % 2 !== 0 && i.index < 33 && i.available) {
          bottom += 1;
        };
      };
      sum = top + bottom + side;
      if (type === 'second') {
        other = 32 - sum;
      };
      
      if (type === 'third') {
        other = 48 - sum;
      };
    };


    if (type === 'fourth') {
      for (let i of amount) {
        if (i.index % 2 === 0 && i.index < 33 && i.available) {
          bottom += 1;
        } else if (i.index % 2 !== 0 && i.index > 32 && i.available) {
          bottom += 1;
        } else if (i.available) {
          top += 1;
        };
      };
      sum = top + bottom;
      other = 62 - sum;
    };

    return {
      top,
      bottom,
      side,
      sum,
      other
    };
  };

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
          <h3 className='coach-number-title'>{coach.coach.name}</h3>
          <p className='coach-number-text'>вагон</p>
        </div>
        <div className='coach-seats-amount'>
          <p className='seats-amount-title'>Места <span className='seats-amount-num'>{amountSeats(coach.seats, coach.coach.class_type).sum}</span></p>
          {coach.coach.top_price ?
            <p className='seats-amount-text'>
              Верхние <span className='seats-amount-num'>{amountSeats(coach.seats, coach.coach.class_type).top}</span>
            </p> : null}
          {coach.coach.bottom_price ?
            <p className='seats-amount-text'>
              Нижние <span className='seats-amount-num'>{amountSeats(coach.seats, coach.coach.class_type).bottom}</span>
            </p> : null}
          {coach.coach.side_price ?
            <p className='seats-amount-text'>
              Боковые <span className='seats-amount-num'>{amountSeats(coach.seats, coach.coach.class_type).side}</span>
            </p> : null}
        </div>
        <div className='coach-seats-price'>
          <p className='seats-price-title'>Стоимость</p>
          {coach.coach.top_price ?
            <p className='seats-price-text'>{coach.coach.top_price} <span className='sign-rub'></span></p> : null}
          {coach.coach.bottom_price ?
            <p className='seats-price-text'>{coach.coach.bottom_price} <span className='sign-rub'></span></p> : null}
          {coach.coach.side_price ?
            <p className='seats-price-text'>{coach.coach.side_price} <span className='sign-rub'></span></p> : null}
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
        <p>{amountSeats(coach.seats, coach.coach.class_type).other} человек выбирают места в этом поезде</p>
      </div>

      <div className='coach-seats-info'>
        {coach.coach.class_type === 'first' ?
          <span className='seats-info-first'>
            {schemeFirstClass.map((el, i) =>
              <div className='scheme-seats-first' style={{left: `${41 + 89.63 * (i + 1)}px`}} key={i}>
                <span className={`seat-class seat-left ${haveSeatsOrNot(el.left, coach)}`}>{el.left}</span>
                <span className={`seat-class seat-right ${haveSeatsOrNot(el.right, coach)}`}>{el.right}</span>
              </div>
            )}
          </span> :
        coach.coach.class_type === 'second' ?
          <span className='seats-info-second'>
            {schemeThirdClass.map((el, i) =>
              <div className='scheme-seats-second' style={{left: `${41 + 89.63 * (i + 1)}px`}} ket={i}>
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
              <div className='scheme-seats-third' style={{left: `${41 + 89.63 * (i + 1)}px`}} key={i}>
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
                  <span className={`seat-class seat-win-top ${haveSeatsOrNot(e, coach)}`} style={{left: `${11.3 + 44.2 * (i)}px`}} key={i}>{e}</span>
                )}
                {schemeFourthClass.topAisle.map((e, i) => 
                  <span className={`seat-class seat-aisle-top ${haveSeatsOrNot(e, coach)}`} style={{left: `${11.3 + 44.2 * (i)}px`}} key={i}>{e}</span>
                )}
                {schemeFourthClass.botAisle.map((e, i) => 
                  <span className={`seat-class seat-aisle-bot ${haveSeatsOrNot(e, coach)}`} style={{left: `${55.3 + 44.2 * (i)}px`}} key={i}>{e}</span>
                )}
                {schemeFourthClass.botWindow.map((e, i) => 
                  <span className={`seat-class seat-win-bot ${haveSeatsOrNot(e, coach)}`} style={{left: `${11.3 + 44.2 * (i)}px`}} key={i}>{e}</span>
                )}
              </div>
          </span> : null}

      </div>
    </div>
  )
}
