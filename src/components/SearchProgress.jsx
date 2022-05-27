import React from 'react';
import '../styles/search-progress.css';
import gif from '../images/loading.gif';

export default function SearchProgress() {
  return (
    <div className='search-progress'>
      <div className='search-progress-line'></div>
      <img className='search-progress-img' src={gif} alt="" />
    </div>
  )
}
