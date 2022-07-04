import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/order.css';
import { upperCaseBirthNumber } from '../utils/validators';
import TrainRoute from './TrainRoute';

export default function Order() {
  const { route } = useSelector((state) => state.sliceChoice);
  const { totalPriceAll } = useSelector((state) => state.slicePrice);
  const { passengers } = useSelector((state) => state.slicePassengers);
  const { user, departure } = useSelector((state) => state.sliceOrder);

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
            {departure.seats.map((el, i) =>
              <div className={`passengers-container-item${i === departure.seats.length - 1 ? '' : '-border'}`} key={i}>
                <div className='passenger-container-avatar'>
                  <span className='passenger-container-img'></span>
                  <p className='passenger-container-ages'>{el.person_info.is_adult ? 'Взрослый' : 'Ребенок'}</p>
                </div>
                {/* person_info: {
        is_adult: select.age === 'Взрослый' ? true : false,
        first_name: nameValue.name,
        last_name: nameValue.surname,
        patronymic: nameValue.patronymic,
        gender: gender,
        birthday: dateValue,
        document_type: select.docs,
        document_data:  */}
                <div className='passenger-container-data'>
                  <p className='passenger-container-name'>{`${el.person_info.last_name} ${el.person_info.first_name} ${el.person_info.patronymic}`}</p>
                  <p className='passenger-container-gender'>{`Пол ${el.person_info.gender ? 'мужской' : 'женский'}`}</p>
                  <p className='passenger-container-birth'>{`Дата рождения ${el.person_info.birthday}`}</p>
                  <p className='passenger-container-docs'>{`${el.person_info.document_type} ${el.person_info.document_data}`}</p>
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
          <p className='order-payment-text'>{user.payment_method}</p>
          <button className='order-payment-btn' type='button'>Изменить</button>
        </div>
      </div>

      <button className='order-btn' type='button'>подтвердить</button>
    </div>
  );
};
