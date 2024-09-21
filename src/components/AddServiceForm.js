import React, { useState } from 'react';


function AddServiceForm({ addService }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !description || !price) {
      setErrorMessage('All fields are required');
      return;
    }

    if (isNaN(price)) {
      setErrorMessage('Price must be a number');
      return;
    }

    const newService = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      description,
      price: parseFloat(price),
    };

    addService(newService);
    setName('');
    setDescription('');
    setPrice('');
    setErrorMessage('');
  };

  return (
    <div className="add-service-form">
      <h2>Add a New Service</h2>
      <form onSubmit={handleSubmit}>
        {errorMessage && <p>{errorMessage}</p>}
        
        <div className="form-group">
          <label>Name:</label>
          <input 
          className="form-control"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Service Name" />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <textarea
          className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Service Description" />
        </div>

        <div className="form-group">
          <label>Price:</label>
          <input
          className="form-control"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Service Price" />
        </div>

        <button type="submit">Add Service</button>
      </form>
    </div>
  );
}

export default AddServiceForm;
