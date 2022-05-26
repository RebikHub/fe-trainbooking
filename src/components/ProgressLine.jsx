import React from 'react';
import '../styles/progress.css';

export default function ProgressLine() {
  const current = 'current-step';
  return (
    <div className='progress-line'>
      <div className={'steps-start ' + current}></div>
      <div className={'line-step-one ' + current}>
        <div className={'step-number ' + current}>
          <p>1</p>
        </div>
        <div className={'step-text ' + current}>Билеты</div>
        <div className='step-arrow'>
          <div class={'arrow-top ' + current}></div>
          <div class={'arrow-bottom ' + current}></div>
        </div>
      </div>
      <div className='line-step-two'>
        <div className='step-number'>
          <p>2</p>
        </div>
        <div className='step-text'>Пассажиры</div>
        <div className='step-arrow'>
          <div class='arrow-top'></div>
          <div class='arrow-bottom'></div>
        </div>
      </div>
      <div className='line-step-three'>
        <div className='step-number'>
          <p>3</p>
        </div>
        <div className='step-text'>Оплата</div>
        <div className='step-arrow'>
          <div class='arrow-top'></div>
          <div class='arrow-bottom'></div>
        </div>
      </div>
      <div className={'line-step-four ' + current}>
        <div className={'step-number ' + current}>
          <p>4</p>
        </div>
        <div className={'step-text ' + current}>Проверка</div>
      </div>
      <div className={'steps-end ' + current}></div>
    </div>
  );
};
