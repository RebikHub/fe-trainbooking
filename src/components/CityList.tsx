import React from 'react';
import { IIdName } from '../interfaces/interfaces';
import { useAppSelector } from '../store/hooks';
import '../styles/city.css';

type Props = {
  none: string,
  getCity: (choiceCity: IIdName) => void
};

export default function CityList({ none, getCity }: Props) {
  const citiesList = useAppSelector((state) => state.sliceGetCity.items);

  return (
    <div className={none}>
      <div className='city-list'>
        {citiesList.length === 0 ?
          <div className='dots-list'>
            <div className='dots-list-absolute'>
              <div className='loader'></div>
            </div>
          </div> :
          citiesList.map((el) => <p onClick={() => getCity(el)} key={el._id}>{el.name}</p>)}
      </div>
    </div>
  );
};
