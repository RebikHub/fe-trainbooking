/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../styles/city.css';

export default function CityList({none, showListFrom, showListTo, getCity}) {
  const { cities } = useSelector((state) => state.sliceGetCity);
  const ref = useRef(null);

  useEffect(() => {
    function outsideClick(ev) {
      if (ref.current && !ref.current.contains(ev.target)) {
        console.log(none);
        if (none.includes('city-from')) {
          showListFrom();
        };
        if (none.includes('city-to')) {
          showListTo();
        };
      };
    };
    document.addEventListener("mousedown", outsideClick);
    return () => document.removeEventListener("mousedown", outsideClick);
  }, [ref]);

  return (
    <div className={none} ref={ref}>
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
