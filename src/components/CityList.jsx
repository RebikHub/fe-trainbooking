import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/city.css';

export default function CityList({none, getCity}) {
  const { cities } = useSelector((state) => state.sliceGetCity);

  return (
    <div className={none}>
      <div className='city-list'>
        {cities.length === 0 ?
        <div className='dots-list'>
          <div className='dots-list-absolute'>
            <div className='loader'></div>
          </div>
        </div> :
        cities.map((el) => <p onClick={() => getCity(el)} key={el._id}>{el.name}</p>)}
      </div>
    </div>
  );
};
