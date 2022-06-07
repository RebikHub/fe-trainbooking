import React, { useEffect, useState } from 'react';
import '../styles/list-routes.css';
import { useDispatch, useSelector } from 'react-redux';
import { currentStepOne } from '../store/sliceProgressLine';
import TrainRoute from './TrainRoute';
import { addRoutes, filtering } from '../store/sliceFilter';
import { filteringPricesRange } from '../utils/minMaxPrices';

export default function ListRoutes() {
  const { loading, route } = useSelector((state) => state.sliceGetRoute);
  const { filteredRoutes, filterSeats, filterPrices } = useSelector((state) => state.sliceFilter);
  const dispatch = useDispatch();
  const [list, setList] = useState([]);
  const [none, setNone] = useState('none');
  const [select, setSelect] = useState('времени');
  const [pages, setPages] = useState([]);

  useEffect(() => {
    dispatch(filtering({
      start: filterPrices.start,
      end: filterPrices.end,
      filteringPricesRange,
    }));
  }, [filterSeats, filterPrices]);


  useEffect(() => {
    const timer = setTimeout(() => setList(filteredRoutes), 500);
    return () => clearTimeout(timer);
  }, [filteredRoutes]);

  useEffect(() => {
    if (route.items && route.items.length > 0) {
      dispatch(addRoutes(route.items));
      setList(route.items);
    };
  }, [loading, route]);

  useEffect(() => {
    if (!loading) {
      dispatch(currentStepOne());
    };

    if (list) {
      setPages([]);
      const arr = []
      for (let i = 0; i < (list.length / 5); i += 1) {
        arr.push(i);
      };
      setPages(arr);
    };
  }, [list]);

  function getSort() {
    if (none === 'none') {
      setNone('list-routes-sort-select');
    } else {
      setNone('none');
    }
  };

  function getSelect(ev) {
    setSelect(ev.target.outerText);
    setNone('none');
  };

  function choicePage(ev) {
    const elements = document.querySelectorAll('.list-routes-page');
    for (let i of elements) {
      if (i.classList.contains('choice-page')) {
        i.classList.remove('choice-page');
      };
    };
    
    if (ev.target.className === 'list-routes-page') {
      ev.target.className += ' choice-page';
    };
  };

  if (!list || !list.length) {
    return <div className='no-routes'>Ничего не найдено!</div>
  };

  return (
    <div className='list-routes'>
      <header className='header-list-routes'>
        <div className='list-routes-found'>
          <p>найдено </p>
          <span>{list ? list.length : ''}</span>
        </div>
        <div className='list-routes-sort'>
          <p>сортировать по: 
            <span className='sort-selected' onClick={getSort}>{select}</span>
          </p>
          <div className={none}>
            <div className='select-time' onClick={getSelect}>времени</div>
            <div className='select-price' onClick={getSelect}>стоимости</div>
            <div className='select-duration' onClick={getSelect}>длительности</div>
          </div>
        </div>
        <div className='list-routes-show'>
          <p>показывать по </p>
          <span>5</span>
          <span>10</span>
          <span>20</span>
        </div>
      </header>

      <main className='main-list-routes'>
        {list.map((el) => <TrainRoute route={el} key={el.departure._id}/>)}
      </main>

      <footer className='footer-list-routes'>
        <div className='list-routes-pages'>
          <div className='list-routes-pages-previous'></div>
          {pages.map((el, i) => 
            <div className='list-routes-page' onClick={choicePage} key={10 + i}>{i + 1}</div>
          )}
          <div className='list-routes-pages-next'></div>
        </div>
      </footer>
    </div>
  )
}
