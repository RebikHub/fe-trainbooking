import React from 'react';
import SearchWidget from '../components/SearchWidget';
import '../styles/header.css';

export default function Header() {
  return (
    <header className='header'>

      <div className='header-logo'>
        <h3 className='header-logo-text'>Лого</h3>
      </div>

      <div className='header-nav'>
        <ul className='header-nav-list'>
          <li className='header-nav-item'>
            <a href="#">О нас</a>
          </li>
          <li className='header-nav-item'>
            <a href="#">Как это работает</a>
          </li>
          <li className='header-nav-item'>
            <a href="#">Отзывы</a>
          </li>
          <li className='header-nav-item'>
            <a href="#">Контакты</a>
          </li>
        </ul>
      </div>

      <div className='header-title'>
        <h4 className='header-title-text'>
          Вся жизнь - <span>путешествие!</span>
        </h4>
        <SearchWidget/>
      </div>

      <div className='header-endline'></div>
    </header>
  )
}
