import React from 'react';
import { useSelector } from 'react-redux';
import FilterRoute from '../components/FilterRoute';
import ListRoutes from '../components/ListRoutes';
import SearchProgress from '../components/SearchProgress';

export default function ChoiceRoute() {
  const { loading } = useSelector((state) => state.sliceGetRoute);


  if (loading) {
    <SearchProgress/>
  };

  return (
    <div>
      <FilterRoute/>
      <ListRoutes/>
    </div>
  )
}
