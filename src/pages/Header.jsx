import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import SearchWidget from '../components/SearchWidget';
import { transformHeader, transformHeaderToMain } from '../store/sliceHeaderTransform';
import '../styles/header.css';

export default function Header() {
  const {classHeader, classSearch, classTitle, classLine} = useSelector((state) => state.sliceHeaderTransform);
  let location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.pathname === '/') {
      dispatch(transformHeaderToMain());
    } else if (location.pathname !== '/') {
      dispatch(transformHeader());
    }
  });

  return (
    <header className={classHeader}>

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

      <div className={classTitle}>
        <h4 className='header-title-text'>
          Вся жизнь - <span>путешествие!</span>
        </h4>
      </div>

      <SearchWidget classStyle={classSearch}/>

      <div className={classLine}></div>
    </header>
  )
}
