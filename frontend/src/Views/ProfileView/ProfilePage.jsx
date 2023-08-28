
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

/*
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
            <AnimatePresence exitBeforeEnter mode="wait">
    {activeTab === 'wallet' && (
        <motion.div
            key="wallet"
            layoutId="wallet-content"
        >
            <MyWalletView />
        </motion.div>
    )}
    {activeTab === 'cards' && (
        <motion.div
            key="cards"
            layoutId="cards-content"
        >
            <MyCardsView />
        </motion.div>
    )}
    {activeTab === 'update' && (
        <motion.div
            key="update"
            layoutId="update-content"
        >
            <ProfileUpdate />
        </motion.div>
    )}
</AnimatePresence>
        </div>
    );
}

export default ProfilePage;
*/