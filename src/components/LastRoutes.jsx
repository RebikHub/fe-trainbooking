import React from 'react';
import '../styles/last-routes.css';

export default function LastRoutes() {
  return (
    <div className='last-routes'>
      <h4 className='last-title'>последние билеты</h4>
      <ul className='last-list'>
        <li className='last-list-item'>
          <div className='route-from-to'>
            <div className='route-from'>
              <h5 className='route-city-text'>Санкт-Петербург</h5>
              <p className='route-station-text'>Курский вокзал</p>
            </div>
            <div className='route-to'>
              <h5 className='route-city-text'>Самара</h5>
              <p className='route-station-text'>Московский вокзал</p>
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
              <p className='price-start-number'>3 500</p>
              <span className='sign-rub'></span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
