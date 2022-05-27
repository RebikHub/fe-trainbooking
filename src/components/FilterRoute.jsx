import React from 'react';
import '../styles/filter.css';

export default function FilterRoute() {
  return (
    <div className='filter-route'>

      <div className='filter-date'>
        <div className='filter-date-from'>
          <h4 className='filter-date-title'>Дата поездки</h4>
          <input type="text" placeholder="ДД.ММ.ГГ"/>
        </div>
        <div className='filter-date-to'>
          <h4 className='filter-date-title'>Дата вовращения</h4>
          <input type="text" placeholder="ДД.ММ.ГГ"/>
        </div>
        <div className='filter-line'></div>
      </div>

      <div className='filter-checkboxes'>
        <div className='checkbox-coupe'>
          <span className='coupe-img'></span>
          <p>Купе</p>
          <input type="checkbox" />
        </div>
        <div className='checkbox-reserved-seat'>
          <span className='reserved-seat-img'></span>
          <p>Плацкарт</p>
          <input type="checkbox" />
        </div>
        <div className='checkbox-seated'>
          <span className='seated-img'></span>
          <p>Сидячий</p>
          <input type="checkbox" />
        </div>
        <div className='checkbox-lux'>
          <span className='lux-img'></span>
          <p>Люкс</p>
          <input type="checkbox" />
        </div>
        <div className='checkbox-wifi'>
          <span className='wifi-img'></span>
          <p>Wi-Fi</p>
          <input type="checkbox" />
        </div>
        <div className='checkbox-express'>
          <span className='express-img'></span>
          <p>Экспресс</p>
          <input type="checkbox" />
        </div>
        <div className='filter-line'></div>
      </div>

      <div className='filter-price'>
        <h4 className='filter-price-title'>Стоимость</h4>
        <div className='price-range'>
          <div className='price-range-text'>
            <p>от</p>
            <p>до</p>
          </div>
          <input className='range-input-in' type="range" min='0' max='7000' style={{transform: 'rotate(180deg)'}} />
          <input className='range-input-out' type="range" min='0' max='7000'  />
          <div className='price-range-number'>
            <p>0</p>
            <p>7000</p>
          </div>
        </div>
        <div className='filter-line'></div>
      </div>

      <div className='filter-time-there'>
        <div className='filter-time-title'>
          <span className='filter-time-there-img'></span>
          <h4 className='filter-time-title'>Туда</h4>
          <span className='filter-time-close'></span>
        </div>

        <div className='time-range-there'>
          <div className='time-range-text'>
            <p>Время отбытия</p>
          </div>
          <input className='range-input-in' type="range" min='0:00' max='24:00' style={{transform: 'rotate(180deg)'}} />
          <input className='range-input-out' type="range" min='0:00' max='24:00'  />
          <div className='time-range-number'>
            <p>0:00</p>
            <p>24:00</p>
          </div>
        </div>

        <div className='time-range-there'>
          <div className='time-range-text'>
            <p>Время прибытия</p>
          </div>
          <input className='range-input-in' type="range" min='0:00' max='24:00' style={{transform: 'rotate(180deg)'}} />
          <input className='range-input-out' type="range" min='0:00' max='24:00'  />
          <div className='time-range-number'>
            <p>0:00</p>
            <p>24:00</p>
          </div>
        </div>
        <div className='filter-line'></div>
      </div>

      <div className='filter-time-back'>
        <div className='filter-time-title'>
          <span className='filter-time-back-img'></span>
          <h4 className='filter-time-title'>Обратно</h4>
          <span className='filter-time-close'></span>
        </div>

        <div className='time-range-back'>
          <div className='time-range-text'>
            <p>Время отбытия</p>
          </div>
          <input className='range-input-in' type="range" min='0:00' max='24:00' style={{transform: 'rotate(180deg)'}} />
          <input className='range-input-out' type="range" min='0:00' max='24:00'  />
          <div className='time-range-number'>
            <p>0:00</p>
            <p>24:00</p>
          </div>
        </div>

        <div className='time-range-back'>
          <div className='time-range-text'>
            <p>Время прибытия</p>
          </div>
          <input className='range-input-in' type="range" min='0:00' max='24:00' style={{transform: 'rotate(180deg)'}} />
          <input className='range-input-out' type="range" min='0:00' max='24:00'  />
          <div className='time-range-number'>
            <p>0:00</p>
            <p>24:00</p>
          </div>
        </div>

      </div>

    </div>
  )
}
