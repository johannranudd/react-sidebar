import React from 'react';
import { useGlobalContext } from '../context';

const Home = () => {
  const { openModal } = useGlobalContext();
  return (
    <section className='home'>
      <button onClick={openModal}>Open Modal</button>
    </section>
  );
};

export default Home;
