import React, { useEffect } from 'react';
import '../styles/list-routes.css';
import { useDispatch, useSelector } from 'react-redux';
import { currentStepOne } from '../store/sliceProgressLine';
import TrainRoute from './TrainRoute';

export default function ListRoutes() {
  const { loading } = useSelector((state) => state.sliceGetRoute);
  const dispatch = useDispatch();
  const arr = [1, 2, 3, 5, 6, 7, 8, 9, 10];
  const pages = []


  useEffect(() => {
    if (!loading) {
      dispatch(currentStepOne());
    };
    for (let i = 0; i < arr.length / 5; i += 1) {
      pages.push(i);
    };
  }, []);


  return (
    <div className='list-routes'>
      <header className='header-list-routes'>
        <div className='list-routes-found'>
          <p>найдено </p>
          <span>5</span>
        </div>
        <div className='list-routes-sort'>
          <p>сортировать по: </p>
          <select name="select" className='list-routes-sort-select'>
            <option value="time" selected>времени</option>
            <option value="price">стоимости</option>
            <option value="duration">длительности</option>
          </select>
        </div>
        <div className='list-routes-show'>
          <p>показывать по </p>
          <span>5</span>
          <span>10</span>
          <span>20</span>
        </div>
      </header>
      <main className='main-list-routes'>
        <TrainRoute/>
      </main>
      <footer className='footer-list-routes'>
        <div className='list-routes-pages'>
          <div className='list-routes-pages-previous'></div>
          {pages.map((el, i) => 
            <div className='list-routes-page'>{i + 1}</div>
          )}
          <div className='list-routes-pages-next'></div>
        </div>
      </footer>
    </div>
  )
}
