import React, { useState } from 'react';
import PropertyCard from '../../Components/PropertyCard'; // Import your PropertyCard component

const MyPropertyList = () => {
    const [propertyType, setPropertyType] = useState('selling'); 

    const handlePropertyTypeChange = (type) => {
        setPropertyType(type);
    };

    // Sample data for selling properties
    const sellingProperties = [
        {
            id: '1',
            title: 'Sample Selling Property 1',
            type: 'Apartment',
            status: 'For Sale',
            img: 'https://placekitten.com/200/200',
            description: 'A beautiful property for sale.',
            location: 'City A',
            rentalPrice: '$1000/month',
            sellingPrice: '$250000',
            availableUpgrades: ['Swimming Pool'],
            doneUpgrades: ['Kitchen Renovation'],
        },
        // Add more selling properties as needed
    ];

    // Sample data for renting properties
    const rentingProperties = [
        {
            id: '2',
            title: 'Sample Renting Property 1',
            type: 'House',
            status: 'For Rent',
            img: 'https://placekitten.com/200/200',
            description: 'A cozy property for rent.',
            location: 'City B',
            rentalPrice: '$800/month',
            sellingPrice: '',
            availableUpgrades: ['Gym'],
            doneUpgrades: ['Bathroom Upgrade'],
        },
        // Add more renting properties as needed
    ];

    const propertiesToShow = propertyType === 'selling' ? sellingProperties : rentingProperties;

    return (
        <div className='my-property-cont'>
            <h2>My Property List</h2>
            <div>
                <button
                    onClick={() => handlePropertyTypeChange('selling')}
                    className={propertyType === 'selling' ? 'active' : ''}
                >
                    Selling Properties
                </button>
                <button
                    onClick={() => handlePropertyTypeChange('renting')}
                    className={propertyType === 'renting' ? 'active' : ''}
                >
                    Renting Properties
                </button>
            </div>
            {propertyType === 'selling' && (
                <div>
                    <h3>Selling Properties:</h3>
                    <div className="property-list">
                        {sellingProperties.map(property => (
                            <PropertyCard key={property.id} property={property} />
                        ))}
                    </div>
                </div>
            )}
            {propertyType === 'renting' && (
                <div>
                    <h3>Renting Properties:</h3>
                    <div className="property-list">
                        {rentingProperties.map(property => (
                            <PropertyCard key={property.id} property={property} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default MyPropertyList;