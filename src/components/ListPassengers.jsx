import React, { useState } from 'react';
import '../styles/passenger.css';
import { useDispatch, useSelector } from 'react-redux';
import Passenger from './Passenger';

export default function ListPassengers() {
  const { totalSeatsAge, totalSeatsChild } = useSelector((state) => state.slicePrice);
  const [amountPassengers, setPassengers] = useState(totalSeatsAge + totalSeatsChild);
  const [addComponents, setAddComponents] = useState([]);
  const [agesPassengers, setAgesPassengers] = useState({
    age: totalSeatsAge,
    child: totalSeatsChild
  });

  function addPassenger() {
    if (amountPassengers >= 1) {
      setPassengers((prev) => prev -= 1);
      setAddComponents([...addComponents, 1]);
    };

    console.log(amountPassengers);
  };

  function changeAmountAgesPass(ages) {
    setAgesPassengers(ages);
  };

  return (
    <div className='list-passengers'>
      {addComponents.map((e, i) => <Passenger
        addPassenger={addPassenger}
        num={e + i}
        agesPassengers={agesPassengers}
        changeAmountAgesPass={changeAmountAgesPass}
        key={e + i}/>)}
      <div className='add-passengers' onClick={addPassenger}>
        <h4 className='add-passenger-title'>Добавить пассажира</h4>
        <span className='add-passenger-img'></span>
      </div>
      <button className='list-passenger-btn' type='button'>Далее</button>
    </div>
  );
};
