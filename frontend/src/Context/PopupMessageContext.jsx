import React, { useContext, useState } from 'react';

const PopupMessageContext = React.createContext();

export function usePopupMessage() {
  return useContext(PopupMessageContext);
}

export function PopupMessageProvider({ children }) {
  const [popupMessage, setPopupMessage] = useState('');

  const showPopupMessage = (message) => {
    setPopupMessage(message);
    setTimeout(clearPopupMessage, 3000); 
  };

  const clearPopupMessage = () => {
    setPopupMessage('');
  };

  return (
    <PopupMessageContext.Provider value={{ popupMessage, showPopupMessage, clearPopupMessage }}>
      {children}
    </PopupMessageContext.Provider>
  );
}