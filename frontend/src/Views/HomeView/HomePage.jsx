import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CardList from './CardList';
import SearchNavBar from './SearchNavBar';
import '../../Styles/HomePage.css';

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

const HomePage = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const [isLoading, setIsLoading] = useState(false)
  const [searchParams, setSearchParams] = useState({
    category: '',
    status: '',
    location: '',
    minPrice: '',
    maxPrice: '',
  
  });

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  return (
    <div className={`sb-layout ${sidebarExpanded ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
      <div className="sb-layout__sidebar">
        <SearchNavBar searchParams={searchParams} setSearchParams={setSearchParams} />
        <button className="toggle-sidebar-btn" onClick={toggleSidebar}>
          {sidebarExpanded ? <img className='side-icon' src={require('../../Icons/left-sign.png')} alt='About'></img> 
          : 
          <img className='side-icon' src={require('../../Icons/right-sign.png')} alt='About'></img>}
        </button>
      </div>
      <main className="sb-layout__content">
        <div className="scroll-content">
          <div className='content-title'>
            <h1 className='title-text'>CARD LIST!</h1>
          </div>
          <div className='content-list'>
            <AnimatedTabContent active={true}>
              <CardList searchParams={searchParams} setSearchParams={setSearchParams} isLoading={isLoading} setIsLoading={setIsLoading} />
            </AnimatedTabContent>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
