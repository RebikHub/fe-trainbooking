import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to={{pathname: '/', hash: "main-about"}}>О нас</Link>
          </li>
          <li className='header-nav-item'>
            <Link to="#main-how">Как это работает</Link>
          </li>
          <li className='header-nav-item'>
            <Link to="#main-reviews">Отзывы</Link>
          </li>
          <li className='header-nav-item'>
            <Link to="#">Контакты</Link>
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
