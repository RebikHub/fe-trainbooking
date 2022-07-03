import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/order.css';
import TrainRoute from './TrainRoute';

export default function Order() {
  const { route } = useSelector((state) => state.sliceChoice);
  const { totalPriceAll } = useSelector((state) => state.slicePrice);
  const { passengers } = useSelector((state) => state.slicePassengers);
  return (
    <div className='order'>
      <div className='order-route'>
        <h4 className='order-route-title'>Поезд</h4>
        <TrainRoute route={route} btnText={'Изменить'}/>
      </div>

      <div className='order-passengers'>
        <h4 className='order-passenger-title'>Пассажиры</h4>
        <div className='order-passenger-container'>
          <div className='passengers-container-list'>
            {passengers.map((el, i) =>
              <div className={`passengers-container-item${i === passengers.length - 1 ? '' : '-border'}`} key={i}>
                <div className='passenger-container-avatar'>
                  <span className='passenger-container-img'></span>
                  <p className='passenger-container-ages'>{el.passAges}</p>
                </div>
                <div className='passenger-container-data'>
                  <p className='passenger-container-name'>{`${el.passSurname} ${el.passName} ${el.passPatronymic}`}</p>
                  <p className='passenger-container-gender'>{`Пол ${el.passGender ? 'женский' : 'мужской'}`}</p>
                  <p className='passenger-container-birth'>{`Дата рождения ${el.passBirth}`}</p>
                  <p className='passenger-container-docs'>{`${el.typeDoc} ${el.typeDoc === 'Паспорт РФ' ? `${el.docSeries} ${el.docNumber}` : el.birthNumber}`}</p>
                </div>
              </div>
            )}
          </div>
          <div className='passenger-container-change'>
            <div className='passenger-container-total'>
              <p>Всего</p>
              <div className='passenger-container-price'>
                <p>{totalPriceAll}</p>
                <span className='details-total-sign'></span>
              </div>
            </div>
            <button className='passenger-container-btn'>Изменить</button>
          </div>
        </div>
      </div>

      <div className='order-payment'>
        <h4 className='order-payment-title'>Способ оплаты</h4>
        <div className='order-payment-method'>
          <p className='order-payment-text'>Наличными</p>
          <button className='order-payment-btn' type='button'>Изменить</button>
        </div>
      </div>

      <button className='order-btn' type='button'>подтвердить</button>
    </div>
  );
};
