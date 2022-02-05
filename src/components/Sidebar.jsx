import React from 'react';
import { useGlobalContext } from '../context';
import { links, social } from '../data';
const Sidebar = () => {
  // const props = useGlobalContext();
  return (
    <ul className='sidebar'>
      {links.map((item) => {
        const { id, text, url, icon } = item;
        return (
          <li key={id} className='list-item'>
            <div>{icon}</div>
            <div>{text}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default Sidebar;
