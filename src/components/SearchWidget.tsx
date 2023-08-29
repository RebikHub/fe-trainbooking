import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { clearAllFiltering } from '../store/sliceFilter';
import { clearRouteList, getRouteThunk } from '../store/sliceGetRoute';
import { clearStepAll, currentStepOne } from '../store/sliceProgressLine';
import '../styles/search-widget.css';
import Error from './Error';
import SearchCity from './SearchCity';
import SearchDate from './SearchDate';
import { sliceChoiceState } from '../store/sliceChoice';

type Props = {
  classStyle: string
};

export default function SearchWidget({ classStyle }: Props) {
  const [error, setError] = useState<boolean>(false);
  const { fromDate, toDate, fromCity, toCity } = useAppSelector(sliceChoiceState);
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
      dispatch(getRouteThunk({ fromDate, toDate, fromCity, toCity }));
      dispatch(currentStepOne());
    } else if (transform && location.pathname === '/route' && fromCity !== null && toCity !== null) {
      dispatch(getRouteThunk({ fromDate, toDate, fromCity, toCity }));
    } else {
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

      <Error classStyle={error ? transform ? 'error-transform' : 'error' : 'none'} />

      <div className='search-inputs'>
        <SearchCity />
        <SearchDate />
      </div>

      <button className='search-btn' onClick={submit} type='button'>найти билеты</button>

    </div>
  );
};
