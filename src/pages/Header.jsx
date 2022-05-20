import React from 'react';
import { HashLink } from 'react-router-hash-link';
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
