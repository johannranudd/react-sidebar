import React from 'react';
import { useGlobalContext } from '../context';
import { AiOutlineClose } from 'react-icons/ai';
const Modal = () => {
  const { modalIsOpen, closeModal } = useGlobalContext();
  return (
    <>
      {modalIsOpen && (
        <div className='backdrop'>
          <div className='modal'>
            <button onClick={closeModal}>
              <AiOutlineClose className='icon' />
            </button>
            <h3>Modal</h3>
          </div>
          ;
        </div>
      )}
    </>
  );
};

export default Modal;
