import React, { useState, useEffect } from 'react';
import ServiceList from './components/ServiceList';
import AddServiceForm from './components/AddServiceForm';
import UpdateServiceForm from './components/UpdateServiceForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [services, setServices] = useState([
    { id: 1, name: 'General Consultation', description: 'Routine health check-up', price: 50 },
    { id: 2, name: 'X-Ray', description: 'Chest X-ray for diagnostic purposes', price: 100 },
    { id: 3, name: 'MRI', description: 'Magnetic resonance imaging for brain scans', price: 200 },
  
  ]);

  const [serviceToUpdate, setServiceToUpdate] = useState(null);

 
  const addService = (newService) => setServices([...services, newService]);

  
  const updateService = (updatedService) => {
    setServices(services.map(service => 
      service.id === updatedService.id ? updatedService : service
    ));
    setServiceToUpdate(null);  
  };

  
  const deleteService = (serviceId) => {
    setServices(services.filter(service => service.id !== serviceId));
  };

  
  const handleEditClick = (service) => setServiceToUpdate(service);

  
  const cancelUpdate = () => setServiceToUpdate(null);

  useEffect(() => {
    console.log("Service list loaded");
  }, []);

  return (
    <div className="container">
      <h1 className="my-4 text-center">Healthcare Services</h1>

      <div className="row">
        <div className="col-md-6">
          {serviceToUpdate ? (
            <UpdateServiceForm
              currentService={serviceToUpdate}
              updateService={updateService}
              cancelUpdate={cancelUpdate}
            />
          ) : (
            <AddServiceForm addService={addService} />
          )}
        </div>

        <div className="col-md-6">
          <ServiceList
            services={services}
            onEdit={handleEditClick}
            onDelete={deleteService}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
