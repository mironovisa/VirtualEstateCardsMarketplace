import React from 'react';
import { usePopupMessage } from '../Context/PopupMessageContext';
import '../CompStyles/PopupMessage.css'; 

function PopupMessage() {
  const { popupMessage } = usePopupMessage();

  return (
    <div className={`popupMessage ${popupMessage ? 'active' : ''}`}>
      <div>{popupMessage}</div>
    </div>
  )
}

export default PopupMessage;



/*

import { usePopupMessage } from '../Context/PopupMessageContext';


export function useSaveHandlers(setIsSaved, _id, savedProps) {
  const { showPopupMessage } = usePopupMessage();
  function handleSave() {
    handleAction(_id, 'Saved', savedProps).then(() => {
      setIsSaved(true);
      showPopupMessage(`You successfully saved ${savedProps.name}!`);

    });
  }
  return {
    handleSave,
  };
}

*/