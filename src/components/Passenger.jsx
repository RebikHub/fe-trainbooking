import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/passenger.css';
import { validateDate } from '../utils/validators';

export default function Passenger() {
  const dispatch = useDispatch();
  const [list, setList] = useState([]);
  const [none, setNone] = useState({
    main: false,
    age: 'none',
    docs: 'none'
  });
  const [select, setSelect] = useState({
    age: 'Взрослый',
    docs: 'Паспорт РФ'
  });
  const [gender, setGender] = useState(false);
  const [limited, setLimited] = useState(false);
  const [dateValue, setDateValue] = useState('');
  const num = 1;

  function inputDate(ev) {
    setDateValue(Number(ev.target.value) ? ev.target.value : '');
    const valid = validateDate(ev.target.value)
    console.log(ev);
  };

  function focusDate(ev) {
    console.log(validateDate(dateValue));
  }


  function getSortAge() {
    if (none.age === 'none') {
      setNone({...none, age: 'list-age-select'});
    } else {
      setNone({...none, age: 'none'});
    }
  };

  function getSelectAge(ev) {
    setSelect({...select, age: ev.target.outerText});
    setNone({...none, age: 'none'});
    if (ev.target.outerText === 'Взрослый') {
      console.log('Взрослый');
    };
    if (ev.target.outerText === 'Ребенок') {
      console.log('Ребенок');
    };
  };

  function getSortDocs() {
    if (none.docs === 'none') {
      if (select.docs === 'Свидетельство о рождении') {
        setNone({...none, docs: 'list-docs-select-long'});
      } else {
        setNone({...none, docs: 'list-docs-select'});
      };
    } else {
      setNone({...none, docs: 'none'});
    }
  };

  function getSelectDocs(ev) {
    setSelect({...select, docs: ev.target.outerText});
    setNone({...none, docs: 'none'});
    if (ev.target.outerText === 'Паспорт РФ') {
      console.log('Паспорт РФ');
    };
    if (ev.target.outerText === 'Свидетельство о рождении') {
      console.log('Свидетельство о рождении');
    };
  };

  return (
    <div className='passenger'>
      <header className={none.main ? 'pass-header' : 'pass-header-plus'}>
        <span className={none.main ? 'pass-header-up' : 'pass-header-down'} onClick={() => setNone({...none, main: !none.main})}></span>
        <h4 className='pass-header-title'>Пассажир {num}</h4>
        <span className={none.main ? 'pass-header-close' : 'none'}></span>
      </header>

      <div className={none.main ? 'pass-main' : 'none'}>
        <div className='pass-choice-age'>
          <div className='pass-select' onClick={getSortAge}>
            {select.age}
          </div>
          <div className={none.age}>
            <div className='select-age' onClick={getSelectAge}>Взрослый</div>
            <div className='select-child' onClick={getSelectAge}>Ребенок</div>
          </div>
        </div>

        <div className='pass-form-names'>
          <label className='pass-names-label' htmlFor="">
            <p>Фамилия</p>
            <input className='pass-names-input' type="text" required/>
          </label>
          <label className='pass-names-label' htmlFor="">
            <p>Имя</p>
            <input className='pass-names-input' type="text" required/>
          </label>
          <label className='pass-names-label' htmlFor="">
            <p>Отчество</p>
            <input className='pass-names-input' type="text" required/>
          </label>
        </div>

        <div className='pass-form-birth'>
          <div className='pass-choice-gender'>
            <p className='choice-gender-text'>Пол</p>
            <div className='choice-gender'>
              <p className={gender ? 'gender-choice-color' : 'gender-human'} onClick={() => setGender(!gender)}>м</p>
              <p className={gender ? 'gender-human' : 'gender-choice-color'} onClick={() => setGender(!gender)}>ж</p>
            </div>
          </div>
          <div className='pass-birth-date'>
            <label className='pass-birth-label' htmlFor="">
              <p>Дата рождения</p>
              <input className='pass-birth-input' type="text" placeholder='ДД/ММ/ГГ' required
                value={dateValue}
                onChange={inputDate}
                onBlur={focusDate}
              />
            </label>
          </div>
        </div>

        <div className='pass-form-check'>
          <div className={limited ? 'pass-check-input' : 'pass-check-input-ok'} onClick={() => setLimited(!limited)}></div>
          <p className='pass-check-text'>ограниченная подвижность</p>
        </div>

        <div className='pass-form-docs'>
          <div className='pass-docs-select'>
            <p>Тип документа</p>
            <div className='select-docs' onClick={getSortDocs}>
              {select.docs}
            </div>
            <div className={none.docs}>
              <div className='select-doc-passport' onClick={getSelectDocs}>Паспорт РФ</div>
              <div className='select-doc-birth' onClick={getSelectDocs}>Свидетельство о рождении</div>
            </div>
          </div>

          {select.docs === 'Паспорт РФ' ?
          <>
            <div className='pass-docs-series'>
              <label className='docs-series-label' htmlFor="">
                <p>Серия</p>
                <input className='docs-series-input' type="text" required placeholder='_ _ _ _'/>
              </label>
            </div>
            <div className='pass-docs-number'>
              <label className='docs-number-label' htmlFor="">
                <p>Номер</p>
                <input className='docs-number-input' type="text" required/>
              </label>
            </div>
          </> :
          <>
            <div className='pass-docs-birth'>
              <label className='docs-birth-label' htmlFor="">
                <p>Номер</p>
                <input className='docs-birth-input' type="text" required/>
              </label>
            </div>
          </>}
        </div>

        <div className='pass-footer'>
          <button className='pass-button' type='button'>Следующий пассажир</button>
        </div>
      </div>

    </div>
  );
};
