import React from 'react';
import { useSelector } from 'react-redux';
import FilterRoute from '../components/FilterRoute';
import ListRoutes from '../components/ListRoutes';
import SearchProgress from '../components/SearchProgress';
import '../styles/route.css';

export default function ChoiceRoute() {
  const { loading } = useSelector((state) => state.sliceGetRoute);
  console.log(loading);


  if (loading) {
    return <SearchProgress/>
  };

  return (
    <div className='main-route'>
      <FilterRoute/>
      <ListRoutes/>
    </div>
  )
}
