import React, { useEffect, useState } from 'react';
import '../styles/train-route.css';
import TrainRouteSeats from './TrainRouteSeats';

export default function TrainRoute({route}) {

  const [train, setTrain] = useState([]);
  const [hidden, setHidden] = useState('none');

  function showSeats() {
    if (hidden === 'none') {
      setHidden('seat-up-down');
    } else {
      setHidden('none');
    };
  };

  useEffect(() => {
    const arrayInfo = [];

    function createArray(route, array, seatClass, nameClass) {
      const prices = [];
      for (const [key, value] of Object.entries(route.departure.price_info[seatClass])) {
        prices.push(Number(value));
      };
      prices.sort((a, b) => a - b);
      array.push({
        name: nameClass,
        seats: route.available_seats_info[seatClass],
        price: prices[0]
      })
    }

    if (route.departure.have_first_class) {
      createArray(route, arrayInfo, 'first', 'Люкс')
    };

    if (route.departure.have_second_class) {
      // тут остановился...
      createArray(route, arrayInfo, 'first', 'Люкс')
      const prices = [];
      for (const [key, value] of Object.entries(route.departure.price_info.second)) {
        prices.push(Number(value));
      };
      prices.sort((a, b) => a - b);
      arrayInfo.push({
        name: 'Купе',
        seats: route.available_seats_info.second,
        price: prices[0]
      })
    };

    if (route.departure.have_third_class) {
      const prices = [];
      for (const [key, value] of Object.entries(route.departure.price_info.third)) {
        prices.push(Number(value));
      };
      prices.sort((a, b) => a - b);
      arrayInfo.push({
        name: 'Плацкарт',
        seats: route.available_seats_info.third,
        price: prices[0]
      })
    };

    if (route.departure.have_fourth_class) {
      const prices = [];
      for (const [key, value] of Object.entries(route.departure.price_info.fourth)) {
        prices.push(Number(value));
      };
      prices.sort((a, b) => a - b);
      arrayInfo.push({
        name: 'Сидячий',
        seats: route.available_seats_info.fourth,
        price: prices[0]
      })
    };

    setTrain(arrayInfo);
  }, []);

  return (
    <div className='train-route'>
      <div className='train-name'>
        <span className='train-name-image'></span>
        <h4 className='train-name-text'>{route.departure.train._id}</h4>
        <div className='train-name-direction'>
          <p className='train-name-city'>{route.departure.from.city.name}&#8594;</p>
          <p className='train-name-city'>{route.departure.to.city.name}</p>
          <p className='train-name-city'>&#171;{route.departure.train.name}&#187;</p>
        </div>
      </div>

      <div className='train-direction'>
        <div className='train-direction-route'>
          <div className='train-direction-from'>
            <div className='direction-time'>{route.departure.from.datetime}</div>
            <div className='direction-from'>
              <h5 className='direction-city'>{route.departure.from.city.name}</h5>
              <p className='direction-station'>{route.departure.from.city.railway_station_name}</p>
              <p className='direction-station'>вокзал</p>
            </div>
          </div>
          <div className='train-direction-time'>
            <p className='travel-time'>8:39</p>
            <span className='direction-arrow'></span>
          </div>
          <div className='train-direction-to'>
            <div className='direction-time'>{route.departure.to.datetime}</div>
            <div className='direction-to'>
              <h5 className='direction-city'>{route.departure.to.city.name}</h5>
              <p className='direction-station'>{route.departure.to.city.railway_station_name}</p>
              <p className='direction-station'>вокзал</p>
            </div>
          </div>
        </div>
      </div>

      <div className='train-tickets'>
        <div className='train-tickets-options'>
        {train.map((el) =>
          <TrainRouteSeats name={el.name} seats={el.seats} price={el.price}/>
        )}

        </div>

        <div className='train-facilities'>
          <span className='train-facilities-wifi'></span>
        </div>

        <button type='button' className='train-choice-btn'>Выбрать места</button>
      </div>
    </div>
  )
}
