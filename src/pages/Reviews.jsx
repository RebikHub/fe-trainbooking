import React, { useEffect, useState } from 'react';
import { reviews } from '../reviews';

export default function Reviews() {
  const arrF = [{ s: "one" }, { s: "two" }, { s: "three" }];
  const [array, setArray] = useState(reviews);
  console.log(array);
  function carousel(arr) {
    console.log(arr);
    const firstEl = arr.shift();
    console.log(firstEl);
    console.log(arr);
    const resultArr = arr.push(firstEl);
    console.log(resultArr);
    return setArray(resultArr);
  };

  useEffect(() => {
    carousel(array)
  }, [])

  // useEffect(() => {
  //   const timer = setTimeout(() => carousel(array), 2 * 1000);
  //   return clearTimeout(timer);
  // }, [array]);

  return (
    <div id='main-reviews' className='main-reviews'>
      <div className='reviews-title'>отзывы</div>
      <div className='reviews'>
        {array.map((el, i) => (
          <div className='review' key={i}>
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
