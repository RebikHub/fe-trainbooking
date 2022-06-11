import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { requestGetSeats } from '../store/sliceGetSeats';
import '../styles/train-route.css';
import { dateFromAndTo, duration } from '../utils/trainDate';
import TrainRouteSeats from './TrainRouteSeats';

export default function TrainRoute({route}) {
  const [train, setTrain] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();


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
        price: prices[0],
        seatPrice: route.departure.price_info[seatClass]
      })
    }

    if (route.departure.have_first_class) {
      createArray(route, arrayInfo, 'first', 'Люкс');
    };

    if (route.departure.have_second_class) {
      createArray(route, arrayInfo, 'second', 'Купе');
    };

    if (route.departure.have_third_class) {
      createArray(route, arrayInfo, 'third', 'Плацкарт');
    };

    if (route.departure.have_fourth_class) {
      createArray(route, arrayInfo, 'fourth', 'Сидячий');
    };

    setTrain(arrayInfo);
  }, []);

  function getCoaches() {
    console.log(route.departure._id);
    dispatch(requestGetSeats(route.departure._id));
    navigate('/route/coach');

  };

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
            <div className='direction-time'>{dateFromAndTo(route.departure.from.datetime)}</div>
            <div className='direction-from'>
              <h5 className='direction-city'>{route.departure.from.city.name}</h5>
              <p className='direction-station'>{route.departure.from.city.railway_station_name}</p>
              <p className='direction-station'>вокзал</p>
            </div>
          </div>
          <div className='train-direction-time'>
            <p className='travel-time'>{duration(route.departure.duration)}</p>
            <span className='direction-arrow'></span>
          </div>
          <div className='train-direction-to'>
            <div className='direction-time'>{dateFromAndTo(route.departure.to.datetime)}</div>
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
          <TrainRouteSeats
            name={el.name}
            seats={el.seats}
            price={el.price}
            seatPrice={el.seatPrice}
            key={el.name}/>
        )}

        </div>

        <div className='train-facilities'>
          <span className={`${route.departure.have_wifi ? 'facilities-wifi-have' : 'train-facilities-wifi'}`}></span>
          <span className={`${route.departure.is_express ? 'facilities-express-have' : 'train-facilities-express'}`}></span>
          <span className={`${route.departure.have_air_conditioning ? 'facilities-coffee-have' : 'train-facilities-coffee'}`}></span>
        </div>

        <button type='button' className='train-choice-btn' onClick={getCoaches}>Выбрать места</button>
      </div>
    </div>
  )
}
