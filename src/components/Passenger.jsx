import React, { useState } from 'react';
import { useEffect } from 'react';
import '../styles/passenger.css';
import { validateBirthNumber, validateDate, validateName, validatePassportNumber, validatePassportSeries } from '../utils/validators';

export default function Passenger({addPassenger, num, agesPassengers, changeAmountAgesPass}) {
  const [none, setNone] = useState({
    main: false,
    age: 'none',
    docs: 'none',
    valid: false,
    ok: false
  });
  const [select, setSelect] = useState({
    age: 'Взрослый',
    docs: 'Паспорт РФ'
  });
  const [gender, setGender] = useState(false);
  const [limited, setLimited] = useState(false);
  const [dateValue, setDateValue] = useState('');
  const [nameValue, setNameValue] = useState({
    name: '',
    secondName: '',
    surname: ''
  });
  const [docsValue, setDocsValue] = useState({
    passportSeries: '',
    passportNumber: '',
    birthNumber: ''
  });
  const [validText, setValidText] = useState('');

  function inputPassportSeries(ev) {
    setDocsValue({...docsValue, passportSeries: ev.target.value});
  };

  function blurPassportSeries() {
    if (!validatePassportSeries(docsValue.passportSeries)) {
      setNone({...none, valid: true});
      setValidText(`Серия паспорта указана некорректно\n Пример: 1234`);
    };
    console.log(validatePassportSeries(docsValue.passportSeries));
  };

  function inputPassportNumber(ev) {
    setDocsValue({...docsValue, passportNumber: ev.target.value});
  };

  function blurPassportNumber() {
    if (!validatePassportNumber(docsValue.passportNumber)) {
      setNone({...none, valid: true});
      setValidText('Номер паспорта указан некорректно\n Пример: 123456');
    };
    console.log(validatePassportNumber(docsValue.passportNumber));
  };

  function inputBirthNumber(ev) {
    setDocsValue({...docsValue, birthNumber: ev.target.value});
  };

  function blurBirthNumber() {
    if (!validateBirthNumber(docsValue.birthNumber)) {
      setNone({...none, valid: true});
      setValidText('Номер свидетельства о рожденни указан некорректно\n Пример: VIII-ЫП-123456');
    };
    console.log(validateBirthNumber(docsValue.birthNumber));
  };

  function inputFirstName(ev) {
    setNameValue({...nameValue, name: ev.target.value});
  };

  function blurFirstName() {
    if (!validateName(nameValue.name)) {
      setNone({...none, valid: true});
      setValidText('Имя указано некорректно\n Пример: Иван');
    };
    console.log(validateName(nameValue.name));
  };

  function inputSecondName(ev) {
    setNameValue({...nameValue, secondName: ev.target.value});
  };

  function blurSecondName() {
    if (!validateName(nameValue.secondName)) {
      setNone({...none, valid: true});
      setValidText('Отчество указано некорректно\n Пример: Иванович');
    };
    console.log(validateName(nameValue.secondName));
  };

  function inputSurName(ev) {
    setNameValue({...nameValue, surname: ev.target.value});
  };

  function blurSurName() {
    if (!validateName(nameValue.surname)) {
      setNone({...none, valid: true});
      setValidText('Фамилия указана некорректно\n Пример: Иванов');
    };
    console.log(validateName(nameValue.surname));
  };

  function inputDate(ev) {
    setDateValue(ev.target.value);
  };

  function blurDate() {
    if (!validateDate(dateValue)) {
      setNone({...none, valid: true});
      setValidText('Дата рождения указана некорректно\n Пример: 20.02.2000');
    };
    console.log(validateDate(dateValue));
  };

  useEffect(() => {
    if (none.valid) {
      setTimeout(() => setNone({...none, valid: false}), 5 * 1000);
    };
  }, [none.valid]);

  function nextPassenger() {
    if (nameValue.name !== '' && nameValue.secondName !== '' && nameValue.surname !== '') {
      if (select.docs === 'Паспорт РФ') {
        if (docsValue.passportNumber !== '' && docsValue.passportSeries !== '') {
          if (!none.valid) {
            setNone({...none, ok: true});
            addPassenger();
          } else {
            setNone({...none, valid: true});
            setValidText('Заполните все поля!');
          };
        };
      } else {
        if (docsValue.birthNumber !== '') {
          if (!none.valid) {
            setNone({...none, ok: true});
            addPassenger();
          } else {
            setNone({...none, valid: true});
            setValidText('Заполните все поля!');
          };
        };
      };
    } else {
      setNone({...none, valid: true});
      setValidText('Заполните все поля!');
    };

    if (agesPassengers.age > 0 && agesPassengers.child > 0) {
      if (select.age === 'Взрослый') {
        changeAmountAgesPass({
          age: agesPassengers.age - 1,
          child: agesPassengers.child
        });
      };
      if (select.age === 'Ребенок') {
        changeAmountAgesPass({
          age: agesPassengers.age,
          child: agesPassengers.child - 1
        });
      };
    };

    if (agesPassengers.age === 0 && agesPassengers.child > 0) {
      changeAmountAgesPass({
        age: agesPassengers.age,
        child: agesPassengers.child - 1
      });
    };

    if (agesPassengers.age > 0 && agesPassengers.child === 0) {
      changeAmountAgesPass({
        age: agesPassengers.age - 1,
        child: agesPassengers.child
      });
    };
  };


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

    // if (agesPassengers.age > 0 && agesPassengers.child > 0) {
    //   if (ev.target.outerText === 'Взрослый') {
    //     changeAmountAgesPass({
    //       age: agesPassengers.age - 1,
    //       child: agesPassengers.child
    //     });
    //   };
    //   if (ev.target.outerText === 'Ребенок') {
    //     changeAmountAgesPass({
    //       age: agesPassengers.age,
    //       child: agesPassengers.child - 1
    //     });
    //   };
    // };

    // if (agesPassengers.age === 0 && agesPassengers.child > 0) {
    //   changeAmountAgesPass({
    //     age: agesPassengers.age,
    //     child: agesPassengers.child - 1
    //   });
    // };

    // if (agesPassengers.age > 0 && agesPassengers.child === 0) {
    //   changeAmountAgesPass({
    //     age: agesPassengers.age - 1,
    //     child: agesPassengers.child
    //   });
    // };
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
            <div className={agesPassengers.age > 0 ? 'select-age' : 'none'} onClick={getSelectAge}>Взрослый</div>
            <div className={agesPassengers.child > 0 ? 'select-child' : 'none'} onClick={getSelectAge}>Ребенок</div>
          </div>
        </div>

        <div className='pass-form-names'>
          <label className='pass-names-label' htmlFor="">
            <p>Фамилия</p>
            <input className='pass-names-input' type="text" required
              value={nameValue.surname}
              onChange={inputSurName}
              onBlur={blurSurName} />
          </label>
          <label className='pass-names-label' htmlFor="">
            <p>Имя</p>
            <input className='pass-names-input' type="text" required
              value={nameValue.name}
              onChange={inputFirstName}
              onBlur={blurFirstName} />
          </label>
          <label className='pass-names-label' htmlFor="">
            <p>Отчество</p>
            <input className='pass-names-input' type="text" required
              value={nameValue.secondName}
              onChange={inputSecondName}
              onBlur={blurSecondName} />
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
              <input className='pass-birth-input' type="text" placeholder='ДД.ММ.ГГ' required
                value={dateValue}
                onChange={inputDate}
                onBlur={blurDate}
              />
            </label>
          </div>
        </div>

        <div className='pass-form-check'>
          <div className={!limited ? 'pass-check-input' : 'pass-check-input-ok'} onClick={() => setLimited(!limited)}></div>
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
                <input className='docs-series-input' type="text" required placeholder='__  __  __  __'
                  value={docsValue.passportSeries}
                  onChange={inputPassportSeries}
                  onBlur={blurPassportSeries}/>
              </label>
            </div>
            <div className='pass-docs-number'>
              <label className='docs-number-label' htmlFor="">
                <p>Номер</p>
                <input className='docs-number-input' type="text" required placeholder='__  __  __  __  __  __'
                  value={docsValue.passportNumber}
                  onChange={inputPassportNumber}
                  onBlur={blurPassportNumber}/>
              </label>
            </div>
          </> :
          <>
            <div className='pass-docs-birth'>
              <label className='docs-birth-label' htmlFor="">
                <p>Номер</p>
                <input className='docs-birth-input' type="text" required placeholder='_ _ _ _ _ _ _ _ _ _ _ _'
                  value={docsValue.birthNumber}
                  onChange={inputBirthNumber}
                  onBlur={blurBirthNumber}/>
              </label>
            </div>
          </>}
        </div>

        <div className={none.ok ? 'pass-footer-ok' : 'pass-footer'}>
          <span className={none.ok ? 'pass-valid-ok' : 'none'}></span>
          <p className={none.ok ? 'pass-valid-text-ok' : 'none'}>Готово</p>
          <button className={!none.valid ? 'pass-button' : 'none'} type='button'
            onClick={nextPassenger}>Следующий пассажир</button>
          <div className={none.valid ? 'pass-valid' : 'none'}>
            <span className='pass-valid-close' onClick={() => setNone({...none, valid: false})}></span>
            <p className='pass-valid-text'>{validText}</p>
          </div>
        </div>
      </div>

    </div>
  );
};
