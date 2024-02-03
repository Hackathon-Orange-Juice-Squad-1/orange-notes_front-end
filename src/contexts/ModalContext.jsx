import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <ModalContext.Provider value={{ open, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};