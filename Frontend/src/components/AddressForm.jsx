import { useState } from "react";

const AddressForm = () => {
  const [address, setAddress] = useState({
    country: "",
    city: "",
    address1: "",
    address2: "",
    zip: "",
    type: "Home",
  });

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Address Submitted:", address);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
      <input type="text" name="country" placeholder="Country" onChange={handleChange} value={address.country} />
      <input type="text" name="city" placeholder="City" onChange={handleChange} value={address.city} />
      <input type="text" name="address1" placeholder="Address Line 1" onChange={handleChange} value={address.address1} />
      <input type="text" name="address2" placeholder="Address Line 2" onChange={handleChange} value={address.address2} />
      <input type="text" name="zip" placeholder="Zip Code" onChange={handleChange} value={address.zip} />
      <select name="type" onChange={handleChange} value={address.type}>
        <option value="Home">Home</option>
        <option value="Work">Work</option>
      </select>
      <button type="submit" className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Save Address</button>
    </form>
  );
};

export default AddressForm;
