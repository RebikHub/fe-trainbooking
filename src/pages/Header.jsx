import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import ProgressLine from '../components/ProgressLine';
import SearchWidget from '../components/SearchWidget';
import { clearAll } from '../store/sliceChoice';
import { clearAllFiltering } from '../store/sliceFilter';
import { clearRouteList } from '../store/sliceGetRoute';
import { transformHeader, transformHeaderToMain } from '../store/sliceHeaderTransform';
import { clearAllPrices, clearTotalPrice } from '../store/slicePrice';
import { clearStepAll } from '../store/sliceProgressLine';
import '../styles/header.css';

export default function Header() {
  const {classHeader, classSearch, classTitle, classLine} = useSelector((state) => state.sliceHeaderTransform);
  const { loading } = useSelector((state) => state.sliceGetRoute);
  let location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.pathname === '/') {
      dispatch(transformHeaderToMain());
    } else if (location.pathname !== '/') {
      dispatch(transformHeader());
    }
  });

  function clearPrices() {
    dispatch(clearAllPrices());
    dispatch(clearTotalPrice());
    dispatch(clearAllFiltering());
    dispatch(clearRouteList());
    dispatch(clearAll());
    dispatch(clearStepAll());
  };

  return (
    <>
    <header className={classHeader}>

      <div className='header-logo'>
        <HashLink to='/'>
          <h3 className='header-logo-text' onClick={clearPrices}>Лого</h3>
        </HashLink>
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
    </header>
      <div className={classLine}></div>
      {classLine === 'none' && !loading ? <ProgressLine/> : null}
    </>
  )
}
