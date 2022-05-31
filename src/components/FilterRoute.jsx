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
  const [none, setNone] = useState({
    there: false,
    back: false
  });

  const [thereDeparture, setThereDeparture] = useState({
    start: 0,
    end: 86400
  })

  const [thereArrival, setThereArrival] = useState({
    start: 0,
    end: 86400
  })

  const [backDeparture, setBackDeparture] = useState({
    start: 0,
    end: 86400
  })

  const [backArrival, setBackArrival] = useState({
    start: 0,
    end: 86400
  })

  const maxPrice = 7000;
  const minPrice = 0;
  const maxThereDeparture = 86400;
  const minThereDeparture = 0;
  const maxThereArrival = 86400;
  const minThereArrival = 0;
  const maxBackDeparture = 86400;
  const minBackDeparture = 0;
  const maxBackArrival = 86400;
  const minBackArrival = 0;

  function secondsToTime(sec) {
    let min = Math.floor(sec / 60);
    let hour = Math.floor(min/60);
    min -= (hour * 60);
    if (hour < 9) {
      hour = '0' + hour;
    };
    if (min < 9) {
      min = '0' + min;
    };
    
    return `${hour}:${min}`
  }

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

  function changeThereDepartureStart(ev) {
    if (Number(ev.target.value) <= thereDeparture.end) {
      setPrice({...thereDeparture, start: Number(ev.target.value)});
    };
  };

  function changeThereDepartureEnd(ev) {
    if (Number(ev.target.value) >= thereDeparture.start) {
      setPrice({...thereDeparture, end: Number(ev.target.value)});
    };
  };

  function changeThereArrivalStart(ev) {
    if (Number(ev.target.value) <= thereArrival.end) {
      setPrice({...thereArrival, start: Number(ev.target.value)});
    };
  };

  function changeThereArrivalEnd(ev) {
    if (Number(ev.target.value) >= thereArrival.start) {
      setPrice({...thereArrival, end: Number(ev.target.value)});
    };
  };

  function changeBackDepartureStart(ev) {
    if (Number(ev.target.value) <= backDeparture.end) {
      setPrice({...backDeparture, start: Number(ev.target.value)});
    };
  };

  function changeBackDepartureEnd(ev) {
    if (Number(ev.target.value) >= backDeparture.start) {
      setPrice({...backDeparture, end: Number(ev.target.value)});
    };
  };

  function changeBackArrivalStart(ev) {
    if (Number(ev.target.value) <= backArrival.end) {
      setPrice({...backArrival, start: Number(ev.target.value)});
    };
  };

  function changeBackArrivalEnd(ev) {
    if (Number(ev.target.value) >= backArrival.start) {
      setPrice({...backArrival, end: Number(ev.target.value)});
    };
  };

  function leftValue(max, min, start) {
    return (100 / (max - min)) * start;
  };

  function rightValue(max, min, end) {
    return (100 / (max - min)) * ((max - min) - end);
  };

  function startValue(max, min, start) {
    return 260 * (((100 / (max - min)) * start) / 100);
  }

  function endValue(max, min, end) {
    return 260 * (((100 / (max - min)) * ((max - min) - end)) / 100);
  }

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
            <input className='range-input-in' type="range" min={minPrice} max={maxPrice}
              value={price.start}
              onChange={changeStartPrice}/>
            <input className='range-input-out' type="range" min={minPrice} max={maxPrice}
              value={price.end}
              onChange={changeEndPrice}/>
            <div className='range-line'>
              <div className='range-line-body' style={{left: `${leftValue(maxPrice, minPrice, price.start)}%`, right: `${rightValue(maxPrice, minPrice, price.end)}%`}}></div>
            </div>
          </div>
          <div className='price-range-number'>
            <p className='price-min'>{minPrice}</p>
            <p className='price-start' style={{marginLeft: `${startValue(maxPrice, minPrice, price.start)}px`}}>{price.start}</p>
            <p className='price-end' style={{marginRight: `${endValue(maxPrice, minPrice, price.end)}px`}}>{price.end}</p>
            <p className='price-max'>{maxPrice}</p>
          </div>
        </div>
      </div>

      <div className='filter-line'></div>

      <div className='filter-time-there'>
        <div className='filter-time-title'>
          <span className='filter-time-there-img'></span>
          <h4 className='filter-time-text'>Туда</h4>
          <span className={(!none.there && 'filter-time-close-up') || (none.there && 'filter-time-close-down')} onClick={() => setNone({...none, there: !none.there})}></span>
        </div>

        <div className={none.there && 'none'}>
          <div className='time-range-there'>
            <div className='time-range-text'>
              <p>Время отбытия</p>
            </div>
            <div className='range-input-times'>
              <input className='range-input-time-in' type="range"
                min={secondsToTime(minThereDeparture)}
                max={secondsToTime(maxThereDeparture)}
                value={thereDeparture.start}
                onChange={changeThereDepartureStart}/>
              <input className='range-input-time-out' type="range"
                min={secondsToTime(minThereDeparture)}
                max={secondsToTime(maxThereDeparture)}
                value={thereDeparture.end}
                onChange={changeThereDepartureEnd}/>
              <div className='range-time-line'>
                <div className='range-time-line-body' style={{left: `${leftValue(maxThereDeparture, minThereDeparture, thereDeparture.start)}%`, right: `${rightValue(maxThereDeparture, minThereDeparture, thereDeparture.end)}%`}}></div>
              </div>
            </div>
            <div className='time-range-number'>
              <p>0:00</p>
              <p>24:00</p>
            </div>
          </div>

          <div className='time-range-there'>
            <div className='time-range-text'>
              <p className='text-arrival'>Время прибытия</p>
            </div>
            <div className='range-input-times'>
              <input className='range-input-time-in' type="range"
                min={secondsToTime(minThereArrival)}
                max={secondsToTime(maxThereArrival)}
                value={thereArrival.start}
                onChange={changeThereArrivalStart}/>
              <input className='range-input-time-out' type="range"
                min={secondsToTime(minThereArrival)}
                max={secondsToTime(maxThereArrival)}
                value={thereArrival.end}
                onChange={changeThereArrivalEnd}/>
              <div className='range-time-line'>
                <div className='range-time-line-body' style={{left: `${leftValue(maxThereDeparture, minThereDeparture, thereDeparture.start)}%`, right: `${rightValue(maxThereDeparture, minThereDeparture, thereDeparture.end)}%`}}></div>
              </div>
            </div>
            <div className='time-range-number'>
              <p>0:00</p>
              <p>24:00</p>
            </div>
          </div>
        </div>
      </div>

      <div className='filter-line'></div>

      <div className='filter-time-back'>
        <div className='filter-time-title'>
          <span className='filter-time-back-img'></span>
          <h4 className='filter-time-text'>Обратно</h4>
          <span className={(!none.back && 'filter-time-close-up') || (none.back && 'filter-time-close-down')} onClick={() => setNone({...none, back: !none.back})}></span>
        </div>

        <div className={none.back && 'none'}>
          <div className='time-range-back'>
            <div className='time-range-text'>
              <p>Время отбытия</p>
            </div>
            <div className='range-input-times'>
              <input className='range-input-time-in' type="range"
                min={secondsToTime(minBackDeparture)}
                max={secondsToTime(maxBackDeparture)}
                value={backDeparture.start}
                onChange={changeBackDepartureStart}/>
              <input className='range-input-time-out' type="range"
                min={secondsToTime(minBackDeparture)}
                max={secondsToTime(maxBackDeparture)}
                value={backDeparture.end}
                onChange={changeBackDepartureEnd}/>
              <div className='range-time-line'>
                <div className='range-time-line-body' style={{left: `${leftValue(maxThereDeparture, minThereDeparture, thereDeparture.start)}%`, right: `${rightValue(maxThereDeparture, minThereDeparture, thereDeparture.end)}%`}}></div>
              </div>
            </div>
            <div className='time-range-number'>
              <p>0:00</p>
              <p>24:00</p>
            </div>
          </div>

          <div className='time-range-back'>
            <div className='time-range-text'>
              <p className='text-arrival'>Время прибытия</p>
            </div>
            <div className='range-input-times'>
              <input className='range-input-time-in' type="range"
                min={secondsToTime(minBackArrival)}
                max={secondsToTime(maxBackArrival)}
                value={backArrival.start}
                onChange={changeBackArrivalStart}/>
              <input className='range-input-time-out' type="range"
                min={secondsToTime(minBackArrival)}
                max={secondsToTime(maxBackArrival)}
                value={backArrival.end}
                onChange={changeBackArrivalEnd}/>
              <div className='range-time-line'>
                <div className='range-time-line-body' style={{left: `${leftValue(maxThereDeparture, minThereDeparture, thereDeparture.start)}%`, right: `${rightValue(maxThereDeparture, minThereDeparture, thereDeparture.end)}%`}}></div>
              </div>
            </div>
            <div className='time-range-number'>
              <p>0:00</p>
              <p>24:00</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
