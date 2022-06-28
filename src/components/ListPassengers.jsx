import React, { useState } from 'react';
import '../styles/passenger.css';
import { useDispatch, useSelector } from 'react-redux';
import Passenger from './Passenger';

export default function ListPassengers() {
  const { notice, totalSeatsAge, totalSeatsChild, totalPriceAll } = useSelector((state) => state.slicePrice);
  const [amountPassengers, setPassengers] = useState(totalSeatsAge + totalSeatsChild);
  const [addComponents, setAddComponents] = useState([]);

  function addPassenger() {
    if (amountPassengers >= 1) {
      setPassengers((prev) => prev -= 1);
      setAddComponents([...addComponents, 1]);
    };

    console.log(amountPassengers);
  };

  return (
    <div className='list-passengers'>
      {addComponents.map((e) => <Passenger addPassenger={addPassenger}/>)}
      <div className='add-passengers' onClick={addPassenger}>
        <h4 className='add-passenger-title'>Добавить пассажира</h4>
        <span className='add-passenger-img'></span>
      </div>
      <button className='list-passenger-btn' type='button'>Далее</button>
    </div>
  );
};
