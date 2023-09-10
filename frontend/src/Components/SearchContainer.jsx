import React, { useState } from 'react';
import '../CompStyles/SearchContainer.css'

const SearchContainer = ({ searchParams, setSearchParams }) => {

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
          <select name="category" onChange={handleInputChange}>
            <option value="">Select</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Building">Building</option>
            <option value="Store">Store</option>
            <option value="Parking_space">Parking Space</option>
          </select>
        </div>
        <div>
          <label>Status:</label>
          <select name="status" onChange={handleInputChange}>
            <option value="">Select</option>
            <option value="Sold">Sold</option>
            <option value="Available">Available</option>
          </select>
        </div>
        
        <div>
          <label>Price Range:</label>
          <select name="minPrice" onChange={handleInputChange}>
            <option value="">Min Price</option>
            <option value="135">$135</option>
            <option value="140">$140</option>
            <option value="145">$145</option>
            <option value="150">$150</option>
            <option value="155">$155</option>
            {/* Add more options as needed */}
          </select>
          <select name="maxPrice" onChange={handleInputChange}>
            <option value="">Max Price</option>
            <option value="135">$135</option>
            <option value="140">$140</option>
            <option value="145">$145</option>
            <option value="150">$150</option>
            <option value="155">$155</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchContainer;