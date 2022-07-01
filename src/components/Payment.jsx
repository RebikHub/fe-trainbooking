import React, { useState } from 'react'
import '../styles/payment.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentStepThree } from '../store/sliceProgressLine';
import { validateName } from '../utils/validators';
import Notice from './Notice';
import { changeNotice } from '../store/slicePrice';

export default function Payment() {
  const dispatch = useDispatch();
  const { notice } = useSelector((state) => state.slicePrice);
  const [method, setMethod] = useState(false);
  const [ok, setOk] = useState(false);
  const [nameValue, setNameValue] = useState({
    name: '',
    patronymic: '',
    surname: ''
  });
  const [noticeText, setNoticeText] = useState('');

  useEffect(() => {
    dispatch(currentStepThree());
  }, []);

  function inputFirstName(ev) {
    setNameValue({...nameValue, name: ev.target.value});
  };

  function blurFirstName() {
    if (!validateName(nameValue.name)) {
      setNoticeText('Имя указано некорректно\n Пример: Иван');
      dispatch(changeNotice(true));
    };
  };

  function inputSecondName(ev) {
    setNameValue({...nameValue, patronymic: ev.target.value});
  };

  function blurSecondName() {
    if (!validateName(nameValue.patronymic)) {
      setNoticeText('Отчество указано некорректно\n Пример: Иванович');
      dispatch(changeNotice(true));
    };
  };

  function inputSurName(ev) {
    setNameValue({...nameValue, surname: ev.target.value});
  };

  function blurSurName() {
    if (!validateName(nameValue.surname)) {
      setNoticeText('Фамилия указана некорректно\n Пример: Иванов');
      dispatch(changeNotice(true));
    };
  };

  return (
    <form>
      <Notice text={noticeText}/>

      <div className='payment'>
        <div className='payment-data'>
          <div className='data-head'>
            <h4 className='data-head-title'>Персональные данные</h4>
          </div>

          <div className='data-inputs-name'>
            <label className='data-names-label'>
              <p>Фамилия</p>
              <input className='data-names-input' type="text" required
                value={nameValue.surname}
                onChange={inputSurName}
                onBlur={blurSurName} />
            </label>
            <label className='data-names-label'>
              <p>Имя</p>
              <input className='data-names-input' type="text" required
                value={nameValue.name}
                onChange={inputFirstName}
                onBlur={blurFirstName} />
            </label>
            <label className='data-names-label'>
              <p>Отчество</p>
              <input className='data-names-input' type="text" required
                value={nameValue.patronymic}
                onChange={inputSecondName}
                onBlur={blurSecondName} />
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
