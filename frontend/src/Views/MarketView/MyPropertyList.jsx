import React, { useState } from 'react';

const MyPropertyList = () => {
    const [propertyType, setPropertyType] = useState('selling'); 

    const handlePropertyTypeChange = (type) => {
        setPropertyType(type);
    };

    return (
        <div>
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
                <p>This is your list of properties available for selling.</p>
            )}
            {propertyType === 'renting' && (
                <p>This is your list of properties available for renting.</p>
            )}
        </div>
    );
}

export default MyPropertyList;