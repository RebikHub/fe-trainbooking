import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/last-routes.css';

export default function LastRoutes() {
  const {lastRoutes} = useSelector((state) => state.sliceGetLastRoutes);

  return (
    <div className='last-routes'>
      <h4 className='last-title'>последние билеты</h4>
      <ul className='last-list'>
        {lastRoutes.map((el) => 
        <li className='last-list-item' key={el.departure._id}>
          <div className='route-from-to'>
            <div className='route-from'>
              <h5 className='route-city-text'>{el.departure.from.city.name}</h5>
              <p className='route-station-text'>{el.departure.from.railway_station_name}</p>
              <p className='route-station-text'>вокзал</p>
            </div>
            <div className='route-to'>
              <h5 className='route-city-text'>{el.departure.to.city.name}</h5>
              <p className='route-station-text'>{el.departure.to.railway_station_name}</p>
              <p className='route-station-text'>вокзал</p>
            </div>
          </div>
          <div className='route-facilities-price'>
            <div className='route-facilities'>
              {/* <span className='facilities-wifi'></span>
              <span className='facilities-express'></span>
              <span className='facilities-coffee'></span> */}
            </div>
            <div className='route-start-price'>
              <p className='price-start-text'>от</p>
              <p className='price-start-number'>{el.min_price}</p>
              <span className='sign-rub'></span>
            </div>
          </div>
        </li>
        )}
      </ul>
    </div>
  )
}
