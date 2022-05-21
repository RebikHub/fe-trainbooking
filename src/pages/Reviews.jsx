import React, { useEffect, useState } from 'react';
import { reviews } from '../reviews';
import '../styles/carousel.css';

export default function Reviews() {
  // const arr = [{ s: "one" }, { s: "two" }, { s: "three" }];
  const [array, setArray] = useState(reviews);
  const [num, setNum] = useState(0);

  // function carousel(arr) {
  //   const changeArray = arr;
  //   const firstEl = changeArray[0];
  //   changeArray.splice(0,1);
  //   changeArray.push(firstEl)
  //   setArray(changeArray);
  // };

  // function counter(arg, arr) {
  //   carousel(arr);
  //   setNum(arg + 1);
  // }
  
  // useEffect(() => {
  //   const carouselInterval = setTimeout(() => counter(num, array), 2 * 1000);
  //   return () => clearTimeout(carouselInterval);
  // });

  return (
    <div id='main-reviews' className='main-reviews'>
      <div className='reviews-title'>отзывы</div>
      <div className='reviews'>
        {array.map((el, i) => (
          <div className='review' key={el.name + i}>
            <img className='review-image' src={el.image} alt={el.name}/>
            <div className='review-content'>
              <h5 className='review-name'>{el.name}</h5>
              <p className='review-text'>
                {el.content}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='reviews-carousel'>
        <div className='carousel-dots active-dot'></div>
        <div className='carousel-dots'></div>
        <div className='carousel-dots'></div>
        <div className='carousel-dots'></div>
      </div>
    </div>
  )
}
