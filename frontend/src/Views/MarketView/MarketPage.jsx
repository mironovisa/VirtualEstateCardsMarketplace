
import React, { useState } from 'react';
import '../../Styles/MarketPage.css'; // Import your CSS file for styling
import PropertyList from './PropertyList';
import SearchProperty from './SearchProperty';
import MyPropertyList from './MyPropertyList';

const MarketPage = () => {
    const [activeTab, setActiveTab] = useState('PropertyList');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="market-page">
            <h1>Market page</h1>
            <div className="tab-buttons">
                <button onClick={() => handleTabChange('PropertyList')}>Property List</button>
                <button onClick={() => handleTabChange('SearchProperty')}>Search Property</button>
                <button onClick={() => handleTabChange('MyPropertyList')}>My Property List</button>

            </div>
            {activeTab === 'PropertyList' && <PropertyList />}
            {activeTab === 'SearchProperty' && <SearchProperty />}
            {activeTab === 'MyPropertyList' && <MyPropertyList />}
        </div>
    );
}

export default MarketPage;