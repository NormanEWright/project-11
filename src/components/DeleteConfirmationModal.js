import React from 'react';
import closeIcon from "../images/ModalWithForm/close-button.svg";

function DeleteConfirmationModal({ name, isOpen, onClose, handleCardDelete }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__delete-item-wrapper">
        <form className='popup__delete-item-form'>
          <p className="popup__confirm-text">Are you sure you want to delete this item?<br />This action is irreversible.</p>
          <button type="button" className="popup__confirm-delete-button" onClick={handleCardDelete}>Yes, delete item</button>
          <button type="button" className="popup__cancel-button" onClick={onClose}>Cancel</button>
          <button type="button" className="popup__close-button" onClick={onClose}>
            <img className="popup__close-icon" src={closeIcon} alt="Close popup button" />
          </button>
        </form>
        
      </div>
    </div>
  )
}

export default DeleteConfirmationModal;