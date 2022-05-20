import React from 'react';
import '../styles/main.css';
import About from './About';
import How from './How';
import Reviews from './Reviews';

export default function Main() {
  return (
    <main className='main'>
      <About/>
      <How/>
      <Reviews/>
    </main>
  )
};
