import React from "react";
import "../blocks/popup.css";
import closeIcon from "../images/ModalWithForm/close-button.svg";

function ModalWithForm(props) {
  return(
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <form action="submit" className="popup__form" id="add-garment-form" noValidate>
        <h3 className="popup__form-heading">{props.title}</h3>
        {props.children}
        <button type="submit" className="popup__form-add-button" >{props.buttonText}</button>
        <button type="button" className="popup__close-button" onClick={props.onClose}>
          <img className="popup__close-icon" src={closeIcon} alt="Close popup button" />
        </button>
      </form>
    </div>
  )
}

export default ModalWithForm;