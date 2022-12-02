/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import '../styles/list-routes.css';
import { useDispatch, useSelector } from 'react-redux';
import { clearStepAll, currentStepOne } from '../store/sliceProgressLine';
import TrainRoute from '../components/TrainRoute';
import { addRoutes, filtering } from '../store/sliceFilter';
import { filteringPricesRange } from '../utils/minMaxPrices';
import { sortingDuration, sortingPrices, sortingTime } from '../utils/sortingTrain';
import { dateForComparison, timeForSort } from '../utils/trainDate';

export default function ListRoutes() {
  const { loading, route } = useSelector((state) => state.sliceGetRoute);
  const { fromDate } = useSelector((state) => state.sliceChoice);
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
  const [lengthPage, setLengthPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(clearStepAll());
  }, []);

  useEffect(() => {
    dispatch(filtering({
      start: filterPrices.start,
      end: filterPrices.end,
      date: fromDate,
      filteringPricesRange,
      timeForSort,
      dateForComparison
    }));
  }, [filterSeats, filterPrices, filterTimeFrom, filterTimeTo, fromDate]);

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
      for (let i = 0; i < (list.length / showOnPages); i += 1) {
        arr.push(i);
      };
      setPages(arr);
    };
  }, [list, showOnPages]);

  useEffect(() => {
    if (list.length > 0) {
      swapClassStyle(currentPage);
    };
  }, [currentPage]);

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
    setCurrentPage(Number(ev.target.outerText));
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

    if ((currentPage - 1) > 0 && pages.length > 1) {
      setCurrentPage((prev) => prev -= 1);
    };

  };

  function nextPage() {
    if (startSlice < (lengthPage * (pages.length - 1))) {
      setStartSlice(startSlice + lengthPage);
    };

    if (endSlice < lengthPage * pages.length) {
      setEndSlice(endSlice + lengthPage);
    };

    if (currentPage < pages.length) {
      setCurrentPage((prev) => prev += 1);
    };

  };

  function swapClassStyle(page) {
    const elements = document.querySelectorAll('.list-routes-page');
    for (let i of elements) {
      if (i.classList.contains('choice-page')) {
        i.classList.remove('choice-page');
      };
    };
    elements[page - 1].classList.add('choice-page');
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
  );
};
