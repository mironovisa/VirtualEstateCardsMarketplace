import React, { useState } from 'react';

const RentalForm = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [rentalPrice, setRentalPrice] = useState('');
  const [status, setStatus] = useState('pending'); // Default status

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleRentalPriceChange = (e) => {
    setRentalPrice(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
  };

  return (
    <div className="rental-form">
      <h2>Rental Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={handleStartDateChange}
          required
        />

        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={handleEndDateChange}
          required
        />

        <label htmlFor="rentalPrice">Rental Price:</label>
        <input
          type="text"
          id="rentalPrice"
          value={rentalPrice}
          onChange={handleRentalPriceChange}
          required
        />

        <label htmlFor="status">Status:</label>
        <select id="status" value={status} onChange={handleStatusChange}>
          <option value="pending">Pending</option>
          <option value="initialized">Initialized</option>
          <option value="finished">Finished</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RentalForm;