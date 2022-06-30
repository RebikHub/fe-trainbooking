import React, { useState } from 'react';
import '../styles/passenger.css';
import { useDispatch, useSelector } from 'react-redux';
import Passenger from './Passenger';
import { useEffect } from 'react';

export default function ListPassengers() {
  const { totalSeatsAge, totalSeatsChild } = useSelector((state) => state.slicePrice);
  const { passengers } = useSelector((state) => state.slicePassengers);
  const [amountPassengers, setAmountPassengers] = useState(totalSeatsAge + totalSeatsChild);
  const [addComponents, setAddComponents] = useState([]);
  const [agesPassengers, setAgesPassengers] = useState({
    age: totalSeatsAge,
    child: totalSeatsChild
  });

  useEffect(() => {
    console.log(passengers);
    passengers.map((el) => {
      if (el.passAges === 'Взрослый' && agesPassengers.age > 0) {
        setAgesPassengers({...agesPassengers, age: agesPassengers.age - 1});
      };
  
      if (el.passAges === 'Детский' && agesPassengers.child > 0) {
        setAgesPassengers({...agesPassengers, child: agesPassengers.child - 1});
      };

      return el;
    });
  }, [passengers])

  function addPassenger() {
    if (amountPassengers >= 1) {
      setAmountPassengers((prev) => prev -= 1);
      setAddComponents([...addComponents, 1]);
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
      <button className='list-passenger-btn' type='button'>Далее</button>
    </div>
  );
};
