import React from 'react';
import { useSelector } from 'react-redux';
import FilterRoute from '../components/FilterRoute';
import LastRoutes from '../components/LastRoutes';
import ListRoutes from '../components/ListRoutes';
import SearchProgress from '../components/SearchProgress';
import '../styles/route.css';

export default function ChoiceRoute() {
  const { loading } = useSelector((state) => state.sliceGetRoute);

  if (loading) {
    return <SearchProgress/>
  };

  return (
    <div className='main-route'>
      <div className='left-side'>
        <FilterRoute/>
        <LastRoutes/>
      </div>
      <div className='right-side'>
        <ListRoutes/>
      </div>
    </div>
  )
}
