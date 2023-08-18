

import React, { useState } from 'react';
import '../../Styles/ProfilePage.css';
import MyWalletView from './MyWalletView';
import MyCardsView from './MyCardsView';
import ProfileUpdate from './ProfileUpdate';

const ProfilePage = () => {
    const [activeTab, setActiveTab] = useState('wallet'); 

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="profile-page">
            <h1>Profile Page</h1>
            <div className="tab-buttons">
                <button onClick={() => handleTabChange('wallet')}>My Wallet</button>
                <button onClick={() => handleTabChange('cards')}>My Cards</button>
                <button onClick={() => handleTabChange('update')}>Update Profile</button>
            </div>
            {activeTab === 'wallet' && <MyWalletView />}
            {activeTab === 'cards' && <MyCardsView />}
            {activeTab === 'update' && <ProfileUpdate />}
        </div>
    );
}

export default ProfilePage;