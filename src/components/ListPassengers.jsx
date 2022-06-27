import React from 'react';
import '../styles/passenger.css';
import { useDispatch, useSelector } from 'react-redux';
import Passenger from './Passenger';

export default function ListPassengers() {
  const { notice, totalSeatsAge, totalSeatsChild, totalPriceAll } = useSelector((state) => state.slicePrice);
  return (
    <div className='list-passengers'>
      <Passenger/>
      <div className='add-passengers'>
        <h4 className='add-passenger-title'>Добавить пассажира</h4>
        <span className='add-passenger-img'></span>
      </div>
      <button className='list-passenger-btn' type='button'>Далее</button>
    </div>
  );
};
