import React, { useState } from 'react'
import '../styles/payment.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { currentStepThree } from '../store/sliceProgressLine';
import { validateEmail, validateName, validatePhoneNumber } from '../utils/validators';
import Notice from './Notice';
import { changeNotice } from '../store/slicePrice';
import { useNavigate } from 'react-router-dom';
import { addUserPayment } from '../store/sliceOrder';

export default function Payment() {
  const dispatch = useDispatch();
  const [method, setMethod] = useState(false);
  const [ok, setOk] = useState(false);
  const [inputValue, setInputValue] = useState({
    name: '',
    patronymic: '',
    surname: '',
    phone: '',
    email: ''
  });
  const [noticeText, setNoticeText] = useState('');
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(currentStepThree());
  }, []);

  useEffect(() => {
    if (
      validateName(inputValue.name) &&
      validateName(inputValue.patronymic) &&
      validateName(inputValue.surname) &&
      validatePhoneNumber(inputValue.phone) &&
      validateEmail(inputValue.email)) {
        setOk(true);
      };
  }, [inputValue]);

  function inputFirstName(ev) {
    setInputValue({...inputValue, name: ev.target.value});
  };

  function blurFirstName() {
    if (!validateName(inputValue.name)) {
      setNoticeText('Имя указано некорректно.\n Пример: Иван');
      dispatch(changeNotice(true));
    };
  };

  function inputSecondName(ev) {
    setInputValue({...inputValue, patronymic: ev.target.value});
  };

  function blurSecondName() {
    if (!validateName(inputValue.patronymic)) {
      setNoticeText('Отчество указано некорректно.\n Пример: Иванович');
      dispatch(changeNotice(true));
    };
  };

  function inputSurName(ev) {
    setInputValue({...inputValue, surname: ev.target.value});
  };

  function blurSurName() {
    if (!validateName(inputValue.surname)) {
      setNoticeText('Фамилия указана некорректно.\n Пример: Иванов');
      dispatch(changeNotice(true));
    };
  };

  function inputPhone(ev) {
    setInputValue({...inputValue, phone: ev.target.value});
  };

  function blurPhone() {
    if (!validatePhoneNumber(inputValue.phone)) {
      setNoticeText('Номер телефона указан некорректно.\n Пример: 89009009090');
      dispatch(changeNotice(true));
    } else {
      setInputValue({...inputValue, phone: validatePhoneNumber(inputValue.phone)});
    };
  };

  function inputEmail(ev) {
    setInputValue({...inputValue, email: ev.target.value});
  };

  function blurEmail() {
    if (!validateEmail(inputValue.email)) {
      setNoticeText('Email указана некорректно.\n Пример: mail@mail.com');
      dispatch(changeNotice(true));
    };
  };

  function nextStep() {
    navigate('/route/order');
    dispatch(addUserPayment({
      first_name: inputValue.name,
      last_name: inputValue.surname,
      patronymic: inputValue.patronymic,
      phone: inputValue.phone,
      email: inputValue.email,
      payment_method: method ? 'cash' : 'online'
    }));
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
                value={inputValue.surname}
                onChange={inputSurName}
                onBlur={blurSurName} />
            </label>
            <label className='data-names-label'>
              <p>Имя</p>
              <input className='data-names-input' type="text" required
                value={inputValue.name}
                onChange={inputFirstName}
                onBlur={blurFirstName} />
            </label>
            <label className='data-names-label'>
              <p>Отчество</p>
              <input className='data-names-input' type="text" required
                value={inputValue.patronymic}
                onChange={inputSecondName}
                onBlur={blurSecondName} />
            </label>
          </div>

          <div className='data-inputs-phone'>
            <label className='data-phone-label'>
              <p>Контактный телефон</p>
              <input className='data-phone-input' type="tel" required placeholder='+7 ___ ___ __ __'
                value={inputValue.phone}
                onChange={inputPhone}
                onBlur={blurPhone} />
            </label>
          </div>

          <div className='data-inputs-mail'>
            <label className='data-mail-label'>
              <p>E-mail</p>
              <input className='data-mail-input' type="email" required placeholder='inbox@gmail.ru'
                value={inputValue.email}
                onChange={inputEmail}
                onBlur={blurEmail} />
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
      <button className={ok ? 'payment-button-ok' : 'payment-button'} disabled={!ok} type='button' onClick={nextStep}>купить билеты</button>
    </form>
  );
};
