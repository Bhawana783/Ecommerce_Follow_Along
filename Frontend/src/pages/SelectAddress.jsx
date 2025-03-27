import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SelectAddress = () => {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/addresses')
      .then((res) => res.json())
      .then((data) => setAddresses(data))
      .catch((err) => console.error('Failed to fetch addresses:', err));
  }, []);

  const handleSelect = (address) => {
    setSelectedAddress(address);
  };

  const handleConfirm = () => {
    if (selectedAddress) {
      console.log('Selected Address:', selectedAddress);
      alert(`Order will be delivered to: ${selectedAddress.city}`);
      navigate('/'); // Redirect to home or order confirmation page
    } else {
      alert('Please select an address!');
    }
  };

  return (
    <div className="select-address-page">
      <h1>Select Delivery Address 📍</h1>
      {addresses.length > 0 ? (
        addresses.map((addr, index) => (
          <div key={index} className="address-card" onClick={() => handleSelect(addr)}>
            <p>{addr.address1}, {addr.city}, {addr.country}</p>
            <p>{addr.zipcode}</p>
          </div>
        ))
      ) : (
        <p>No addresses found. Please add one!</p>
      )}
      <button onClick={handleConfirm}>Confirm Address ✅</button>
    </div>
  );
};

export default SelectAddress;
