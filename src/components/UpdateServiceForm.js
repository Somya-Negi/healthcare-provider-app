import React, { useState, useEffect } from 'react';

function UpdateServiceForm({ currentService, updateService, cancelUpdate }) {
  const [name, setName] = useState(currentService.name);
  const [description, setDescription] = useState(currentService.description);
  const [price, setPrice] = useState(currentService.price);

  useEffect(() => {
    setName(currentService.name);
    setDescription(currentService.description);
    setPrice(currentService.price);
  }, [currentService]);


  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (!name || !description || !price) {
      alert("All fields are required");
      return;
    }

   
    const parsedPrice = parseFloat(price);
    if (isNaN(parsedPrice)) {
      alert("Please enter a valid price");
      return;
    }

  
    handleUpdate();
  };

 
  const handleUpdate = () => {
    const updatedService = {
      id: currentService.id,
      name,
      description,
      price: parseFloat(price), 
    };

    updateService(updatedService);
  };

  return (
    <div className='update-service-form'>
      <h2>Update Service</h2>
      <form onSubmit={handleSubmit} className="form-group">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Service Name"
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Service Description"
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="text"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Service Price"
          />
        </div>
        <div className="button-group" style={{ marginTop: '10px' }}>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={cancelUpdate}
            style={{ marginLeft: '10px' }} 
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateServiceForm;
