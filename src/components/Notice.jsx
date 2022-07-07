/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeNotice } from '../store/sliceNotice';
import '../styles/notice.css';

export default function Notice({status}) {
  const dispatch = useDispatch();
  const { notice, text } = useSelector((state) => state.sliceNotice);

  useEffect(() => {
    if (notice) {
      setTimeout(() => dispatch(changeNotice({
        notice: false,
        text: ''
      })), 5 * 1000);
    };
  }, [notice]);

  return (
    <div className={notice ? 'modal-tickets' : 'none'}>
      <div className={status ? 'modal-img-ok' : 'modal-img'}></div>
      <p className='modal-text'>{text}</p>
      <button className='modal-btn' onClick={() => dispatch(changeNotice({
        notice: false,
        text: ''
      }))} type='button'>Понятно</button>
    </div>
  );
};
