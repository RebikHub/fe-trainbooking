import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import FilterRoute from '../components/FilterRoute';
import LastRoutes from '../components/LastRoutes';
import SearchProgress from '../components/SearchProgress';
import TripDetails from '../components/TripDetails';
import '../styles/route.css';

export default function ChoiceRoute() {
  const { loading } = useSelector((state) => state.sliceGetRoute);
  const { loadingSeats } = useSelector((state) => state.sliceGetSeats);
  let location = useLocation();

  if (loading || loadingSeats) {
    return <SearchProgress/>
  };

  return (
    <div className='main-route'>
      <div className='left-side'>
        {location.pathname === '/route/passengers' || location.pathname === '/route/payment' ? <TripDetails/> :
          <>
            <FilterRoute/>
            <LastRoutes/>
          </>
        }
      </div>
      <div className='right-side'>
        <Outlet/>
        {/* {coaches.length > 0 ? <ListCoaches/> : <ListRoutes/>} */}
      </div>
    </div>
  );
};
