import React, { useState } from 'react';
import '../styles/coaches.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import CoachesType from './CoachesType';

export default function ListCoaches() {
  const { coaches } = useSelector((state) => state.sliceGetSeats);
  const { route } = useSelector((state) => state.sliceChoice);
  let navigate = useNavigate();
  const [types, setTypes] = useState([]);

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
          classes.push(first);
        };
        if (coaches[i].coach.class_type === 'second') {
          second.push(coaches[i]);
          classes.push(second);
        };
        if (coaches[i].coach.class_type === 'third') {
          third.push(coaches[i]);
          classes.push(third);
        };
        if (coaches[i].coach.class_type === 'fourth') {
          fourth.push(coaches[i]);
          classes.push(fourth);
        };
      };
      setTypes(classes);
    };
  }, [coaches]);

  if (!route || !coaches) {
    return () => navigate('/route');
  };

  return (
    <div className='coaches'>
      <h3 className='coaches-title'>выбор мест</h3>

      {types.map((el, i) => <CoachesType coaches={el} route={route} classStyle={i % 2 === 0 ? '-left' : '-right'} key={Math.random()}/>)}
      
      <button className='coach-button' type='button'>далее</button>
    </div>
  );
};
