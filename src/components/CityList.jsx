import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/city.css';

export default function CityList({none, getCity}) {
  const {cities} = useSelector((state) => state.sliceGetCity);

  return (
    <div className={none}>
      <div className='city-list'>
        {cities.length === 0 ? <p>Идет поиск...</p> : cities.map((el) => <p onClick={() => getCity(el)} key={el._id}>{el.name}</p>)}
      </div>
    </div>
  );
};
