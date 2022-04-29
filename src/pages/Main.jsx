import React from 'react';
import '../styles/main.css';

import { reviews } from '../reviews';

export default function Main() {
  return (
    <main className='main'>
      <div className='main-about'>
        <h4 className='about-title'>о нас</h4>
        <div className='about-content'>
          <div className='about-line'></div>
          <div>
            <p className='about-text-first'>
              Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем 
              все больше людей заказывают жд билеты через интернет.
            </p>
            <p className='about-text-second'>
              Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать? 
              Мы расскажем о преимуществах заказа через интернет.
            </p>
            <p className='about-text-third'>
              Покупать жд билеты дешево можно за 90 суток до отправления поезда. 
              Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.
            </p>
          </div>
        </div>
      </div>

      <div className='main-how'>
        <div className='how-title'>
          <h4 className='how-title-text'>как это работает</h4>
          <button className='how-title-btn' type='button'>Узнать больше</button>
        </div>
        <div className='how-content'>
          <div className='how-content-item'>
            <div className='how-image-first'></div>
            <p className='how-content-text'>Удобный заказ на сайте</p>
          </div>
          <div className='how-content-item'>
            <div className='how-image-second'></div>
            <p className='how-content-text'>Нет необходимости ехать в офис</p>
          </div>
          <div className='how-content-item'>
            <div className='how-image-third'></div>
            <p className='how-content-text'>Огромный выбор направлений</p>
          </div>
        </div>
      </div>

      <div className='main-reviews'>
        <div className='reviews-title'>отзывы</div>
        <div className='reviews'>
          {reviews.map((el, i) => (
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
          <div className='carousel-dots'></div>
        </div>
      </div>

    </main>
  )
}
