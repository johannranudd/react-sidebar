import React from 'react';
import { useGlobalContext } from '../context';

const Sidebar = () => {
  const props = useGlobalContext();
  return <div>sidebar</div>;
};

export default Sidebar;
