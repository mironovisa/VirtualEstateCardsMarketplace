import React from 'react';
import PropertyCard from '../../Components/PropertyCard'; 

const PropertyList = ({ properties }) => {
    // Mock data for testing purposes
    const mockProperties = [
        {
            id: '1',
            title: 'Sample Property 1',
            type: 'Apartment',
            status: 'For Sale',
            img: 'https://placekitten.com/200/200', // Sample image URL
            description: 'A beautiful property with all the amenities.',
            location: 'City Name',
            rentalPrice: '$1000/month',
            sellingPrice: '$250000',
            availableUpgrades: ['Swimming Pool', 'Gym'],
            doneUpgrades: ['Kitchen Renovation'],
        },
        // Add more mock properties as needed
    ];

    // If properties are not available, use mockProperties for testing
    const propertiesToRender = properties || mockProperties;

    return (
        <div className="property-list">
            {propertiesToRender.map(property => (
                <PropertyCard key={property.id} property={property} />
            ))}
        </div>
    );
}

export default PropertyList;