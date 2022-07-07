/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Calendar from './Calendar';
import '../styles/filter.css';
import { useDispatch, useSelector } from 'react-redux';
import { choiceDateFrom, choiceDateTo } from '../store/sliceChoice';
import { addFilterPrices, addFilterSeats, addFilterTimeFrom, addFilterTimeTo } from '../store/sliceFilter';
import { minMaxPrices } from '../utils/minMaxPrices';
import secondsToTime from '../utils/secondsToTime';

export default function FilterRoute() {
  const { fromDate, toDate } = useSelector((state) => state.sliceChoice);
  const { currentRoutes } = useSelector((state) => state.sliceFilter);
  const dispatch = useDispatch();

  const [hidden, setHidden] = useState({
    from: 'none',
    to: 'none'
  });
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
    there: true,
    back: true
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

  let { maxPrice, minPrice } = minMaxPrices(currentRoutes);
  const maxThereDeparture = 86400;
  const minThereDeparture = 0;
  const maxThereArrival = 86400;
  const minThereArrival = 0;
  const maxBackDeparture = 86400;
  const minBackDeparture = 0;
  const maxBackArrival = 86400;
  const minBackArrival = 0;

  useEffect(() => {
    if (currentRoutes && currentRoutes.length > 0) {
      const prices = minMaxPrices(currentRoutes);
      setPrice({
        start: prices.minPrice,
        end: prices.maxPrice
      });
    };
  }, [currentRoutes]);

  useEffect(() => {
    dispatch(addFilterPrices({
        start: price.start,
        end: price.end
      }));
  }, [price]);

  useEffect(() => {
      dispatch(addFilterSeats(check));
  }, [check]);

  useEffect(() => {
    dispatch(addFilterTimeFrom({
      thereDeparture,
      thereArrival
    }));
  }, [thereDeparture, thereArrival]);

  useEffect(() => {
    dispatch(addFilterTimeTo({
      backDeparture,
      backArrival
    }));
  }, [backDeparture, backArrival]);

  function inputDateFrom(ev) {
    dispatch(choiceDateFrom(ev.target.value));
  };

  function inputDateTo(ev) {
    dispatch(choiceDateTo(ev.target.value));
  };

  function getCalendarFrom() {
    if (hidden.from === 'none') {
      setHidden({...hidden, from: 'filter-calendar-from', to: 'none'});
    } else {
      setHidden({...hidden, from: 'none'});
    };
  };

  function getCalendarTo() {
    if (hidden.to === 'none') {
      setHidden({...hidden, to: 'filter-calendar-to', from: 'none'});
    } else {
      setHidden({...hidden, to: 'none'});
    };
  };

  function getDate(choiceDate) {
    if (hidden.from === 'filter-calendar-from') {
      dispatch(choiceDateFrom(choiceDate));
      setHidden({...hidden, from: 'none'});
    };

    if (hidden.to === 'filter-calendar-to') {
      dispatch(choiceDateTo(choiceDate));
      setHidden({...hidden, to: 'none'});
    };
  };

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
      setThereDeparture({...thereDeparture, start: Number(ev.target.value)});
    };
  };

  function changeThereDepartureEnd(ev) {
    if (Number(ev.target.value) >= thereDeparture.start) {
      setThereDeparture({...thereDeparture, end: Number(ev.target.value)});
    };
  };

  function changeThereArrivalStart(ev) {
    if (Number(ev.target.value) <= thereArrival.end) {
      setThereArrival({...thereArrival, start: Number(ev.target.value)});
    };
  };

  function changeThereArrivalEnd(ev) {
    if (Number(ev.target.value) >= thereArrival.start) {
      setThereArrival({...thereArrival, end: Number(ev.target.value)});
    };
  };

  function changeBackDepartureStart(ev) {
    if (Number(ev.target.value) <= backDeparture.end) {
      setBackDeparture({...backDeparture, start: Number(ev.target.value)});
    };
  };

  function changeBackDepartureEnd(ev) {
    if (Number(ev.target.value) >= backDeparture.start) {
      setBackDeparture({...backDeparture, end: Number(ev.target.value)});
    };
  };

  function changeBackArrivalStart(ev) {
    if (Number(ev.target.value) <= backArrival.end) {
      setBackArrival({...backArrival, start: Number(ev.target.value)});
    };
  };

  function changeBackArrivalEnd(ev) {
    if (Number(ev.target.value) >= backArrival.start) {
      setBackArrival({...backArrival, end: Number(ev.target.value)});
    };
  };

  function leftValue(max, min, start) {
    return (100 / (max - min)) * (start - min);
  };
  
  function rightValue(max, min, end) {
    return (100 / (max - min)) * ((max - min) - (end - min));
  };
  
  function startValue(max, min, start) {
    return 260 * (((100 / (max - min)) * (start - min)) / 100);
  };
  
  function endValue(max, min, end) {
    return 260 * (((100 / (max - min)) * ((max - min) - (end - min))) / 100);
  };

  return (
    <div className='filter-route'>

      <div className='filter-date'>
        <div className='filter-date-from'>
          <h4 className='filter-date-title'>Дата поездки</h4>
          <input type="text" placeholder="ДД.ММ.ГГ"
            value={fromDate}
            onClick={getCalendarFrom}
            onChange={inputDateFrom}/>
          <Calendar none={hidden.from} getDate={getDate}/>
        </div>
        <div className='filter-date-to'>
          <h4 className='filter-date-title'>Дата вовращения</h4>
          <input type="text" placeholder="ДД.ММ.ГГ"
            value={toDate}
            onClick={getCalendarTo}
            onChange={inputDateTo}/>
          <Calendar none={hidden.to} getDate={getDate}/>
        </div>
      </div>
      <div className='filter-line'></div>

      <div className='filter-checkboxes'>
        <div className='checkbox-coupe'>
          <span className='coupe-img'></span>
          <p className='checkbox-text'>Купе</p>
          <div className={`check-element check-${check.coupe ? 'true' : 'false'}`} onClick={() => setCheck({...check, coupe: !check.coupe})}>
            <input className='checkbox-input' type="checkbox" defaultChecked={check.coupe}/>
          </div>
        </div>
        <div className='checkbox-reserved-seat'>
          <span className='reserved-seat-img'></span>
          <p className='checkbox-text'>Плацкарт</p>
          <div className={`check-element check-${check.reserved ? 'true' : 'false'}`} onClick={() => setCheck({...check, reserved: !check.reserved})}>
            <input className='checkbox-input' type="checkbox" defaultChecked={check.reserved}/>
          </div>
        </div>
        <div className='checkbox-seated'>
          <span className='seated-img'></span>
          <p className='checkbox-text'>Сидячий</p>
          <div className={`check-element check-${check.seated ? 'true' : 'false'}`} onClick={() => setCheck({...check, seated: !check.seated})}>
            <input className='checkbox-input' type="checkbox" defaultChecked={check.seated}/>
          </div>
        </div>
        <div className='checkbox-lux'>
          <span className='lux-img'></span>
          <p className='checkbox-text'>Люкс</p>
          <div className={`check-element check-${check.lux ? 'true' : 'false'}`} onClick={() => setCheck({...check, lux: !check.lux})}>
            <input className='checkbox-input' type="checkbox" defaultChecked={check.lux}/>
          </div>
        </div>
        <div className='checkbox-wifi'>
          <span className='wifi-img'></span>
          <p className='checkbox-text'>Wi-Fi</p>
          <div className={`check-element check-${check.wifi ? 'true' : 'false'}`} onClick={() => setCheck({...check, wifi: !check.wifi})}>
            <input className='checkbox-input' type="checkbox" defaultChecked={check.wifi}/>
          </div>
        </div>
        <div className='checkbox-express'>
          <span className='express-img'></span>
          <p className='checkbox-text'>Экспресс</p>
          <div className={`check-element check-${check.express ? 'true' : 'false'}`} onClick={() => setCheck({...check, express: !check.express})}>
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
              <div className='range-line-body' style={{
                left: `${leftValue(maxPrice, minPrice, price.start)}%`,
                right: `${rightValue(maxPrice, minPrice, price.end)}%`
              }}></div>
            </div>
          </div>
          <div className='price-range-number'>
            <p className='price-min'>{minPrice}</p>
            <p className='price-start' style={{
              marginLeft: `${startValue(maxPrice, minPrice, price.start)}px`
            }}>{price.start}</p>
            <p className='price-end' style={{
              marginRight: `${endValue(maxPrice, minPrice, price.end)}px`
            }}>{price.end}</p>
            <p className='price-max'>{maxPrice}</p>
          </div>
        </div>
      </div>

      <div className='filter-line'></div>

      <div className='filter-time-there'>
        <div className='filter-time-title'>
          <span className='filter-time-there-img'></span>
          <h4 className='filter-time-text'>Туда</h4>
          <span className={
            (!none.there && 'filter-time-close-up') || (none.there && 'filter-time-close-down')
            } onClick={() => setNone({...none, there: !none.there})}></span>
        </div>

        <div className={none.there ? 'none' : `${none.there}`}>
          <div className='time-range-there'>
            <div className='time-range-text'>
              <p>Время отбытия</p>
            </div>
            <div className='range-input-times'>
              <input className='range-input-time-in' type="range"
                min={minThereDeparture}
                max={maxThereDeparture}
                value={thereDeparture.start}
                onChange={changeThereDepartureStart}/>
              <input className='range-input-time-out' type="range"
                min={minThereDeparture}
                max={maxThereDeparture}
                value={thereDeparture.end}
                onChange={changeThereDepartureEnd}/>
              <div className='range-time-line'>
                <div className='range-time-line-body' style={{
                  left: `${leftValue(maxThereDeparture, minThereDeparture, thereDeparture.start)}%`,
                  right: `${rightValue(maxThereDeparture, minThereDeparture, thereDeparture.end)}%`
                }}></div>
              </div>
            </div>
            <div className='time-range-number'>
              <p className='time-min'>{secondsToTime(minThereDeparture)}</p>
              <p className='time-start' style={{
                marginLeft: `${startValue(maxThereDeparture, minThereDeparture, thereDeparture.start)}px`
              }}>{secondsToTime(thereDeparture.start)}</p>
              <p className='time-end' style={{
                marginRight: `${endValue(maxThereDeparture, minThereDeparture, thereDeparture.end)}px`
              }}>{secondsToTime(thereDeparture.end)}</p>
              <p className='time-max'>{secondsToTime(maxThereDeparture)}</p>
            </div>
          </div>

          <div className='time-range-there'>
            <div className='time-range-text'>
              <p className='text-arrival'>Время прибытия</p>
            </div>
            <div className='range-input-times'>
              <input className='range-input-time-in' type="range"
                min={minThereArrival}
                max={maxThereArrival}
                value={thereArrival.start}
                onChange={changeThereArrivalStart}/>
              <input className='range-input-time-out' type="range"
                min={minThereArrival}
                max={maxThereArrival}
                value={thereArrival.end}
                onChange={changeThereArrivalEnd}/>
              <div className='range-time-line'>
                <div className='range-time-line-body' style={{
                  left: `${leftValue(maxThereArrival, minThereArrival, thereArrival.start)}%`,
                  right: `${rightValue(maxThereArrival, minThereArrival, thereArrival.end)}%`
                  }}></div>
              </div>
            </div>
            <div className='time-range-number'>
              <p className='time-min'>{secondsToTime(minThereArrival)}</p>
              <p className='time-start' style={{
                marginLeft: `${startValue(maxThereArrival, minThereArrival, thereArrival.start)}px`
              }}>{secondsToTime(thereArrival.start)}</p>
              <p className='time-end' style={{
                marginRight: `${endValue(maxThereArrival, minThereArrival, thereArrival.end)}px`
              }}>{secondsToTime(thereArrival.end)}</p>
              <p className='time-max'>{secondsToTime(maxThereArrival)}</p>
            </div>
          </div>
        </div>
      </div>

      <div className='filter-line'></div>

      <div className='filter-time-back'>
        <div className='filter-time-title'>
          <span className='filter-time-back-img'></span>
          <h4 className='filter-time-text'>Обратно</h4>
          <span className={
            (!none.back && 'filter-time-close-up') || (none.back && 'filter-time-close-down')
          } onClick={() => setNone({...none, back: !none.back})}></span>
        </div>

        <div className={none.back ? 'none' : `${none.back}`}>
          <div className='time-range-back'>
            <div className='time-range-text'>
              <p>Время отбытия</p>
            </div>
            <div className='range-input-times'>
              <input className='range-input-time-in' type="range"
                min={minBackDeparture}
                max={maxBackDeparture}
                value={backDeparture.start}
                onChange={changeBackDepartureStart}/>
              <input className='range-input-time-out' type="range"
                min={minBackDeparture}
                max={maxBackDeparture}
                value={backDeparture.end}
                onChange={changeBackDepartureEnd}/>
              <div className='range-time-line'>
                <div className='range-time-line-body' style={{
                  left: `${leftValue(maxBackDeparture, minBackDeparture, backDeparture.start)}%`,
                  right: `${rightValue(maxBackDeparture, minBackDeparture, backDeparture.end)}%`
                }}></div>
              </div>
            </div>
            <div className='time-range-number'>
              <p className='time-min'>{secondsToTime(minBackDeparture)}</p>
              <p className='time-start' style={{
                marginLeft: `${startValue(maxBackDeparture, minBackDeparture, backDeparture.start)}px`
              }}>{secondsToTime(backDeparture.start)}</p>
              <p className='time-end' style={{
                marginRight: `${endValue(maxBackDeparture, minBackDeparture, backDeparture.end)}px`
              }}>{secondsToTime(backDeparture.end)}</p>
              <p className='time-max'>{secondsToTime(maxBackDeparture)}</p>
            </div>
          </div>

          <div className='time-range-back'>
            <div className='time-range-text'>
              <p className='text-arrival'>Время прибытия</p>
            </div>
            <div className='range-input-times'>
              <input className='range-input-time-in' type="range"
                min={minBackArrival}
                max={maxBackArrival}
                value={backArrival.start}
                onChange={changeBackArrivalStart}/>
              <input className='range-input-time-out' type="range"
                min={minBackArrival}
                max={maxBackArrival}
                value={backArrival.end}
                onChange={changeBackArrivalEnd}/>
              <div className='range-time-line'>
                <div className='range-time-line-body' style={{
                  left: `${leftValue(maxBackArrival, minBackArrival, backArrival.start)}%`,
                  right: `${rightValue(maxBackArrival, minBackArrival, backArrival.end)}%`
                }}></div>
              </div>
            </div>
            <div className='time-range-number'>
              <p className='time-min'>{secondsToTime(minBackArrival)}</p>
              <p className='time-start' style={{
                marginLeft: `${startValue(maxBackArrival, minBackArrival, backArrival.start)}px`
              }}>{secondsToTime(backArrival.start)}</p>
              <p className='time-end' style={{
                marginRight: `${endValue(maxBackArrival, minBackArrival, backArrival.end)}px`
              }}>{secondsToTime(backArrival.end)}</p>
              <p className='time-max'>{secondsToTime(maxBackArrival)}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
