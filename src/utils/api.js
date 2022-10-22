// const baseUrl = 'https://my-json-server.typicode.com/normanewright/se_project_react';
const baseUrl = 'http://localhost:3001/items';

// Process response
const processResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
}

// Get request
const getItems = () => {
  return fetch(
    `${baseUrl}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
  .then(processResponse)
};

// POST request
const addItem = ({ id, name, imageUrl, weatherType }) => {
  return fetch(
    `${baseUrl}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, imageUrl, weatherType })
    }
  )
  .then(processResponse)
}

// DELETE request
const removeItem = (baseUrl, id) => {
  return fetch(
    `${baseUrl}/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
  .then(processResponse);
};

export { getItems, addItem, removeItem };