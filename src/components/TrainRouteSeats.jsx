import React, { useEffect, useState } from 'react';
import '../styles/train-route.css';

export default function TrainRouteSeats({name, seats, price}) {
  const [hidden, setHidden] = useState('none');

  function showSeats() {
    if (hidden === 'none') {
      setHidden('seat-up-down');
    } else {
      setHidden('none');
    };
  };

  const arr = []

  return (
    <div className='train-ticket'>
      <p className='ticket-class'>{name}</p>
      <span className='amount-seat'
        onClick={showSeats}>{seats}
        <div className={hidden}>
          {arr.map((el) =>
            <>
              <div className='seat-up'>
                <p className='ticket-class'>верхние</p>
                {/* <p className='amount-seat'>23</p> */}
                <p className='seat-ticket-start-number'>{el.top_price}</p>
                <span className='sign-rub'></span>
              </div>
              <div className='seat-up'>
                <p className='ticket-class'>нижние</p>
                {/* <p className='amount-seat'>34</p> */}
                <p className='seat-ticket-start-number'>{el.bottom_price}</p>
                <span className='sign-rub'></span>
              </div>
              <div className='seat-up'>
                <p className='ticket-class'>боковые</p>
                {/* <p className='amount-seat'>34</p> */}
                <p className='seat-ticket-start-number'>{el.side_price}</p>
                <span className='sign-rub'></span>
              </div>
            </>
          )}
        </div>
      </span>
      <div className='ticket-start-price'>
        <p className='ticket-start-text'>от</p>
        <p className='ticket-start-number'>{price}</p>
        <span className='sign-rub'></span>
      </div>
    </div>
  )
}
