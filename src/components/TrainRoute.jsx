import React from 'react';
import '../styles/train-route.css';

export default function TrainRoute() {
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
            <span className='amount-seat'>90</span>
            <div className='ticket-start-price'>
              <p className='ticket-start-text'>от</p>
              <p className='ticket-start-number'>3500</p>
              <span className='sign-rub'></span>
            </div>
          </div>
          <div className='train-ticket'>
            <p className='ticket-class'>Люкс</p>
            <span className='amount-seat'>32</span>
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
