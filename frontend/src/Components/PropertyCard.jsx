import React from 'react';
import '../CompStyles/PropertyCard.css'

const PropertyCard = ({ property }) => {
  const {
    title,
    type,
    status,
    img,
    description,
    location,
    rentalPrice,
    sellingPrice,
    availableUpgrades,
    doneUpgrades,
  } = property;

  return (
    <div className="property-card">
      <img src={img} alt={`${title}'s property`} className="property-image" />
      <h3 className="property-title">{title}</h3>
      <p className="property-type">Type: {type}</p>
      <p className="property-status">Status: {status}</p>
      <p className="property-description">{description}</p>
      <p className="property-location">Location: {location}</p>
      <p className="property-rental-price">Rental Price: {rentalPrice}</p>
      <p className="property-selling-price">Selling Price: {sellingPrice}</p>
      <p className="property-available-upgrades">
        Available Upgrades: {availableUpgrades.join(', ')}
      </p>
      <p className="property-done-upgrades">
        Done Upgrades: {doneUpgrades.join(', ')}
      </p>
    </div>
  );
};

export default PropertyCard;