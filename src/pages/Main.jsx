import React from 'react';
import '../styles/main.css';

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

      </div>

      <div className='main-reviews'>

      </div>
    </main>
  )
}
