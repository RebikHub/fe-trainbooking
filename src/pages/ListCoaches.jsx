import React, { useState } from 'react';
import '../styles/coaches.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import CoachesType from '../components/CoachesType';
import { totalChoiceRoute } from '../store/slicePrice';
import { clearStepAll } from '../store/sliceProgressLine';
import coachClassTypes from '../utils/coachClassTypes';

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
  const { totalSeatsAge, totalSeatsChild, totalAmountTickets } = useSelector((state) => state.slicePrice);

  useEffect(() => {
    if (!route || !coaches) {
      navigate('/route');
    };
  }, [coaches, navigate, route]);

  useEffect(() => {
    dispatch(clearStepAll());
  }, [dispatch]);

  useEffect(() => {
    const classes = coachClassTypes(coaches);
    setTypes(classes);
  }, [coaches]);

  useEffect(() => {
    if (totalAmountTickets === 0 && (totalSeatsAge !== 0 || totalSeatsChild !== 0)) {
      setButton({
        disabled: false,
        className: ''
      })
    } else {
      setButton({
        disabled: true,
        className: '-disable'
      });
    };
  }, [totalAmountTickets, totalSeatsAge, totalSeatsChild]);

  function toPassengers() {
    navigate('/route/passengers');
    dispatch(totalChoiceRoute());
  };

  return (
    <div className='coaches'>
      <h3 className='coaches-title'>выбор мест</h3>

      {types.map((el, i) =>  <CoachesType coaches={el} route={route} classStyle={i % 2 === 0 ? '-left' : '-right'} key={i}/>)}
      
      <button className={`coach-button${button.className}`} type='button' disabled={button.disabled} onClick={toPassengers}>далее</button>
    </div>
  );
};
