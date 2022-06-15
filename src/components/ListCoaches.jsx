import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/coaches.css';
import { useSelector } from 'react-redux';
import { dateFromAndTo, duration } from '../utils/trainDate';
import Coach from './Coach';
import { useEffect } from 'react';

export default function ListCoaches() {
  const { coaches } = useSelector((state) => state.sliceGetSeats);
  const { route } = useSelector((state) => state.sliceChoice);
  const [time, setTime] = useState({
    hours: '',
    mins: ''
  });
  const [type, setType] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false
  });
  let navigate = useNavigate();

  useEffect(() => {
    const time = duration(route.departure.duration);
    const timeArr = time.split(':');
    setTime({
      hours: timeArr[0],
      mins: timeArr[1]
    });
    let first, second, third, fourth;

    for (let e of coaches) {
      if (e.coach.class_type === 'first') {
        first = true;
      };
      if (e.coach.class_type === 'second') {
        second = true;
      };
      if (e.coach.class_type === 'third') {
        third = true;
      };
      if (e.coach.class_type === 'fourth') {
        fourth = true;
      };
    };
    
    setType({
      first,
      second,
      third,
      fourth
    });

  }, []);

  if (!route || !coaches) {
    return () => navigate('/route');
  };

  return (
    <div className='coaches'>
      <h3 className='coaches-title'>выбор мест</h3>

      <div className='coach'>
        <div className='choice-train'>
          <span className='choice-train-img'></span>
          <button className='choice-train-btn'>Выбрать другой поезд</button>
        </div>

        <div className='coach-train'>
          <div className='coach-train-route'>
            <span className='coach-train-img'></span>
            <div className='coach-train-desc'>
              <h5 className='train-desc-name'>{route.departure.train.name}</h5>
              <p className='train-desc-city'>{route.departure.from.city.name} &#8594;</p>
              <p className='train-desc-city'>{route.departure.to.city.name}</p>
            </div>
          </div>

          <div className='coach-direction-time'>
            <div className='coach-direction-city'>
              <h5 className='coach-time'>{dateFromAndTo(route.departure.from.datetime)}</h5>
              <p className='coach-direction-name'>{route.departure.from.city.name}</p>
              <p className='coach-direction-station'>{route.departure.from.city.railway_station_name} вокзал</p>
            </div>
            <div className='direction-arrow'></div>
            <div className='coach-direction-city'>
              <h5 className='coach-time'>{dateFromAndTo(route.departure.to.datetime)}</h5>
              <p className='coach-direction-name'>{route.departure.to.city.name}</p>
              <p className='coach-direction-station'>{route.departure.to.city.railway_station_name} вокзал</p>
            </div>
          </div>

          <div className='coach-duration'>
            <span className='coach-duration-img'></span>
            <div className='coach-duration-text'>
              <p>{time.hours} час.</p>
              <p>{time.mins} мин.</p>
            </div>
          </div>
        </div>

        <div className='amount-tickets'>
          <h4 className='amount-tickets-title'>Количество билетов</h4>
          <div className='tickets-age'>
            <div className='tickets-age-inputs'>
              <input className='tickets-age-input' type="text" placeholder='Взрослых - 2'/>
              <p className='tickets-adults-desc'>Можно добавить еще 3 пассажиров</p>
            </div>

            <div className='tickets-age-inputs'>
              <input className='tickets-age-input' type="text" placeholder='Детских - 1'/>
              <p className='tickets-adults-desc'>Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле 
                в среднем на 50-65%</p>
            </div>

            <div className='tickets-age-inputs'>
              <input className='tickets-age-input' type="text" placeholder='Детских &#171;без места&#187; - 0'/>
              <p className='tickets-adults-desc'></p>
            </div>
          </div>
        </div>

        <div className='coaches-types'>
          <h4 className='coach-type-title'>Тип вагона</h4>
          <div className='coach-types'>
            <div className='coach-type'>
              <span className={!type.fourth ? 'type-fourth-img' : 'type-fourth-img-active'}></span>
              <p className={!type.fourth ? 'type-text' : 'type-text-active'}>Сидячий</p>
            </div>
            <div className='coach-type'>
              <span className={!type.third ? 'type-third-img' : 'type-third-img-active'}></span>
              <p className={!type.third ? 'type-text' : 'type-text-active'}>Плацкарт</p>
            </div>
            <div className='coach-type'>
              <span className={!type.second ? 'type-second-img' : 'type-second-img-active'}></span>
              <p className={!type.second ? 'type-text' : 'type-text-active'}>Купе</p>
            </div>
            <div className='coach-type'>
              <span className={!type.first ? 'type-first-img' : 'type-first-img-active'}></span>
              <p className={!type.first ? 'type-text' : 'type-text-active'}>Люкс</p>
            </div>
          </div>

          <div className='coaches-numbering'>
            <div className='coaches-numbers'>
              <p className='coaches-numbers-text'>Вагоны</p>
              {coaches.map((e,i) => <span className={(i + 1) % 2 !== 0 ? 'coaches-number-current' : 'coaches-number-text'} key={e.coach._id}>{e.coach.name}</span>)}
            </div>
            <p className='coaches-numbers-text'>Нумерация вагонов начинается с головы поезда</p>
          </div>

          {coaches.map((el, i) => <Coach
            classStyle={(coaches.length - 1) === i ? '' : 'coach-description'}
            coach={el}
            key={el.coach._id}/>)}
        </div>
      </div>
      
      <button className='coach-button' type='button'>далее</button>
    </div>
  );
};
