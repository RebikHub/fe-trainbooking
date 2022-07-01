import React, { useState } from 'react';
import '../styles/passenger.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Passenger from './Passenger';
import { useEffect } from 'react';
import { currentStepTwo } from '../store/sliceProgressLine';

export default function ListPassengers() {
  const { totalSeatsAge, totalSeatsChild } = useSelector((state) => state.slicePrice);
  const { passengers } = useSelector((state) => state.slicePassengers);
  const [amountPassengers, setAmountPassengers] = useState(totalSeatsAge + totalSeatsChild);
  const [addComponents, setAddComponents] = useState([]);
  const [agesPassengers, setAgesPassengers] = useState({
    age: totalSeatsAge,
    child: totalSeatsChild
  });
  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentStepTwo());
  }, []);

  useEffect(() => {
    console.log(passengers);
    let age = 0;
    let child = 0;
    passengers.map((el) => {
      if (el.passAges === 'Взрослый') {
        age += 1;
      };
  
      if (el.passAges === 'Детский') {
        child += 1;
      };

      return el;
    });

    setAgesPassengers({
      age: totalSeatsAge - age,
      child: totalSeatsChild - child
    });
  }, [passengers]);

  function addPassenger() {
    if (amountPassengers >= 1) {
      setAmountPassengers((prev) => prev -= 1);
      setAddComponents([...addComponents, 1]);
    };
  };

  function nextStepToOrder() {
    console.log(agesPassengers);
    if (agesPassengers.age === 0 && agesPassengers.child === 0) {
      navigate('/route/payment');
    };
  };

  return (
    <div className='list-passengers'>
      {addComponents.map((e, i) => <Passenger
        addPassenger={addPassenger}
        agesPassengers={agesPassengers}
        num={e + i}
        key={e + i}/>)}
      <div className='add-passengers' onClick={addPassenger}>
        <h4 className='add-passenger-title'>Добавить пассажира</h4>
        <span className='add-passenger-img'></span>
      </div>
      <button className={
        agesPassengers.age === 0 && agesPassengers.child === 0 ?
        'list-passenger-btn-ok' : 'list-passenger-btn'}
        type='button'
        onClick={nextStepToOrder}>Далее</button>
    </div>
  );
};
