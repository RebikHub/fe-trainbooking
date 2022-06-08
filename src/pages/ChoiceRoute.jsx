import React from 'react';
import { useSelector } from 'react-redux';
import FilterRoute from '../components/FilterRoute';
import LastRoutes from '../components/LastRoutes';
import ListCoaches from '../components/ListCoaches';
import ListRoutes from '../components/ListRoutes';
import SearchProgress from '../components/SearchProgress';
import '../styles/route.css';

export default function ChoiceRoute() {
  const { loading } = useSelector((state) => state.sliceGetRoute);
  const { loadingSeats, coaches } = useSelector((state) => state.sliceGetSeats);

  if (loading || loadingSeats) {
    return <SearchProgress/>
  };

  return (
    <div className='main-route'>
      <div className='left-side'>
        <FilterRoute/>
        <LastRoutes/>
      </div>
      <div className='right-side'>
        {coaches.length > 0 ? <ListCoaches/> : <ListRoutes/>}
      </div>
    </div>
  );
};
