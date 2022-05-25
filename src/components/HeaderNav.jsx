import React from 'react'
import { HashLink } from 'react-router-hash-link'

export default function HeaderNav() {
  return (
    <>
    <div className='header-logo'>
      <h3 className='header-logo-text'>Лого</h3>
    </div>

    <div className='header-nav'>
      <ul className='header-nav-list'>
        <li className='header-nav-item'>
          <HashLink to='/#main-about'>О нас</HashLink>
        </li>
        <li className='header-nav-item'>
          <HashLink to="/#main-how">Как это работает</HashLink>
        </li>
        <li className='header-nav-item'>
          <HashLink to="/#main-reviews">Отзывы</HashLink>
        </li>
        <li className='header-nav-item'>
          <HashLink to="/#footer">Контакты</HashLink>
        </li>
      </ul>
    </div>
    </>
  )
}
