import React, { useEffect, useState } from 'react';
import '../styles/list-routes.css';
import { useDispatch, useSelector } from 'react-redux';
import { currentStepOne } from '../store/sliceProgressLine';
import TrainRoute from './TrainRoute';
import { addRoutes, filtering } from '../store/sliceFilter';
import { filteringPricesRange } from '../utils/minMaxPrices';
import { sortingDuration, sortingPrices, sortingTime } from '../utils/sortingTrain';
import { timeForSort } from '../utils/trainDate';

export default function ListRoutes() {
  const { loading, route } = useSelector((state) => state.sliceGetRoute);
  const {
    filteredRoutes,
    filterSeats,
    filterPrices,
    filterTimeFrom,
    filterTimeTo
  } = useSelector((state) => state.sliceFilter);
  const dispatch = useDispatch();
  const [list, setList] = useState([]);
  const [none, setNone] = useState('none');
  const [select, setSelect] = useState('времени');
  const [pages, setPages] = useState([]);
  const [showOnPages, setShowOnPages] = useState(5);
  const [startSlice, setStartSlice] = useState(0);
  const [endSlice, setEndSlice] = useState(5);
  const [lengthPage, setLengthPage] = useState();

  useEffect(() => {
    dispatch(filtering({
      start: filterPrices.start,
      end: filterPrices.end,
      filteringPricesRange,
      timeForSort
    }));
  }, [filterSeats, filterPrices, filterTimeFrom, filterTimeTo]);

  useEffect(() => {
    const timer = setTimeout(() => setList(filteredRoutes), 500);
    return () => clearTimeout(timer);
  }, [filteredRoutes]);

  useEffect(() => {
    if (route.items && route.items.length > 0) {
      dispatch(addRoutes(route.items));
      setList(route.items);
      setLengthPage(Math.floor(list.length / showOnPages));
    };
  }, [loading, route]);

  useEffect(() => {
    if (!loading) {
      dispatch(currentStepOne());
    };

    if (list) {
      setPages([]);
      const arr = []
      for (let i = 0; i < (list.length / showOnPages); i += 1) {
        arr.push(i);
      };
      setPages(arr);
    };
  }, [list, showOnPages]);

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
    if (ev.target.outerText === 'времени') {
      console.log(ev.target.outerText);
      setList(sortingTime(list));
    };
    if (ev.target.outerText === 'стоимости') {
      setList(sortingPrices(list));
    };
    if (ev.target.outerText === 'длительности') {
      setList(sortingDuration(list));
    };
  };

  function getShowOnPages(ev) {
    setShowOnPages(Number(ev.target.outerText));
    setStartSlice(0);
    setLengthPage(Number(ev.target.outerText));
    setEndSlice(Number(ev.target.outerText));
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
    setStartSlice(lengthPage * (Number(ev.target.outerText) - 1));
    setEndSlice(lengthPage * Number(ev.target.outerText));
  };

  function prevPage() {
    if (startSlice >= lengthPage) {
      setStartSlice(startSlice - lengthPage);
    };

    if (endSlice >= lengthPage * 2) {
      setEndSlice(endSlice - lengthPage);
    };

  };

  function nextPage() {
    if (startSlice < (lengthPage * (pages.length - 1))) {
      setStartSlice(startSlice + lengthPage);
    };

    if (endSlice < lengthPage * pages.length) {
      setEndSlice(endSlice + lengthPage);
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
          <span onClick={getShowOnPages}>5</span>
          <span onClick={getShowOnPages}>10</span>
          <span onClick={getShowOnPages}>20</span>
        </div>
      </header>

      <main className='main-list-routes'>
        {list.slice(startSlice, endSlice).map((el) => <TrainRoute route={el} key={el.departure._id}/>)}
      </main>

      <footer className='footer-list-routes'>
        <div className='list-routes-pages'>
          <div className='list-routes-pages-previous' onClick={prevPage}></div>
          {pages.map((el, i) => 
            <div className='list-routes-page' onClick={choicePage} key={10 + i}>{i + 1}</div>
          )}
          <div className='list-routes-pages-next' onClick={nextPage}></div>
        </div>
      </footer>
    </div>
  )
}
