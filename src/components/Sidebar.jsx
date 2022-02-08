import React from 'react';
import { useGlobalContext } from '../context';
import { links, social } from '../data';
import { AiOutlineClose } from 'react-icons/ai';
const Sidebar = () => {
  const { closeSidebar, sidebarIsOpen } = useGlobalContext();
  return (
    <>
      <ul
        className='sidebar'
        style={
          sidebarIsOpen
            ? { transform: 'translateX(0%)' }
            : { transform: 'translateX(-100%)' }
        }
      >
        <button className='close-btn' onClick={closeSidebar}>
          <AiOutlineClose />
        </button>
        {links.map((item) => {
          const { id, text, url, icon } = item;
          return (
            <a href='#' key={id} className='list-item'>
              <div className='icon'>{icon}</div>
              <div className='text'>{text}</div>
            </a>
          );
        })}
        <div className='social-icons'>
          {social.map((item) => {
            const { id, url, icon } = item;
            return (
              <a key={id} href={url}>
                {icon}
              </a>
            );
          })}
        </div>
      </ul>
    </>
  );
};

export default Sidebar;
