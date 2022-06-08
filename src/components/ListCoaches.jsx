import React from 'react'
import { useSelector } from 'react-redux';

export default function ListCoaches() {
  const { coaches } = useSelector((state) => state.sliceGetSeats);

  console.log(coaches);
  return (
    <div>ListCoaches</div>
  )
}
