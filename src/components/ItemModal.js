import React from "react";
import "../blocks/popup.css";
import closeIcon from "../images/ItemModal/close-button.svg";
import "../blocks/item-modal.css";

function ItemModal({ name, isOpen, closePopup, data, openConfirmationModal, setDeleteItem }) {

  const deleteItem = () => {
    setDeleteItem(data.id);
    openConfirmationModal();
  }

  return(
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__item-wrapper">
        <img className="popup__item-image" src={data.link} alt={data.title} />
        <p className="popup__item-title" >{data.title}</p>
        <p className="popup__item-description" >Weather: {data.description}</p>
        <button type="button" className="popup__delete-button" onClick={deleteItem}>Delete</button>
        <button type="button" className="popup__close-button" onClick={closePopup}>
          <img className="popup__close-icon" src={closeIcon} alt="Close popup button" />
        </button>
      </div>
    </div>
  )
}

export default ItemModal;