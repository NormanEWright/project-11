import React from "react";
import ModalWithForm from "./ModalWithForm";

const AddItemModal = ({ isOpen, closePopup, onAddItem }) => {
  const [name, setName] = React.useState('');
  const [imageUrl, setImageUrl] = React.useState('');
  const [weather, setWeather] = React.useState(null);

  React.useEffect(() => {
    setName('');
    setImageUrl('');
  }, [isOpen]);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleImage = (e) => {
    setImageUrl(e.target.value);
  };

  const handleWeather = (e) => {
    setWeather(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem(name, imageUrl, weather);
    closePopup();
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      title="New garment"
      name="add"
      buttonText="Add garment"
      closePopup={closePopup}
      onAddItem={onAddItem}
      handleSubmit={handleSubmit}
      handleName={handleName}
      handleWeather={handleWeather}
      handleImageChange={handleImage}
    >
      <label htmlFor="name" className="popup__form-label">Name<br />
        <input type="text" id="name" className="popup__form-input" onChange={handleName} value={name} placeholder="Name" required />
      </label>
      <label htmlFor="link" className="popup__form-label">Image<br />
        <input type="url" id="link" className="popup__form-input" onChange={handleImage} value={imageUrl} placeholder="Image URL" required />
      </label>
      <div className="popup__form-radio-section">
        <h4 className="popup__form-radio-heading">Select the weather type:</h4>
        <ul className="popup__form-radio-list">
          <li className="popup__form-radio-element">
            <label htmlFor="hot" className={`popup__form-radio-label ${weather === 'hot' ? 'popup__form-radio-label_checked' : ''}`}>
              <input type="radio" id="hot" name="weather" value="hot" className="popup__form-radio" checked={weather} onChange={handleWeather} />
              Hot
            </label>
          </li>
          <li className="popup__form-radio-element">
            <label htmlFor="warm" className={`popup__form-radio-label ${weather === 'warm' ? 'popup__form-radio-label_checked' : ''}`}>
              <input type="radio" id="warm" name="weather" value="warm" className="popup__form-radio" checked={weather} onChange={handleWeather} />
              Warm
            </label>
          </li>
          <li className="popup__form-radio-element">
            <label htmlFor="cold" className={`popup__form-radio-label ${weather === 'cold' ? 'popup__form-radio-label_checked' : ''}`}>
              <input type="radio" id="cold" name="weather" value="cold" className="popup__form-radio" checked={weather} onChange={handleWeather} />
              Cold
            </label>
          </li>
        </ul>
      </div>
    </ModalWithForm>
  )
};

export default AddItemModal;