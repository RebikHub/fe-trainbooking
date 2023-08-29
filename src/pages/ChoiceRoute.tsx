import React from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import FilterRoute from '../components/FilterRoute';
import LastRoutes from '../components/LastRoutes';
import SearchProgress from '../components/SearchProgress';
import TripDetails from '../components/TripDetails';
import { useAppSelector } from '../store/hooks';
import '../styles/route.css';
import { sliceChoiceState } from '../store/sliceChoice';

export default function ChoiceRoute() {
  const routeLoading = useAppSelector((state) => state.sliceGetRoute.loading);
  const seatsLoading = useAppSelector((state) => state.sliceGetSeats.loading);
  const { route } = useAppSelector(sliceChoiceState);
  const postLoading = useAppSelector((state) => state.slicePostOrder.loading);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(route);

    if (route && location.pathname === '/route/coach') {
      navigate('/route');
    };
  }, [location.pathname, navigate, route]);

  if (routeLoading || seatsLoading || postLoading) {
    return <SearchProgress />
  };

  return (
    <div className='main-route'>
      <div className='left-side'>
        {location.pathname === '/route/passengers' ||
          location.pathname === '/route/payment' ||
          location.pathname === '/route/order' ? <TripDetails /> :
          <>
            <FilterRoute />
            <LastRoutes />
          </>
        }
      </div>
      <div className='right-side'>
        <Outlet />
      </div>
    </div>
  );
};
