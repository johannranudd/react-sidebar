import React from 'react';
import { useGlobalContext } from '../context';
import { FaBars } from 'react-icons/fa';

const Home = () => {
  const { openModal, openSidebar } = useGlobalContext();
  return (
    <section className='home'>
      <div className='menu-icon-container'>
        <FaBars className='icon' onClick={openSidebar} />
      </div>
      <button onClick={openModal}>Open Modal</button>
    </section>
  );
};

export default Home;
