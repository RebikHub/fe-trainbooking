/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/coaches.css';
import { useDispatch, useSelector } from 'react-redux';
import { dateFromAndTo, duration } from '../utils/trainDate';
import Coach from './Coach';
import { useEffect } from 'react';
import { clearAllFiltering } from '../store/sliceFilter';
import { changeAgeTickets, changeChildTickets, changeChildWithoutTickets, clearAllPrices, clearTotalPrice } from '../store/slicePrice';

export default function CoachesType({route, coaches, classStyle}) {
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
  const [valueAges, setValueAges] = useState(0);
  const [valueChild, setValueChild] = useState(0);
  const [valueChildWithout, setValueChildWithout] = useState(0);
  const { firstClass, secondClass, thirdClass, fourthClass } = useSelector((state) => state.slicePrice);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    const time = duration(route.departure.duration);
    const timeArr = time.split(':');
    setTime({
      hours: timeArr[0],
      mins: timeArr[1]
    });
    const objTypes = {
      first: false,
      second: false,
      third: false,
      fourth: false
    };

    for (let e of coaches) {
      if (e.coach.class_type === 'first') {
        objTypes.first = true;
      };
      if (e.coach.class_type === 'second') {
        objTypes.second = true;
      };
      if (e.coach.class_type === 'third') {
        objTypes.third = true;
      };
      if (e.coach.class_type === 'fourth') {
        objTypes.fourth = true;
      };
    };
    
    setType(objTypes);
  }, []);

  useEffect(() => {
    if (valueAges < valueChildWithout) {
      setValueChildWithout(valueAges);
    };
  }, [valueAges]);

  function inputAges(ev) {
    if (/^[0-5]$/.test(Number(ev.target.value))) {
      dispatch(changeAgeTickets({
        classType: coaches[0].coach.class_type,
        seatsAge: Number(ev.target.value)
      }));
      setValueAges(ev.target.value);
    };
  };

  function inputChild(ev) {
    if (/^[0-5]$/.test(Number(ev.target.value))) {
      dispatch(changeChildTickets({
        classType: coaches[0].coach.class_type,
        seatsChild: Number(ev.target.value)
      }));
      setValueChild(ev.target.value);
    };
  };

  function inputChildWithout(ev) {
    if (Number(ev.target.value) >= 0 && Number(ev.target.value) <= valueAges) {
      dispatch(changeChildWithoutTickets(Number(ev.target.value)));
      setValueChildWithout(ev.target.value);
    };
  };

  function backToRoutes() {
    navigate('/route');
    dispatch(clearAllPrices());
    dispatch(clearTotalPrice());
    dispatch(clearAllFiltering());
  };

  return (
      <div className='coach'>

        <div className={`choice-train${classStyle}`}>
          <span className={`choice-train-img${classStyle}`}></span>
          <button className='choice-train-btn' type='button' onClick={backToRoutes}>?????????????? ???????????? ??????????</button>
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
              <p className='coach-direction-station'>{route.departure.from.city.railway_station_name} ????????????</p>
            </div>
            <div className='direction-arrow'></div>
            <div className='coach-direction-city'>
              <h5 className='coach-time'>{dateFromAndTo(route.departure.to.datetime)}</h5>
              <p className='coach-direction-name'>{route.departure.to.city.name}</p>
              <p className='coach-direction-station'>{route.departure.to.city.railway_station_name} ????????????</p>
            </div>
          </div>

          <div className='coach-duration'>
            <span className='coach-duration-img'></span>
            <div className='coach-duration-text'>
              <p>{time.hours} ??????.</p>
              <p>{time.mins} ??????.</p>
            </div>
          </div>
        </div>

        <div className='amount-tickets'>
          <h4 className='amount-tickets-title'>???????????????????? ??????????????</h4>
          <div className='tickets-age'>
            <div className='tickets-age-inputs'>
              <input className='tickets-age-input' type="text" placeholder={`???????????????? - ${valueAges}`}
                value={''}
                onChange={inputAges}/>
              <p className='tickets-adults-desc'>?????????? ???????????????? ?????? {5 - valueAges} ????????????????????</p>
            </div>

            <div className='tickets-age-inputs'>
              <input className='tickets-age-input' type="text" placeholder={`?????????????? - ${valueChild}`}
                value={''}
                onChange={inputChild}/>
              <p className='tickets-adults-desc'>?????????? ???????????????? ?????? {5 - valueChild} ?????????? ???? 10 ??????. ???????? ?????????? ?? ????????????, ?????? ?? ????????????????, ???? ?????????????? 
                ?? ?????????????? ???? 50-65%</p>
            </div>
            <div className='tickets-age-inputs'>
              <input className='tickets-age-input' type="text" placeholder={`?????????????? \u00AB?????? ??????????\u00BB - ${valueChildWithout}`}
                value={''}
                onChange={inputChildWithout}/>
              <p className='tickets-adults-desc'>???????????????? ???????????? ?????? ?????????????????? ??????????. ?????????? ???????????????? ?????? {valueAges - valueChildWithout} ??????????.</p>
            </div>
          </div>
        </div>

        <div className='coaches-types'>
          <h4 className='coach-type-title'>?????? ????????????</h4>
          <div className='coach-types'>
            <div className='coach-type'>
              <span className={!type.fourth ? 'type-fourth-img' : 'type-fourth-img-active'}></span>
              <p className={!type.fourth ? 'type-text' : 'type-text-active'}>??????????????</p>
            </div>
            <div className='coach-type'>
              <span className={!type.third ? 'type-third-img' : 'type-third-img-active'}></span>
              <p className={!type.third ? 'type-text' : 'type-text-active'}>????????????????</p>
            </div>
            <div className='coach-type'>
              <span className={!type.second ? 'type-second-img' : 'type-second-img-active'}></span>
              <p className={!type.second ? 'type-text' : 'type-text-active'}>????????</p>
            </div>
            <div className='coach-type'>
              <span className={!type.first ? 'type-first-img' : 'type-first-img-active'}></span>
              <p className={!type.first ? 'type-text' : 'type-text-active'}>????????</p>
            </div>
          </div>

          <div className='coaches-numbering'>
            <div className='coaches-numbers'>
              <p className='coaches-numbers-text'>????????????</p>
              {coaches.map((e,i) => <span className={(i + 1) % 2 !== 0 ? 'coaches-number-current' : 'coaches-number-text'} key={e.coach._id}>{e.coach.name}</span>)}
            </div>
            <p className='coaches-numbers-text'>?????????????????? ?????????????? ???????????????????? ?? ???????????? ????????????</p>
          </div>

          {coaches.map((el, i) => <Coach
            classStyle={(coaches.length - 1) === i ? '' : 'coach-description'}
            coach={el}
            key={el.coach._id}/>)}
        </div>
        <div className={
          coaches[0].coach.class_type === 'first' ? firstClass.totalPrice === 0 ? 'none' :'total-price' :
          coaches[0].coach.class_type === 'second' ? secondClass.totalPrice === 0 ? 'none' :'total-price' :
          coaches[0].coach.class_type === 'third' ? thirdClass.totalPrice === 0 ? 'none' :'total-price' :
          fourthClass.totalPrice === 0 ? 'none' :'total-price'
        }>{
          coaches[0].coach.class_type === 'first' ? firstClass.totalPrice :
          coaches[0].coach.class_type === 'second' ? secondClass.totalPrice :
          coaches[0].coach.class_type === 'third' ? thirdClass.totalPrice :
          fourthClass.totalPrice
        } <span className='sign-rub'></span></div>
      </div>
  );
};
