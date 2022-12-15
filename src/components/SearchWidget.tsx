import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { clearAllFiltering } from '../store/sliceFilter';
import { requestGetLastRoutes } from '../store/sliceGetLastRoutes';
import { clearRouteList, getRouteRequest } from '../store/sliceGetRoute';
import { clearStepAll, currentStepOne } from '../store/sliceProgressLine';
import '../styles/search-widget.css';
import Error from './Error';
import SearchCity from './SearchCity';
import SearchDate from './SearchDate';

type Props = {
  classStyle: string
};

export default function SearchWidget({classStyle}: Props) {
  const [error, setError] = useState<boolean>(false);
  const { fromDate, toDate, fromCity, toCity } = useAppSelector((state) => state.sliceChoice);
  const { transform } = useAppSelector((state) => state.sliceHeaderTransform);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      dispatch(clearStepAll());
    };
  }, [dispatch, location.pathname]);

  function submit() {
    dispatch(clearRouteList());
    dispatch(clearAllFiltering());
    if (!transform && location.pathname === '/' && fromCity !== null && toCity !== null) {
      navigate('/route');
      dispatch(getRouteRequest({fromDate, toDate, fromCity, toCity}));
      dispatch(currentStepOne());
      dispatch(requestGetLastRoutes());
    } else if (transform && location.pathname === '/route' && fromCity !== null && toCity !== null) {
      dispatch(getRouteRequest({fromDate, toDate, fromCity, toCity}));
      dispatch(requestGetLastRoutes());
    }  else {
      setError(true)
    };
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(false), 2 * 1000);
      return () => clearTimeout(timer)
    };
  }, [error]);

  return (
    <div className={classStyle}>
    
      <Error classStyle={error ? transform ?'error-transform' : 'error' : 'none'}/>

      <div className='search-inputs'>
        <SearchCity/>
        <SearchDate/>
      </div>

      <button className='search-btn' onClick={submit} type='button'>найти билеты</button>

    </div>
  );
};
