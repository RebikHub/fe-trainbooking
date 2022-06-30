import React from 'react';
import '../styles/coaches.css';

export default function Notice({modal, handleNotice}) {
  return (
    <div className={modal ? 'modal-tickets' : 'none'}>
      <div className='modal-img'></div>
      <p className='modal-text'>Укажите количество билетов и выберите места!</p>
      <button className='modal-btn' onClick={handleNotice} type='button'>Понятно</button>
    </div>
  );
};
