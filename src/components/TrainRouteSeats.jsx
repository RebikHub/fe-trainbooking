import React, { useEffect, useState } from 'react';
import '../styles/train-route.css';

export default function TrainRouteSeats({name, seats, price, seatPrice}) {
  const [hidden, setHidden] = useState('none');
  const [seatInfo, setSeatInfo] = useState([]);

  function showSeats() {
    if (hidden === 'none') {
      setHidden('seat-up-down');
      setTimeout(() => setHidden('none'), 3 * 1000);
    } else {
      setHidden('none');
    };
  };

  useEffect(() => {
    const arrayPrice = [];

    if (seatPrice.hasOwnProperty('top_price')) {
      arrayPrice.push({
        name: 'верхние',
        price: seatPrice.top_price,
      });
    };

    if (seatPrice.hasOwnProperty('bottom_price')) {
      arrayPrice.push({
        name: 'нижние',
        price: seatPrice.bottom_price,
      });
    };

    if (seatPrice.hasOwnProperty('side_price')) {
      arrayPrice.push({
        name: 'боковые',
        price: seatPrice.side_price,
      });
    };

    setSeatInfo(arrayPrice);
  }, []);

  return (
    <div className='train-ticket' onMouseEnter={showSeats}>
      <p className='ticket-class'>{name}</p>
      <span className='amount-seat'>{seats}
        <div className={hidden}>
          {seatInfo.map((el,i) =>
            <div className='seat-up' key={i}>
              <p className='ticket-class'>{el.name}</p>
              <p className='seat-ticket-start-number'>{el.price}</p>
              <span className='sign-rub'></span>
            </div>
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
