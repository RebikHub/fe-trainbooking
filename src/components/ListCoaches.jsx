import React from 'react';
import '../styles/coaches.css';
import { useSelector } from 'react-redux';

export default function ListCoaches() {
  const { coaches } = useSelector((state) => state.sliceGetSeats);

  console.log(coaches);
  return (
    <div className='coaches'>
      <h3 className='coaches-title'>выбор мест</h3>

      <div className='coach'>
        <div className='choice-train'>
          <span className='choice-train-img'></span>
          <button className='choice-train-btn'>Выбрать другой поезд</button>
        </div>

        <div className='coach-train'>
          <div className='coach-train-route'>
            <span className='coach-train-img'></span>
            <div className='coach-train-desc'>
              <h5 className='train-desc-name'>116С</h5>
              <p className='train-desc-city'>Москва &#8594;</p>
              <p className='train-desc-city'>Санкт-Петербург</p>
            </div>
          </div>

          <div className='coach-direction-time'>
            <div className='coach-direction-city'>
              <h5 className='coach-time'>00:10</h5>
              <p className='coach-direction-name'>Москва</p>
              <p className='coach-direction-station'>Курский вокзал</p>
            </div>
            <div className='direction-arrow'></div>
            <div className='coach-direction-city'>
              <h5 className='coach-time'>09:52</h5>
              <p className='coach-direction-name'>Санкт-Петербург</p>
              <p className='coach-direction-station'>Ладожский вокзал</p>
            </div>
          </div>

          <div className='coach-duration'>
            <span className='coach-duration-img'></span>
            <div className='coach-duration-text'>
              <p>9 часов</p>
              <p>42 минуты</p>
            </div>
          </div>
        </div>

        <div className='amount-tickets'>
          <h4 className='amount-tickets-title'>Количество билетов</h4>
          <div className='tickets-age'>
            <div className='tickets-age-inputs'>
              <input className='tickets-age-input' type="text" placeholder='Взрослых - 2'/>
              <p className='tickets-adults-desc'>Можно добавить еще 3 пассажиров</p>
            </div>

            <div className='tickets-age-inputs'>
              <input className='tickets-age-input' type="text" placeholder='Детских - 1'/>
              <p className='tickets-adults-desc'>Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле 
                в среднем на 50-65%</p>
            </div>

            <div className='tickets-age-inputs'>
              <input className='tickets-age-input' type="text" placeholder='Детских &#171;без места&#187; - 0'/>
              <p className='tickets-adults-desc'></p>
            </div>
          </div>
        </div>

        <div className='coach-type'>
          <h4 className='coach-type-title'>Тип вагона</h4>
          <div className='coach-types'>
            <div className='coach-type-fourth'>
              <span className='type-fourth-img'></span>
              <p className='type-fourth-text'></p>
            </div>
            <div className='coach-type-third'>
              <span className='type-third-img'></span>
              <p className='type-third-text'></p>
            </div>
            <div className='coach-type-second'>
              <span className='type-second-img'></span>
              <p className='type-second-text'></p>
            </div>
            <div className='coach-type-first'>
              <span className='type-first-img'></span>
              <p className='type-first-text'></p>
            </div>
          </div>

          <div className='coaches-numbering'>
            <div className='coaches-numbers'>Вагоны 10 12</div>
          </div>

          <div className='coach-description'>
            <div className='coach-description-prices'>
              <div className='coach-number'>
                <h3 className='coach-number-title'>12</h3>
                <p className='coach-number-text'>вагон</p>
              </div>
              <div className='coach-seats-amount'>
                <p className='seats-amount-title'>Места <span className='seats-amount-num'>21</span></p>
                <p className='seats-amount-text'>Верхние <span className='seats-amount-num'>10</span></p>
                <p className='seats-amount-text'>Нижние <span className='seats-amount-num'>11</span></p>
              </div>
              <div className='coach-seats-price'>
                <p className='seats-price-title'></p>
                <p className='seats-price-text'>2020 <span className='sign-rub'></span></p>
                <p className='seats-price-text'>3030 <span className='sign-rub'></span></p>
              </div>
              <div className='coach-services'>
                <p className='coach-services-text'>Обслуживание ФПК</p>
                <div className='coach-services-img'>
                  <span className='service-air'></span>
                  <span className='service-wifi'></span>
                  <span className='service-linens'></span>
                  <span className='service-coffee'></span>
                </div>
              </div>
            </div>

            <div className='coach-seats-selected'>
              <p>13 человек выбирают места в этом поезде</p>
            </div>

            <div className='coach-seats-info'>
              <span className='seats-info-img'></span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
