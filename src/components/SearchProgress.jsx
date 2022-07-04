import React, { useEffect, useState } from 'react';
import '../styles/search-progress.css';
import gif from '../images/loading.gif';

export default function SearchProgress() {
  const [line, setLine] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (line <= 99) {
        setLine((prev) => prev + 1);
      }
    }, 15);
  }, [line]);

  return (
    <div className='search-progress'>
      <div className='search-progress-line' style={{width: `${line}%`}}></div>
      <img className='search-progress-img' src={gif} alt="" />
    </div>
  );
};
