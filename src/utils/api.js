// const baseUrl = 'https://my-json-server.typicode.com/normanewright/se_project_react';
const baseUrl = 'http://localhost:3001/items';
const headers = {
  "Content-Type": "application/json",
};

// Process response
const processResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
}

// Get request
const getItems = async () => {
  const res = await fetch(
    `${baseUrl}`,
    {
      method: "GET",
      headers: headers,
    }
  );
  return processResponse(res);
};

// POST request
const addItem = async (name, imageUrl, weatherType) => {
  const body = {name: name, imageUrl: imageUrl, weather: weatherType}
  const res = await fetch(
    `${baseUrl}`,
    {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
    }
  );
  return processResponse(res);
}

// DELETE request
const removeItem = async (id) => {
  const res = await fetch(
    `${baseUrl}/${id}`,
    {
      method: "DELETE",
      headers: headers,
    }
  );
  return processResponse(res);
};

export { getItems, addItem, removeItem };