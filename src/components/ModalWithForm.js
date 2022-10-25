import React from "react";
import "../blocks/popup.css";
import closeIcon from "../images/ModalWithForm/close-button.svg";

function ModalWithForm({ name, title, children, buttonText, isOpen, closePopup, handleSubmit }) {

  return(
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <form action="submit" className="popup__form" id="add-garment-form" onSubmit={handleSubmit} >
        <h3 className="popup__form-heading">{title}</h3>
        {children}
        <button type="submit" className="popup__form-add-button" >{buttonText}</button>
        <button type="button" className="popup__close-button" onClick={closePopup}>
          <img className="popup__close-icon" src={closeIcon} alt="Close popup button" />
        </button>
      </form>
    </div>
  )
}

export default ModalWithForm;