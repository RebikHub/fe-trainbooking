import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeNotice } from '../store/slicePrice';
import '../styles/coaches.css';

export default function Notice({text}) {
  const dispatch = useDispatch();
  const { notice } = useSelector((state) => state.slicePrice);

  useEffect(() => {
    if (notice) {
      setTimeout(() => dispatch(changeNotice(false)), 5 * 1000);
    };
  }, [notice]);

  return (
    <div className={notice ? 'modal-tickets' : 'none'}>
      <div className='modal-img'></div>
      <p className='modal-text'>{text}</p>
      <button className='modal-btn' onClick={() => dispatch(changeNotice(false))} type='button'>Понятно</button>
    </div>
  );
};
