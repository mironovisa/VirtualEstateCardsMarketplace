/*import React from 'react';
import CardList from './CardList';
import SearchNavBar from './SearchNavBar';
import '../../Styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="search-nav-bar-container">
        <SearchNavBar />
      </div>
      <div className="card-list-container">
        <h2>List</h2>
        <CardList />
      </div>
    </div>
  );
};

export default HomePage;*/






import React from 'react';
import CardList from './CardList';
import SearchNavBar from './SearchNavBar';
import '../../Styles/HomePage.css';

const HomePage = () => {
  return (
<div class="s-layout">
<div class="s-layout__sidebar">
<SearchNavBar />
</div>
<main class="s-layout__content">
  <div className='content-title'>
    <h1>CARD LIST!</h1>
  </div>
  <div className='content-list'>
    <CardList />
  </div>
</main>
</div>
  );
};

export default HomePage;

