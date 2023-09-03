import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import '../../Styles/ProfilePage.css';
import MyCardList from './MyCardList';
import ProfileUpdate from './ProfileUpdate';
import PurchasesHistory from './PurchasesHistory';

const AnimatedTabContent = ({ active, children }) => (
  <motion.div
    initial={{ opacity: 0, x: 20, rotate: 0, scale: 0.8 }}
    animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
    exit={{ opacity: 0, x: active ? 20 : -20, rotate: 10, scale: 0.8 }}
    transition={{ duration: 0.5, ease: 'easeInOut' }}
  >
    {children}
  </motion.div>
);

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('wallet');
  const [showTabs, setShowTabs] = useState(true);

  const controls = useAnimation();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setShowTabs(false);
    } else {
      setShowTabs(true);
    }
  };

  useEffect(() => {
    if (showTabs) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: -50 });
    }
  }, [showTabs, controls]);

  return (
    <div className="profile-page">
      <div className="tab-buttons-overlay">
        <motion.ul
          className="tab-buttons"
          animate={controls}
        >
          <li>
            <a
              onClick={() => handleTabChange('wallet')}
              className={activeTab === 'wallet' ? 'active' : ''}
            >
              My Purchases
            </a>
          </li>
          <li>
            <a
              onClick={() => handleTabChange('cards')}
              className={activeTab === 'cards' ? 'active' : ''}
            >
              My Cards
            </a>
          </li>
          <li>
            <a
              onClick={() => handleTabChange('update')}
              className={activeTab === 'update' ? 'active' : ''}
            >
              Update Profile
            </a>
          </li>
        </motion.ul>
      </div>
      <div className="page-content">
      {activeTab === 'cards' && (
          <AnimatedTabContent active={activeTab === 'cards'}>
            <MyCardList />
          </AnimatedTabContent>
        )}
        {activeTab === 'wallet' && (
          <AnimatedTabContent active={activeTab === 'wallet'}>
            <PurchasesHistory />
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
};

export default ProfilePage;