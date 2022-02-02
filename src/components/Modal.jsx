import React from 'react';
import { useGlobalContext } from '../context';
const Modal = () => {
  const { id, name } = useGlobalContext();
  return <div className='modal'>modal</div>;
};

export default Modal;
