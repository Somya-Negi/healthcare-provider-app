import React from 'react';

function ServiceList({ services, onEdit, onDelete }) {
  return (
    <div className="service-list">
      <h2>Available Healthcare Services</h2>
      <ul className="list-group">
        {services.map(service => (
          <li key={service.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5>{service.name}</h5>
              <p>{service.description}</p>
              <span>$ {service.price}</span>
            </div>
            <div className="button-group"> 
              <button
                className="btn btn-sm btn-warning"
                onClick={() => onEdit(service)}
              >
                Edit
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => onDelete(service.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceList;
