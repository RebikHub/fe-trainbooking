import React from 'react';
import { useEffect } from 'react';
import '../styles/coaches.css';

export default function Notice({modal, handleNotice}) {
  // useEffect(() => {

  // }, [modal]);
  console.log('notice ', modal);
  return (
    <div className={modal ? 'modal-tickets' : 'none'}>
      <div className='modal-img'></div>
      <p className='modal-text'>Укажите количество билетов!</p>
      <button className='modal-btn' onClick={handleNotice} type='button'>Понятно</button>
    </div>
  );
};
