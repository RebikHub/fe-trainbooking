import React, { useState } from 'react'
import '../styles/payment.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { currentStepThree } from '../store/sliceProgressLine';

export default function Payment() {
  const dispatch = useDispatch();
  const [method, setMethod] = useState(false);
  const [ok, setOk] = useState(false);

  useEffect(() => {
    dispatch(currentStepThree());
  }, []);

  return (
    <form>
      <div className='payment'>
        <div className='payment-data'>
          <div className='data-head'>
            <h4 className='data-head-title'>Персональные данные</h4>
          </div>

          <div className='data-inputs-name'>
            <label className='data-names-label'>
              <p>Фамилия</p>
              <input className='data-names-input' type="text" required />
            </label>
            <label className='data-names-label'>
              <p>Имя</p>
              <input className='data-names-input' type="text" required />
            </label>
            <label className='data-names-label'>
              <p>Отчество</p>
              <input className='data-names-input' type="text" required />
            </label>
          </div>

          <div className='data-inputs-phone'>
            <label className='data-phone-label'>
              <p>Контактный телефон</p>
              <input className='data-phone-input' type="tel" required placeholder='+7 ___ ___ __ __'/>
            </label>
          </div>

          <div className='data-inputs-mail'>
            <label className='data-mail-label'>
              <p>E-mail</p>
              <input className='data-mail-input' type="email" required placeholder='inbox@gmail.ru'/>
            </label>
          </div>
        </div>

        <div className='payment-method'>
          <div className='method-head'>
            <h4 className='method-head-title'>Способ оплаты</h4>
          </div>
          {/* pass-check-input */}
          <div className='method-check-online'>
            <div className={!method ? 'method-check-input' : 'method-check-input-ok'} onClick={() => setMethod(!method)}></div>
            <p className={!method ?'method-check-text' : 'method-check-text-ok'}>Онлайн</p>
          </div>

          <div className='methods-payment'>
            <div className='methods-payment-text'>
              <p>Банковской картой</p>
              <p>PayPal</p>
              <p>Visa QIWI Wallet</p>
            </div>
          </div>

          <div className='method-check-cash'>
            <div className={method ? 'method-check-input' : 'method-check-input-ok'} onClick={() => setMethod(!method)}></div>
            <p className={method ?'method-check-text' : 'method-check-text-ok'}>Наличными</p>
          </div>
        </div>

      </div>
      <button className={ok ? 'payment-button-ok' : 'payment-button'} type='button'>купить билеты</button>
    </form>
  );
};
