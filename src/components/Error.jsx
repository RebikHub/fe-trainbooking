import React from 'react';
import '../styles/error.css';

export default function Error({classStyle}) {
  return (
    <div className={classStyle}>
      <p>Введите пункт отправления!</p>
    </div>
  )
}
