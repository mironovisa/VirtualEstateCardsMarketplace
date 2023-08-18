
import React, { useState } from 'react';
import '../../Styles/MarketPage.css'; // Import your CSS file for styling
import PropertyList from './PropertyList';
import SearchProperty from './SearchProperty';
import MyPropertyList from './MyPropertyList';

const MarketPage = () => {
    const [activeTab, setActiveTab] = useState('propertyList');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="market-page">
            <div className="tab-buttons">
                <button onClick={() => handleTabChange('propertyList')}>Property List</button>
                <button onClick={() => handleTabChange('searchProperty')}>Search Property</button>
                <button onClick={() => handleTabChange('myPropertyList')}>My Property List</button>
            </div>
            {activeTab === 'propertyList' && <PropertyList />}
            {activeTab === 'searchProperty' && <SearchProperty />}
            {activeTab === 'myPropertyList' && <MyPropertyList />}
        </div>
    );
}

export default MarketPage;