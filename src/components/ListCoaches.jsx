import React, { useState } from 'react';
import '../styles/coaches.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import CoachesType from './CoachesType';
import Notice from './Notice';
import { totalChoiceRoute } from '../store/slicePrice';
import { clearStepAll } from '../store/sliceProgressLine';

export default function ListCoaches() {
  const { coaches } = useSelector((state) => state.sliceGetSeats);
  const { route } = useSelector((state) => state.sliceChoice);
  let navigate = useNavigate();
  const [types, setTypes] = useState([]);
  const [button, setButton] = useState({
    disabled: true,
    className: '-disable'
  });
  const dispatch = useDispatch();
  const { totalSeatsAge, totalSeatsChild, totalPriceAll } = useSelector((state) => state.slicePrice);

  useEffect(() => {
    dispatch(clearStepAll());
  }, []);

  useEffect(() => {
    const classes = [];
    const first = [];
    const second = [];
    const third = [];
    const fourth = [];

    if (coaches) {
      for (let i = 0; i < coaches.length; i += 1) {
        if (coaches[i].coach.class_type === 'first') {
          first.push(coaches[i]);
        };
        if (coaches[i].coach.class_type === 'second') {
          second.push(coaches[i]);
        };
        if (coaches[i].coach.class_type === 'third') {
          third.push(coaches[i]);
        };
        if (coaches[i].coach.class_type === 'fourth') {
          fourth.push(coaches[i]);
        };
      };

      if (first.length > 0) {
        classes.push(first);
      };
      if (second.length > 0) {
        classes.push(second);
      };
      if (third.length > 0) {
        classes.push(third);
      };
      if (fourth.length > 0) {
        classes.push(fourth);
      };

      setTypes(classes);
    };
  }, [coaches]);

  useEffect(() => {
    if (totalPriceAll !== 0 && (totalSeatsAge !== 0 || totalSeatsChild !== 0)) {
      setButton({
        disabled: false,
        className: ''
      });
    }
  }, [totalPriceAll, totalSeatsAge, totalSeatsChild]);

  function toPassengers() {
    navigate('/route/passengers');
    dispatch(totalChoiceRoute());
  };

  if (!route || !coaches) {
    return () => navigate('/route');
  };

  return (
    <div className='coaches'>
      <h3 className='coaches-title'>выбор мест</h3>

      <Notice text={'Укажите количество билетов и выберите места!'}/>

      {types.map((el, i) =>  <CoachesType coaches={el} route={route} classStyle={i % 2 === 0 ? '-left' : '-right'} key={i}/>)}
      
      <button className={`coach-button${button.className}`} type='button' disabled={button.disabled} onClick={toPassengers}>далее</button>
    </div>
  );
};
