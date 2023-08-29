

import React, { useState } from 'react';
import '../../Styles/ProfilePage.css';
import MyCardList from './MyCardList';
import ProfileUpdate from './ProfileUpdate';
import PurchasesHistory from './PurchasesHistory';

const ProfilePage = () => {
    const [activeTab, setActiveTab] = useState('wallet'); 

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="profile-page">
            <h1>Profile Page</h1>
            <div className="tab-buttons">
                <button onClick={() => handleTabChange('wallet')}>My Purchases</button>
                <button onClick={() => handleTabChange('cards')}>My Cards</button>
                <button onClick={() => handleTabChange('update')}>Update Profile</button>
            </div>
            {activeTab === 'wallet' && <PurchasesHistory />}
            {activeTab === 'cards' && <MyCardList />}
            {activeTab === 'update' && <ProfileUpdate />}
        </div>
    );
}

export default ProfilePage;