import React, { useState } from 'react';
import '../styles/coaches.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import CoachesType from '../components/CoachesType';
import { totalChoiceRoute } from '../store/slicePrice';
import { clearStepAll } from '../store/sliceProgressLine';
import coachClassTypes from '../utils/coachClassTypes';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { ISeats } from '../interfaces/interfaces';

type StateButton = {
  disabled: boolean,
  className: string
}

export default function ListCoaches() {
  const { coaches } = useAppSelector((state) => state.sliceGetSeats);
  const { route } = useAppSelector((state) => state.sliceChoice);
  const navigate = useNavigate();
  const [types, setTypes] = useState<ISeats[][]>([]);
  const [button, setButton] = useState<StateButton>({
    disabled: true,
    className: '-disable'
  });
  const dispatch = useAppDispatch();
  const { totalSeatsAge, totalSeatsChild, totalAmountTickets } = useAppSelector((state) => state.slicePrice);

  useEffect(() => {
    if (!route || !coaches) {
      navigate('/route');
    };
  }, [coaches, navigate, route]);

  useEffect(() => {
    dispatch(clearStepAll());
  }, [dispatch]);

  useEffect(() => {
    console.log(coaches);
    if (coaches) {
      setTypes(coachClassTypes(coaches));
    }
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
