import React, { useState } from 'react';
import '../styles/train-route.css';

export default function TrainRoute() {
  const [seats , setSeats] = useState({
    coupe: 'none',
    reserved: 'none',
    seated: 'none',
    lux: 'none',
  });
  function choiceUpDownSeat(classSeats) {
    console.log(classSeats);
    if (classSeats === 'none') {
      setSeats({...seats, [classSeats]: 'seat-up-down'});
    } else {
      setSeats({...seats, [classSeats]: 'none'});
    };
  };

  return (
    <div className='train-route'>
      <div className='train-name'>
        <span className='train-name-image'></span>
        <h4 className='train-name-text'>020У</h4>
        <div className='train-name-direction'>
          <p className='train-name-city'>москва&#8594;</p>
          <p className='train-name-city'>Санкт-Петербург</p>
          <p className='train-name-city'>&#171;Мегаполис&#187;</p>
        </div>
      </div>

      <div className='train-direction'>
        <div className='train-direction-route'>
          <div className='train-direction-from'>
            <div className='direction-time'>00:20</div>
            <div className='direction-from'>
              <h5 className='direction-city'>Москва</h5>
              <p className='direction-station'>Ленинградский</p>
              <p className='direction-station'>вокзал</p>
            </div>
          </div>
          <div className='train-direction-time'>
            <p className='travel-time'>8:39</p>
            <span className='direction-arrow'></span>
          </div>
          <div className='train-direction-to'>
            <div className='direction-time'>08:59</div>
            <div className='direction-to'>
              <h5 className='direction-city'>Санкт-Петербург</h5>
              <p className='direction-station'>Московский</p>
              <p className='direction-station'>вокзал</p>
            </div>
          </div>
        </div>
      </div>

      <div className='train-tickets'>
        <div className='train-tickets-options'>
          <div className='train-ticket'>
            <p className='ticket-class'>Купе</p>
            <span className='amount-seat'
              onClick={() => choiceUpDownSeat(['seats.coupe'])}>90
              <div className={seats.coupe}>
                <div className='seat-up'>
                  <p className='ticket-class'>верхние</p>
                  <p className='amount-seat'>23</p>
                  <p className='seat-ticket-start-number'>2800</p>
                  <span className='sign-rub'></span>
                </div>
                <div className='seat-down'>
                  <p className='ticket-class'>нижние</p>
                  <p className='amount-seat'>34</p>
                  <p className='seat-ticket-start-number'>2200</p>
                  <span className='sign-rub'></span>
                </div>
              </div>
            </span>
            <div className='ticket-start-price'>
              <p className='ticket-start-text'>от</p>
              <p className='ticket-start-number'>3500</p>
              <span className='sign-rub'></span>
            </div>
          </div>
          <div className='train-ticket'>
            <p className='ticket-class'>Люкс</p>
            <span className='amount-seat'
              onClick={() => choiceUpDownSeat([seats.lux])}>32
              <div className={seats.lux}>
                <div className='seat-up'>
                  <p className='ticket-class'>верхние</p>
                  <p className='amount-seat'>53</p>
                  <p className='seat-ticket-start-number'>4800</p>
                  <span className='sign-rub'></span>
                </div>
                <div className='seat-down'>
                  <p className='ticket-class'>нижние</p>
                  <p className='amount-seat'>68</p>
                  <p className='seat-ticket-start-number'>3100</p>
                  <span className='sign-rub'></span>
                </div>
              </div>
            </span>
            <div className='ticket-start-price'>
              <p className='ticket-start-text'>от</p>
              <p className='ticket-start-number'>4500</p>
              <span className='sign-rub'></span>
            </div>
          </div>
        </div>

        <div className='train-facilities'>
          <span className='train-facilities-wifi'></span>
        </div>

        <button type='button' className='train-choice-btn'>Выбрать места</button>
      </div>
    </div>
  )
}
