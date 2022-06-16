import React, { useState } from 'react';
import { useEffect } from 'react';
import '../styles/coaches.css';
import { amountSeats, haveSeatsOrNot } from '../utils/amountSeats';
import { schemeFirstClass, schemeFourthClass, schemeThirdClass } from '../utils/schemeCoach';

export default function Coach({classStyle, coach, choiceSeats}) {
  const [visible, setVisible] = useState({
    air: false,
    wifi: false,
    linens: false,
    cup: false
  });
  console.log(coach);

  function mouseMoveToAir(ev) {
    if (ev.target.classList.contains('service-air-selected') || ev.target.classList.contains('service-air')) {
      setVisible({
        air: true,
        wifi: false,
        linens: false,
        cup: false
      });
    };
  };

  function mouseMoveToWifi(ev) {
    if (ev.target.classList.contains('service-wifi') || ev.target.classList.contains('service-wifi-empty')) {
      setVisible({
        air: false,
        wifi: true,
        linens: false,
        cup: false
      });
    };
  };

  function mouseMoveToLinens(ev) {
    if (ev.target.classList.contains('service-linens-empty') ||
    ev.target.classList.contains('service-linens') ||
    ev.target.classList.contains('service-included')) {
      setVisible({
        air: false,
        wifi: false,
        linens: true,
        cup: false
      });
    };
  };

  function mouseMoveToCup(ev) {
    if (ev.target.classList.contains('service-coffee')) {
      setVisible({
        air: false,
        wifi: false,
        linens: false,
        cup: true
      });
    };
  };

  function buyWifi() {
    console.log('buy wifi ', coach.coach.wifi_price);
  };

  function buyLinens() {
    console.log('buy linens ', coach.coach.linens_price);
  };

  useEffect(() => {
    for (let i in visible) {
      if (visible[i] === true) {
        setTimeout(() => setVisible({...visible, [i]: false}), 2 * 1000);
      };
    };
  }, [visible]);

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

            <div className='service-move'>
              <span className={coach.coach.have_air_conditioning ? 'service-air-selected' : 'service-air'}
                onMouseMove={mouseMoveToAir}></span>
              <div className={visible.air ? 'service-description' : 'none'}>
                {coach.coach.have_air_conditioning ? 'кондиционер есть' : 'кондиционера нет'}
              </div>
            </div>

            <div className='service-move'>
              <span className={coach.coach.have_wifi ? 'service-wifi' : 'service-wifi-empty'}
                onMouseMove={mouseMoveToWifi} onClick={buyWifi}></span>
              <div className={visible.wifi ? 'service-description' : 'none'}>
                {coach.coach.have_wifi ? `WI-FI есть ${coach.coach.wifi_price} р.` : 'WI-FI нет'}
              </div>
            </div>

            <div className='service-move'>
              <span className={coach.coach.class_type === 'fourth' ? 'service-linens-empty' :
                `service-linens ${coach.coach.is_linens_included ? 'service-included' : ''}`}
                  onMouseMove={mouseMoveToLinens} onClick={buyLinens}></span>
              <div className={visible.linens ? 'service-description' : 'none'}>
                {coach.coach.class_type === 'fourth' ? 'белья нет' :
                  `белье ${coach.coach.is_linens_included ? 'включено' : `есть ${coach.coach.linens_price} р.`}`}
              </div>
            </div>

            <div className='service-move'>
              <span className='service-coffee' onMouseMove={mouseMoveToCup}></span>
              <div className={visible.cup ? 'service-description' : 'none'}>питание</div>
            </div>

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
                <span className={`seat-class seat-left ${haveSeatsOrNot(el.left, coach)}`}
                  onClick={() => choiceSeats(coach.coach.bottom_price, el.left, haveSeatsOrNot(el.left, coach))}>{el.left}</span>
                <span className={`seat-class seat-right ${haveSeatsOrNot(el.right, coach)}`}
                  onClick={() => choiceSeats(coach.coach.top_price, el.right, haveSeatsOrNot(el.right, coach))}>{el.right}</span>
              </div>
            )}
          </span> :
        coach.coach.class_type === 'second' ?
          <span className='seats-info-second'>
            {schemeThirdClass.map((el, i) =>
              <div className='scheme-seats-second' style={{left: `${41 + 89.63 * (i + 1)}px`}} ket={i}>
                <span className={`seat-class seat-top-left ${haveSeatsOrNot(el.top[0], coach)}`}
                  onClick={() => choiceSeats(coach.coach.top_price, el.top[0], haveSeatsOrNot(el.top[0], coach))}>{el.top[0]}</span>
                <span className={`seat-class seat-bot-left ${haveSeatsOrNot(el.bottom[0], coach)}`}
                  onClick={() => choiceSeats(coach.coach.bottom_price, el.bottom[0], haveSeatsOrNot(el.bottom[0], coach))}>{el.bottom[0]}</span>
                <span className={`seat-class seat-top-right ${haveSeatsOrNot(el.top[1], coach)}`}
                  onClick={() => choiceSeats(coach.coach.top_price, el.top[1], haveSeatsOrNot(el.top[1], coach))}>{el.top[1]}</span>
                <span className={`seat-class seat-bot-right ${haveSeatsOrNot(el.bottom[1], coach)}`}
                  onClick={() => choiceSeats(coach.coach.bottom_price, el.bottom[1], haveSeatsOrNot(el.bottom[1], coach))}>{el.bottom[1]}</span>
              </div>
            )}
          </span> :
        coach.coach.class_type === 'third' ?
          <span className='seats-info-third'>
            {schemeThirdClass.map((el, i) =>
              <div className='scheme-seats-third' style={{left: `${41 + 89.63 * (i + 1)}px`}} key={i}>
                <span className={`seat-class seat-top-left ${haveSeatsOrNot(el.top[0], coach)}`}
                  onClick={() => choiceSeats(coach.coach.top_price, el.top[0], haveSeatsOrNot(el.top[0], coach))}>{el.top[0]}</span>
                <span className={`seat-class seat-bot-left ${haveSeatsOrNot(el.bottom[0], coach)}`}
                  onClick={() => choiceSeats(coach.coach.bottom_price, el.bottom[0], haveSeatsOrNot(el.bottom[0], coach))}>{el.bottom[0]}</span>
                <span className={`seat-class seat-side-left ${haveSeatsOrNot(el.side[0], coach)}`}
                  onClick={() => choiceSeats(coach.coach.side_price, el.side[0], haveSeatsOrNot(el.side[0], coach))}>{el.side[0]}</span>
                <span className={`seat-class seat-top-right ${haveSeatsOrNot(el.top[1], coach)}`}
                  onClick={() => choiceSeats(coach.coach.top_price, el.top[1], haveSeatsOrNot(el.top[1], coach))}>{el.top[1]}</span>
                <span className={`seat-class seat-bot-right ${haveSeatsOrNot(el.bottom[1], coach)}`}
                  onClick={() => choiceSeats(coach.coach.bottom_price, el.bottom[1], haveSeatsOrNot(el.bottom[1], coach))}>{el.bottom[1]}</span>
                <span className={`seat-class seat-side-right ${haveSeatsOrNot(el.side[1], coach)}`}
                  onClick={() => choiceSeats(coach.coach.side_price, el.side[1], haveSeatsOrNot(el.side[1], coach))}>{el.side[1]}</span>
              </div>
            )}
          </span> :
        coach.coach.class_type === 'fourth' ?
          <span className='seats-info-fourth'>
              <div className='scheme-seats-fourth'>
                {schemeFourthClass.topWindow.map((e, i) => 
                  <span className={`seat-class seat-win-top ${haveSeatsOrNot(e, coach)}`}
                    style={{left: `${11.3 + 44.2 * (i)}px`}} key={i}
                    onClick={() => choiceSeats(coach.coach.top_price, e, haveSeatsOrNot(e, coach))}>{e}</span>
                )}
                {schemeFourthClass.topAisle.map((e, i) => 
                  <span className={`seat-class seat-aisle-top ${haveSeatsOrNot(e, coach)}`}
                    style={{left: `${11.3 + 44.2 * (i)}px`}} key={i}
                    onClick={() => choiceSeats(coach.coach.bottom_price, e, haveSeatsOrNot(e, coach))}>{e}</span>
                )}
                {schemeFourthClass.botAisle.map((e, i) => 
                  <span className={`seat-class seat-aisle-bot ${haveSeatsOrNot(e, coach)}`}
                    style={{left: `${55.3 + 44.2 * (i)}px`}} key={i}
                    onClick={() => choiceSeats(coach.coach.bottom_price, e, haveSeatsOrNot(e, coach))}>{e}</span>
                )}
                {schemeFourthClass.botWindow.map((e, i) => 
                  <span className={`seat-class seat-win-bot ${haveSeatsOrNot(e, coach)}`}
                    style={{left: `${11.3 + 44.2 * (i)}px`}} key={i}
                    onClick={() => choiceSeats(coach.coach.top_price, e, haveSeatsOrNot(e, coach))}>{e}</span>
                )}
              </div>
          </span> : null}

      </div>
    </div>
  );
};
