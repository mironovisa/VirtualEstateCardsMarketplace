import React, { useState } from 'react';
import '../CompStyles/SearchContainer.css'

const SearchContainer = () => {
  const [searchParams, setSearchParams] = useState({
    category: '',
    status: '',
    location: '',
    minPrice: '',
    maxPrice: '',
  
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
    <div className="search-container">
      <h2>Search Properties</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Category:</label>
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
            <option value="for_rent">sold</option>
            <option value="for_sale">available</option>
          </select>
        </div>
        
        <div>
          <label>Price Range:</label>
          <select name="minPrice" onChange={handleInputChange}>
            <option value="">Min Price</option>
            <option value="100000">$10</option>
            <option value="200000">$20</option>
            {/* Add more options as needed */}
          </select>
          <select name="maxPrice" onChange={handleInputChange}>
            <option value="">Max Price</option>
            <option value="500000">$500,000</option>
            <option value="1000000">$1,000,000</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchContainer;