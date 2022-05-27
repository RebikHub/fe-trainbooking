import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../styles/progress-line.css';

export default function ProgressLine() {
  const {stepOne, stepTwo, stepThree, stepFour} = useSelector((state) => state.sliceProgressLine);
  const [step, setStep] = useState({
    one: '',
    two: '',
    three: '',
    four: ''
  });
  useEffect(() => {
    if (stepOne) {
      setStep({...step, one: 'current-step'})
    };

    if (stepTwo) {
      setStep({
        ...step,
        one: 'current-step',
        two: 'current-step'
      });
    };

    if (stepThree) {
      setStep({
        ...step,
        one: 'current-step',
        two: 'current-step',
        three: 'current-step'
      });
    };

    if (stepFour) {
      setStep({
        one: 'current-step',
        two: 'current-step',
        three: 'current-step',
        four: 'current-step'
      });
    };

  }, [stepOne, stepTwo, stepThree, stepFour])

  return (
    <div className='progress-line'>
      <div className={'steps-start ' + step.one}></div>

      <div className={'line-step-one ' + step.one}>
        <div className={'step-number ' + step.one}>
          <p>1</p>
        </div>
        <div className={'step-text ' + step.one}>Билеты</div>
        <div className='step-arrow'>
          <div className={'arrow-top ' + step.one}></div>
          <div className={'arrow-bottom ' + step.one}></div>
        </div>
      </div>

      <div className={'line-step-two ' + step.two}>
        <div className={'step-arrow-out ' + step.two}></div>
        <div className={'step-number ' + step.two}>
          <p>2</p>
        </div>
        <div className={'step-text ' + step.two}>Пассажиры</div>
        <div className='step-arrow'>
          <div className={'arrow-top ' + step.two}></div>
          <div className={'arrow-bottom ' + step.two}></div>
        </div>
      </div>

      <div className={'line-step-three ' + step.three}>
        <div className={'step-arrow-out ' + step.three}></div>
        <div className={'step-number ' + step.three}>
          <p>3</p>
        </div>
        <div className={'step-text ' + step.three}>Оплата</div>
        <div className='step-arrow'>
          <div className={'arrow-top ' + step.three}></div>
          <div className={'arrow-bottom ' + step.three}></div>
        </div>
      </div>

      <div className={'line-step-four ' + step.four}>
        <div className={'step-arrow-out ' + step.four}></div>
        <div className={'step-number ' + step.four}>
          <p>4</p>
        </div>
        <div className={'step-text ' + step.four}>Проверка</div>
      </div>

      <div className={'steps-end ' + step.four}></div>
    </div>
  );
};
