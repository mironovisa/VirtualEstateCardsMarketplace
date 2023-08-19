import React, { useState } from 'react';
import '../CompStyles/SearchPropertyCont.css'

const SearchPropertyContainer = () => {
  const [searchParams, setSearchParams] = useState({
    type: '',
    status: '',
    location: '',
    minPrice: '',
    maxPrice: '',
    minRentalPrice: '',
    maxRentalPrice: '',
    upgradesDone: '',
    upgradesAvailable: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSearchParams((prevParams) => ({
      ...prevParams,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(searchParams);
  };

  return (
    <div className="search-property-container">
      <h2>Search Properties</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Type:</label>
          <select name="type" onChange={handleInputChange}>
            <option value="">Select</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="building">Building</option>
            <option value="store">Store</option>
            <option value="parking_space">Parking Space</option>
          </select>
        </div>
        <div>
          <label>Status:</label>
          <select name="status" onChange={handleInputChange}>
            <option value="">Select</option>
            <option value="for_rent">For Rent</option>
            <option value="for_sale">For Sale</option>
            <option value="occupied">Occupied</option>
          </select>
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={searchParams.location}
            onChange={handleInputChange}
          />
        </div>
        <div>
  <label>Price Range:</label>
  <select name="minPrice" onChange={handleInputChange}>
    <option value="">Min Price</option>
    <option value="100000">$100,000</option>
    <option value="200000">$200,000</option>
    {/* Add more options as needed */}
  </select>
  <select name="maxPrice" onChange={handleInputChange}>
    <option value="">Max Price</option>
    <option value="500000">$500,000</option>
    <option value="1000000">$1,000,000</option>
    {/* Add more options as needed */}
  </select>
</div>

<div>
  <label>Rental Price Range:</label>
  <select name="minRentalPrice" onChange={handleInputChange}>
    <option value="">Min Rental Price</option>
    <option value="500">$500</option>
    <option value="1000">$1000</option>
    {/* Add more options as needed */}
  </select>
  <select name="maxRentalPrice" onChange={handleInputChange}>
    <option value="">Max Rental Price</option>
    <option value="2000">$2000</option>
    <option value="3000">$3000</option>
    {/* Add more options as needed */}
  </select>
</div>

<div>
  <label>Upgrades Done:</label>
  <select name="upgradesDone" onChange={handleInputChange}>
    <option value="">Select</option>
    <option value="kitchen_remodel">Kitchen Remodel</option>
    <option value="bathroom_remodel">Bathroom Remodel</option>
    {/* Add more options as needed */}
  </select>
</div>

<div>
  <label>Upgrades Available:</label>
  <select name="upgradesAvailable" onChange={handleInputChange}>
    <option value="">Select</option>
    <option value="pool">Pool</option>
    <option value="garden">Garden</option>
    {/* Add more options as needed */}
  </select>
</div>

<button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchPropertyContainer;