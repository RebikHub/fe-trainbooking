import React from 'react';
import '../styles/success.css';

export default function SuccessfulOrder() {
  return (
    <div className='success-background'>
      <h2 className='success-title'>Благодарим Вас за заказ!</h2>

      <div className='success'>

        <div className='success-order'>
          <h4 className='suc-order-number'>№Заказа 285АА</h4>
          <div className='suc-price'>
            <p className='suc-price-text'>сумма</p>
            <div className='suc-price-number'>
              <p>7760</p>
              <span className='suc-price-sign'></span>
            </div>
          </div>
        </div>

        <div className='success-description'>
          <div className='suc-desc-email'>
            <div className='desc-email-img'></div>
            <p className='suc-desc-text'>билеты будут отправлены на ваш e-mail</p>
          </div>

          <div className='suc-desc-print'>
            <div className='desc-print-img'></div>
            <p className='suc-desc-text'>распечатайте и сохраняйте билеты до даты поездки</p>
          </div>

          <div className='suc-desc-present'>
            <div className='desc-present-img'></div>
            <p className='suc-desc-text'>предьявите распечатанные билеты при посадке</p>
          </div>
        </div>

        <div className='success-name'>
          <p className='suc-name-order'>Ирина Эдуардовна</p>
          <p className='suc-name-text'>Ваш заказ успешно оформлен.<br/> В ближайшее время с вами свяжется наш оператор для подтверждения.</p>
          <p className='suc-name-thx'>Благодарим Вас за оказанное доверие и желаем приятного путешествия!</p>
        </div>

        <div className='success-grade'>
          <div className='suc-grade'>
            <p className='suc-grade-text'>Оценить сервис</p>
            <div className='suc-grade-stars'>
              <span className='grade-star-one'></span>
              <span className='grade-star-two'></span>
              <span className='grade-star-three'></span>
              <span className='grade-star-four'></span>
              <span className='grade-star-five'></span>
            </div>
          </div>
          <button className='success-btn' type='button'>вернуться на главную</button>
        </div>
      </div>
    </div>
  );
};
