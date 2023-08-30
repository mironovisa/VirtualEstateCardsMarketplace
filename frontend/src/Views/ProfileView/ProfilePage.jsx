import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../../Styles/ProfilePage.css';
import MyCardList from './MyCardList';
import ProfileUpdate from './ProfileUpdate';
import PurchasesHistory from './PurchasesHistory';

const AnimatedTabContent = ({ active, children }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 1.5 }}
    >
        {children}
    </motion.div>
);

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
            <div className="page-content">
                {activeTab === 'wallet' && (
                    <AnimatedTabContent active={activeTab === 'wallet'}>
                        <PurchasesHistory />
                    </AnimatedTabContent>
                )}
                {activeTab === 'cards' && (
                    <AnimatedTabContent active={activeTab === 'cards'}>
                        <MyCardList />
                    </AnimatedTabContent>
                )}
                {activeTab === 'update' && (
                    <AnimatedTabContent active={activeTab === 'update'}>
                        <ProfileUpdate />
                    </AnimatedTabContent>
                )}
            </div>
        </div>
    );
}

export default ProfilePage;