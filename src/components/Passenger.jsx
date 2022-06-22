import React from 'react';
import '../styles/passenger.css';

export default function Passenger() {
  const num = 1;
  return (
    <div className='passenger'>
      <header className='pass-header'>
        <span className='pass-header-up'></span>
        <h4 className='pass-header-title'>Пассажир {num}</h4>
        <span className='pass-header-close'></span>
      </header>

      <main className='pass-main'>
        <div className='pass-choice-age'>
          <select className='pass-select'>
            <option value="">Взрослый</option>
            <option value="">Ребенок</option>
          </select>
          {/* <div className='list-routes-sort'>
            <p>сортировать по: 
              <span className='sort-selected' onClick={getSort}>{select}</span>
            </p>
            <div className={none}>
              <div className='select-time' onClick={getSelect}>времени</div>
              <div className='select-price' onClick={getSelect}>стоимости</div>
              <div className='select-duration' onClick={getSelect}>длительности</div>
            </div>
          </div> */}
        </div>

        <div className='pass-form-names'>
          <label className='pass-names-label' htmlFor="">
            <p>Фамилия</p>
            <input className='pass-names-input' type="text" />
          </label>
          <label className='pass-names-label' htmlFor="">
            <p>Имя</p>
            <input className='pass-names-input' type="text" />
          </label>
          <label className='pass-names-label' htmlFor="">
            <p>Отчество</p>
            <input className='pass-names-input' type="text" />
          </label>
        </div>

        <div className='pass-form-birth'>
          <div className='pass-choice-gender'>
            <p className='choice-gender-text'>Пол</p>
            <div className='choice-gender'>
              <p className='gender-man'>м</p>
              <p className='gender-woman'>ж</p>
            </div>
          </div>
          <div className='pass-birth-date'>
            <label className='pass-birth-label' htmlFor="">
              <p>Дата рождения</p>
              <input className='pass-birth-input' type="text" placeholder='ДД/ММ/ГГ'/>
            </label>
          </div>
        </div>

        <div className='pass-form-check'>
          <div className='pass-check-input'>
            <input type="checkbox"/>
          </div>
          <p className='pass-check-text'>ограниченная подвижность</p>
        </div>

        <div className='pass-form-docs'>
          <div className='pass-docs-select'>
            <select className='select-docs'>
              <option className='docs-option' value="">Паспорт РФ</option>
              <option className='docs-option' value="">Свидетельство о рождении</option>
            </select>
          </div>

          <div className='pass-docs-series'>
            <label className='docs-series-label' htmlFor="">
              Серия
              <input className='docs-series-input' type="text" />
            </label>
          </div>
          <div className='pass-docs-number'>
            <label className='docs-number-label' htmlFor="">
              Номер
              <input className='docs-number-input' type="text" />
            </label>
          </div>
        </div>
      </main>

      <footer className='pass-footer'>
        <button className='pass-button' type='button'>Следующий пассажир</button>
      </footer>
    </div>
  );
};
