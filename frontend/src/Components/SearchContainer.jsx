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

    
  };

  return (
    <div className="search-container">
      <h2>Search Properties</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Category:</label>
          <select name="category" onChange={handleInputChange}>
            <option value="">Select</option>
            <option value="Cubism">Cubism</option>
            <option value="Surrealism">Surrealism</option>
            <option value="Realism">Realism</option>
            <option value="Abstract Expressionism">Abstract Expressionism</option>
            <option value="Romanticism">Romanticism</option>
            <option value="Pop_Art">Pop Art</option>
            <option value="Impressionism">Impressionism</option>
            <option value="Renaissance">Renaissance</option>
            <option value="Fauvism">Fauvism</option>
            <option value="Post-Impressionism">Post-Impressionism</option>
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