import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CardList from './CardList';
import SearchNavBar from './SearchNavBar';
import '../../Styles/HomePage.css';

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

const HomePage = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  return (
    <div className={`s-layout ${sidebarExpanded ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
      <div className="s-layout__sidebar">
        <SearchNavBar />
        <button className="toggle-sidebar-btn" onClick={toggleSidebar}>
          {sidebarExpanded ? 'Collapse Sidebar' : 'Expand Sidebar'}
        </button>
      </div>
      <main className="s-layout__content">
        <div class="scroll-content">
          <div className='content-title'>
            <h1>CARD LIST!</h1>
          </div>
          <div className='content-list'>
            <AnimatedTabContent active={true}>
              <CardList />
            </AnimatedTabContent>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;

