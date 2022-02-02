import React from 'react';
import { useGlobalContext } from '../context';

const Home = () => {
  const { id, name } = useGlobalContext();
  return (
    <section className='home'>
      <button>Open Modal</button>
    </section>
  );
};

export default Home;
