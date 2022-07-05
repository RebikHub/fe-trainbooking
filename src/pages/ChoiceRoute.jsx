import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import FilterRoute from '../components/FilterRoute';
import LastRoutes from '../components/LastRoutes';
import SearchProgress from '../components/SearchProgress';
import TripDetails from '../components/TripDetails';
import '../styles/route.css';

export default function ChoiceRoute() {
  const { loading } = useSelector((state) => state.sliceGetRoute);
  const { loadingSeats } = useSelector((state) => state.sliceGetSeats);
  const { route } = useSelector((state) => state.sliceChoice);
  let location = useLocation();
  const navigate = useNavigate();

  const { user, departure } = useSelector((state) => state.sliceOrder);

  console.log(user, departure);

  useEffect(() => {
    if (route.length === 0 && location.pathname === '/route/coach') {
      navigate('/route');
    };
  }, [route]);

  if (loading || loadingSeats) {
    return <SearchProgress/>
  };

  return (
    <div className='main-route'>
      <div className='left-side'>
        {location.pathname === '/route/passengers' ||
        location.pathname === '/route/payment' ||
        location.pathname === '/route/order' ? <TripDetails/> :
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
