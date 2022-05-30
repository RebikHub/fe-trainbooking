import React, { useState } from 'react';
import '../styles/filter.css';

export default function FilterRoute() {
  const [check, setCheck] = useState({
    coupe: false,
    reserved: false,
    seated: false,
    lux: false,
    wifi: false,
    express: false
  });
  const [price, setPrice] = useState({
    start: 0,
    end: 7000
  });

  const max = 7000;
  const min = 0;

  function changeStartPrice(ev) {
    if (Number(ev.target.value) <= price.end) {
      setPrice({...price, start: Number(ev.target.value)});
    };
  };

  function changeEndPrice(ev) {
    if (Number(ev.target.value) >= price.start) {
      setPrice({...price, end: Number(ev.target.value)});
    };
  };


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
      </div>

      <div className='filter-line'></div>

      <div className='filter-checkboxes'>
        <div className='checkbox-coupe'>
          <span className='coupe-img'></span>
          <p className='checkbox-text'>Купе</p>
          <div className={`check-element check-${check.coupe}`} onClick={() => setCheck({...check, coupe: !check.coupe})}>
            <input className='checkbox-input' type="checkbox" defaultChecked={check.coupe}/>
          </div>
        </div>
        <div className='checkbox-reserved-seat'>
          <span className='reserved-seat-img'></span>
          <p className='checkbox-text'>Плацкарт</p>
          <div className={`check-element check-${check.reserved}`} onClick={() => setCheck({...check, reserved: !check.reserved})}>
            <input className='checkbox-input' type="checkbox" defaultChecked={check.reserved}/>
          </div>
        </div>
        <div className='checkbox-seated'>
          <span className='seated-img'></span>
          <p className='checkbox-text'>Сидячий</p>
          <div className={`check-element check-${check.seated}`} onClick={() => setCheck({...check, seated: !check.seated})}>
            <input className='checkbox-input' type="checkbox" defaultChecked={check.seated}/>
          </div>
        </div>
        <div className='checkbox-lux'>
          <span className='lux-img'></span>
          <p className='checkbox-text'>Люкс</p>
          <div className={`check-element check-${check.lux}`} onClick={() => setCheck({...check, lux: !check.lux})}>
            <input className='checkbox-input' type="checkbox" defaultChecked={check.lux}/>
          </div>
        </div>
        <div className='checkbox-wifi'>
          <span className='wifi-img'></span>
          <p className='checkbox-text'>Wi-Fi</p>
          <div className={`check-element check-${check.wifi}`} onClick={() => setCheck({...check, wifi: !check.wifi})}>
            <input className='checkbox-input' type="checkbox" defaultChecked={check.wifi}/>
          </div>
        </div>
        <div className='checkbox-express'>
          <span className='express-img'></span>
          <p className='checkbox-text'>Экспресс</p>
          <div className={`check-element check-${check.express}`} onClick={() => setCheck({...check, express: !check.express})}>
            <input className='checkbox-input' type="checkbox" defaultChecked={check.express}/>
          </div>
        </div>
      </div>

      <div className='filter-line'></div>

      <div className='filter-price'>
        <h4 className='filter-price-title'>Стоимость</h4>
        <div className='price-range'>
          <div className='price-range-text'>
            <p>от</p>
            <p>до</p>
          </div>
          <div className='range-input'>
            <input className='range-input-in' type="range" min={min} max={max}
              value={price.start}
              onChange={changeStartPrice}/>
            <input className='range-input-out' type="range" min={min} max={max}
              value={price.end}
              onChange={changeEndPrice}/>
            <div className='range-line'>
              <div className='range-line-body' style={{left: `${(100 / (max - min)) * price.start}%`, right: `${(100 / (max - min)) * ((max - min) - price.end)}%`}}></div>
            </div>
          </div>
          <div className='price-range-number'>
            <p className='price-min'>{min}</p>
            <p className='price-start' style={{marginLeft: `${260 * (((100 / (max - min)) * price.start) / 100)}px`}}>{price.start}</p>
            <p className='price-end' style={{marginRight: `${260 * (((100 / (max - min)) * ((max - min) - price.end)) / 100)}px`}}>{price.end}</p>
            <p className='price-max'>{max}</p>
          </div>
        </div>
      </div>

      <div className='filter-line'></div>

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
      </div>

      <div className='filter-line'></div>

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
