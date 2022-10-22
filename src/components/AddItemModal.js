import React from "react";
import ModalWithForm from "./ModalWithForm";

const AddItemModal = ({ isOpen, onAddItem, onClose }) => {
  const [name, setName] = React.useState('');
  const [imageUrl, setImageUrl] = React.useState('');
  const [weatherType, setWeatherType] = React.useState(null);

  React.useEffect(() => {
    // function resetInputFields(e) {
    //   setName('');
    //   setImageUrl('');
    //   setWeatherType('')
    // }
  }, [isOpen]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleWeatherTypeChange = (e) => {
    setWeatherType(e.target.value);
  };

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   onAddItem({ name, imageUrl, weatherType });
  //   onClose();
  // }

  return (
    <ModalWithForm
      title="New garment"
      id="addGarment"
      name="add"
      buttonText="Add garment"
      isOpen={isOpen}
      onClose={onClose}
    >
      <label htmlFor="name" className="popup__form-label">Name<br />
        <input type="text" id="name" className="popup__form-input" onChange={handleNameChange} value={name} placeholder="Name" required />
      </label>
      <label htmlFor="link" className="popup__form-label">Image<br />
        <input type="url" id="link" className="popup__form-input" onChange={handleImageUrlChange} value={imageUrl} placeholder="Image URL" required />
      </label>
      <div className="popup__form-radio-section">
        <h4 className="popup__form-radio-heading">Select the weather type:</h4>
        <ul className="popup__form-radio-list">
          <li className="popup__form-radio-element">
            <label htmlFor="hot" className={`popup__form-radio-label ${weatherType === 'hot' ? 'popup__form-radio-label_checked' : ''}`}>
              <input
                type="radio" 
                id="hot" 
                name="weather" 
                value="hot" 
                className="popup__form-radio" 
                checked={weatherType === 'hot'}
                onChange={handleWeatherTypeChange} />
                Hot
            </label>
          </li>
          <li className="popup__form-radio-element">
            <label htmlFor="warm" className={`popup__form-radio-label ${weatherType === 'warm' ? 'popup__form-radio-label_checked' : ''}`}>
              <input 
                type="radio" 
                id="warm" 
                name="weather" 
                value="warm" 
                className="popup__form-radio"
                checked={weatherType === 'warm'} 
                onChange={handleWeatherTypeChange} 
              />
                Warm
            </label>
          </li>
          <li className="popup__form-radio-element">
            <label htmlFor="cold" className={`popup__form-radio-label ${weatherType === 'cold' ? 'popup__form-radio-label_checked' : ''}`}>
              <input 
                type="radio" 
                id="cold" 
                name="weather" 
                value="cold" 
                className="popup__form-radio"
                checked={weatherType === 'cold'} 
                onChange={handleWeatherTypeChange} 
              />
               Cold
            </label>
          </li>
        </ul>
      </div>
    </ModalWithForm>
  )
};

export default AddItemModal;