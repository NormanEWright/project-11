import React, { useState } from 'react';

function NewGarmentForm() {
  const [weatherType, setWeatherType] = useState("hot");

  const handleWeather = (evt) => {
    setWeatherType(evt.target.value);
  }

  return (
    <>
      <label htmlFor="name" className="popup__form-label">Name<br />
        <input type="text" id="name" className="popup__form-input" placeholder="Name" required />
      </label>
      <label htmlFor="link" className="popup__form-label">Image<br />
        <input type="url" id="link" className="popup__form-input" placeholder="Image URL" required />
      </label>
      <div className="popup__form-radio-section">
        <h4 className="popup__form-radio-heading">Select the weather type:</h4>
        <ul className="popup__form-radio-list">
          <li className="popup__form-radio-element">
            <label htmlFor="hot" className={`popup__form-radio-label ${weatherType === 'hot' ? 'popup__form-radio-label_checked' : ''}`}>
              <input type="radio" id="hot" name="weather" value="hot" className="popup__form-radio" onChange={handleWeather} />
              Hot
            </label>
          </li>
          <li className="popup__form-radio-element">
            <label htmlFor="warm" className={`popup__form-radio-label ${weatherType === 'warm' ? 'popup__form-radio-label_checked' : ''}`}>
              <input type="radio" id="warm" name="weather" value="warm" className="popup__form-radio" onChange={handleWeather} />
              Warm
            </label>
          </li>
          <li className="popup__form-radio-element">
            <label htmlFor="cold" className={`popup__form-radio-label ${weatherType === 'cold' ? 'popup__form-radio-label_checked' : ''}`}>
              <input type="radio" id="cold" name="weather" value="cold" className="popup__form-radio" onChange={handleWeather} />
              Cold
            </label>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NewGarmentForm;