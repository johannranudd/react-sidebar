import React, { useContext, useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const openSidebar = () => {
    setSidebarIsOpen(true);
  };
  const closeSidebar = () => {
    setSidebarIsOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        openModal,
        modalIsOpen,
        closeModal,
        closeSidebar,
        openSidebar,
        sidebarIsOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
