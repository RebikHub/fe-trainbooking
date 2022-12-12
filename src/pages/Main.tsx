import React from 'react';
import '../styles/main.css';
import About from '../components/About';
import How from '../components/How';
import Reviews from '../components/Reviews';

export default function Main() {
  return (
    <main className='main'>
      <About/>
      <How/>
      <Reviews/>
    </main>
  );
};
